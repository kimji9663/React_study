import React, { Component } from 'react';
import Rellax from 'rellax';

class RellaxPage extends Component {
  componentDidMount() {
    // We can keep a reference to Rellax in case we need it later
    this.rellax = new Rellax('.rellax')
  }

  render() {
    const squareSt = {
        position: `absolute`,
        top: `800px`,
        left: `50%`,
        width: `100px`,
        height: `50px`,
        background: `blue`
    }
    const rectSt = {
        position: `absolute`,
        top: `1000px`,
        left: `20%`,
        width: `100px`,
        height: `100px`,
        background: `pink`
    }
    return (
      <div style={{margin: `0`, padding: `0`, background: `url(https://149349300.v2.pressablecdn.com/wp-content/uploads/2019/06/3d-cube-background-4k-yo-1210x642.jpg)`}}>
        <div style={{
            width: `100%`,
            height: `150vh`,
        }}>
            <div className="rellax square" style={squareSt}>rellax square</div>
            <div className="rellax rectangle" style={rectSt}>rellax rectangle</div>
        </div>
        <div>Hello Rellax!</div>
      </div>
    )
  }
}

export default RellaxPage;