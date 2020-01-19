import React, { Component } from 'react';
import Subject from "./components/Subject"
import TOC from "./components/TOC"
import Control from './components/Control';
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import './App.css';

class App extends Component {
  constructor(props){ //가장 먼저 실행되어 state를 초기화한다.
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode:'read',
      selected_content_id:2,
      subject:{title:'WEB', sub:'world wide web!'},
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for Information'},
        {id:2, title:'CSS', desc:'CSS is for Design'},
        {id:3, title:'Javascript', desc:'Javascript is for Interactive'}
      ]
    }
  }
  render() {
    console.log('App render');
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
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
          contents: _contents
        })
      }.bind(this)}></CreateContent>
    }
    return (
      <div className="App">
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
        <Control onChangeMode={function(_mode){
          this.setState({
            mode:_mode
          })
        }.bind(this)}></Control>
        {_article}
      </div>
    );
  }
}

export default App;
