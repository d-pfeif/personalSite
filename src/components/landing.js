import React, { Component } from 'react';
import logo from "../assets/logo.png"
import chalk from "../assets/chalkboard-background.jpg"
import NavBar from "./navbar.js"
import resume from "../assets/DakotaPfeifer-resume.pdf"
import gitHub from "../assets/github.png"
import linkedIn from "../assets/linkedin.png"

class Landing extends Component {
  render(){
    // console.log("landing page ", this.props.logoWidth);
    return(
      <div className="landing">
        <NavBar navBarOpacity={this.props.navBarOpacity} />
        <img src={chalk} className="chalkboard"/>
        <img style={{width: this.props.logoWidth+"%"}} src={logo} className="logo"/>
        <div className="nameTitle">
          <h1>Dakota Pfeifer</h1>
          <h2>Software Developer</h2>
        </div>
        <div className="links">
          <a href="https://www.linkedin.com/in/d-pfeif/" target="_blank"><img className="icons" src={linkedIn} /></a>
          <a href="https://github.com/d-pfeif" target="_blank"><img className="icons" src={gitHub} /></a>
          <a href={resume} download><h3>Resume</h3></a>
        </div>
      </div>
    )
  }
}

export default Landing
