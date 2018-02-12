import React, { Component } from 'react';
import logo from "../assets/logo.png"
import chalk from "../assets/chalkboard-background.jpg"

class Landing extends Component {
  render(){
    // console.log("landing page ", this.props.logoWidth);
    return(
      <div className="landing">
        <img src={chalk} className="chalkboard"/>
        <img style={{width: this.props.logoWidth+"%"}} src={logo} className="logo"/>
        <div className="nameTitle">
          <h1>Dakota Pfeifer</h1>
          <h2>Software Engineer</h2>
        </div>
      </div>
    )
  }
}

export default Landing
