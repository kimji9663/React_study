import React, { Component } from 'react';
import Subject from "./components/Subject"
import TOC from "./components/TOC"
import Control from './components/Control';
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";
import Rellax from 'rellax';
import './css/App.css';

class App extends Component {
  constructor(props){ //가장 먼저 실행되어 state를 초기화한다.
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode:'welcome',
      selected_content_id:2,
      subject:{title:'To do list', sub:'What should I do today?'},
      welcome:{title:'오늘 할일은?', desc:'계획적으로 살자.'},
      contents:[{
          id:1, 
          title:'마트가서 장보기', 
          desc: '* Shopping List\n\n사과 3개\n밀가루 한 봉지\n계란 한 판\n올리브유\n돼지고기 한 근'
        },
        {
          id:2, 
          title:'자바스크립트 공부하기', 
          desc:'- 알고리즘 문제 풀기\n\n- 예제 따라서 풀어보기\n\n- 유튜브 강의듣기'
        },
        {id:3, 
          title:'친구랑 저녁 약속', 
          desc:'코로나 땜에 걱정되기는 하지만\n마스크를 꼭 쓰고\n사람 적은 동네에서 만나자.'
        }
      ]
    }
  }

  componentDidMount() {
    this.rellax = new Rellax('.rellax');
  }

  getReadContent(){
    var i = 0;
    while(i < this.state.contents.length){
      var data = this.state.contents[i];
      if(data.id === this.state.selected_content_id){
        return data;
        break;
      }
      i = i + 1;
    }
  }
  getContent(){
    var _title, _desc, _article, _content = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode === 'read'){
      _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
    } else if(this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title, _desc){
        //add content to this.state.contents
        this.max_content_id = this.max_content_id+1;

        // * push는 오리지널 데이터를 변경하므로 좋지않다.
        // this.state.contents.push(
        //   {id:this.max_content_id, title:_title, desc:_desc}
        // );
        
        // * concat은 오리지널 데이터를 변경하지 않은 상태에 새로운 데이터를 추가한다. 
        var _contents = this.state.contents.concat( //새로운 데이터가 추가된 값을 새 변수에 담는다.
          {id:this.max_content_id, title:_title, desc:_desc}
        )
        
        this.setState({
          //contents:this.state.contents
          contents: _contents,
          mode:'read',
          selected_content_id:this.max_content_id
        });
      }.bind(this)}></CreateContent>
    } else if(this.state.mode === 'update'){
      _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={ // _content = {id: 2, title: "CSS", desc: "CSS is for Design"}
      function(_id, _title, _desc){ //_content의 배열 순서대로 대입한다.
        var _contents = Array.from(this.state.contents); // 기존의 데이터를 복제하여 새로운 배열을 만듦.
        var i = 0;
        while (i < _contents.length) {
          if(_contents[i].id === _id){
            _contents[i] = {id:_id, title:_title, desc:_desc};
            break;
          }
          i = i + 1;
        }
        this.setState({
          contents: _contents,
          mode:'read'
        });
      }.bind(this)}></UpdateContent>
    }
    return _article;
  }

  render() {
    console.log('App render');
    return (
      <div className="App">
        <div id="bg"></div>
        <div className="rellax square" style={{transform: `rotate(45deg)`}} data-rellax-speed="4"></div>
        <div className="rellax ractangle" style={{transform: `rotate(45deg)`}} data-rellax-speed="7"></div>
        <div className="rellax circle" style={{transform: `rotate(45deg)`}} data-rellax-speed="1"></div>
        <div className="rellax square small" style={{transform: `rotate(45deg)`}} data-rellax-speed="12"></div>
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode:'welcome'});
          }.bind(this)}
        >
        </Subject>
        
        <TOC 
          onChangePage={function(id){
            this.setState({
              mode:'read',
              selected_content_id:Number(id)
            });
          }.bind(this)} 
          data={this.state.contents}
        >
        </TOC>

        <main>
          {this.getContent()}
          <Control onChangeMode={function(_mode){
            if(_mode === 'delete'){
              if(window.confirm('really?')){
                var _contents = Array.from(this.state.contents);
                var i = 0;
                while (i < this.state.contents.length) {
                  if(_contents[i].id === this.state.selected_content_id){
                    _contents.splice(i,1);
                    break;
                  }
                  i = i + 1;
                }
                this.setState({
                  mode:'welcome',
                  contents:_contents
                });
                alert('deleted!')
              }
            } else {
              this.setState({
                mode:_mode
            })
          }
          }.bind(this)}></Control>


          <div className="flexbox__container">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>

          <div className="gridbox__container">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
