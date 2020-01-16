import React, { Component } from 'react';
import Subject from "./components/Subject"
import TOC from "./components/TOC"
import Content from "./components/Content"
import './App.css';

class App extends Component {
  constructor(props){ //가장 먼저 실행되어 state를 초기화한다.
    super(props);
    this.state = {
      subject:{title:'WEB', sub:'world wide web!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for Information'},
        {id:2, title:'CSS', desc:'CSS is for Design'},
        {id:3, title:'Javascript', desc:'Javascript is for Interactive'}
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;
