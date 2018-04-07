import React, { Component } from 'react';

// import components
import NavBar from "./navbar.js"

// import assets
import logo from "../assets/logo.png"
import chalk from "../assets/chalkboard-background.jpg"
import resume from "../assets/DakotaPfeifer-resume.pdf"
import gitHub from "../assets/github.png"
import linkedIn from "../assets/linkedin.png"
import arrow from "../assets/rightarrow.png"

class Landing extends Component {

  render(){
    return(
      <div id="landing">
        <NavBar navBarMarginTop={this.props.navBarMarginTop} />
        <img src={chalk} className="chalkboard"/>
        <img style={this.props.logoHeight < 100 ? {height: this.props.logoHeight +"%"} : {height: this.props.logoHeight + "px"}} src={logo} className="logo"/>
        <div className="nameTitle">
          <h1>Dakota Pfeifer</h1>
          <h2>Full Stack Developer</h2>
        </div>
        <div className="links" style={{display: this.props.landingLinkDisplay}}>
          <a href="#projects"><h3>Projects</h3></a>
          <a href="#tech"><h3>Technology</h3></a>
          <a href="#videoArea"><h3>Videos</h3></a>
          <a href="https://www.linkedin.com/in/d-pfeif/" target="_blank"><img className="icons" src={linkedIn} /></a>
          <a href="https://github.com/d-pfeif" target="_blank"><img className="icons" src={gitHub} /></a>
          <a href={resume} download><h3>Resume</h3></a>
        </div>
        <img className="downArrow" src={arrow} style={{display: this.props.arrowDisplay}} alt="arrow" />
        <img className="downArrow" src={arrow} style={{left: 10 + "em", display: this.props.arrowDisplay}} alt="arrow" />
        <img className="downArrow" src={arrow} style={{right: 10 + "em", display: this.props.arrowDisplay}} alt="arrow" />
      </div>
    )
  }
}

export default Landing
