import React, { Component } from 'react';

class Control extends Component {
  render() {
    console.log('Subject render');
    return (
      <div id="buttons">
        <ul>
          <li class="create"><a href="/create" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('create');
          }.bind(this)}>create</a></li>
          <li class="update"><a href="/update" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('update');
          }.bind(this)}>update</a></li>
          <li class="delete"><input type="button" value="delete" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('delete');
          }.bind(this)}></input></li>
        </ul>
      </div>
    );
  }
}

export default Control;