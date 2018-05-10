import React, { Component } from 'react';
import resume from "../assets/DakotaPfeifer-resume.pdf"
import gitHub from "../assets/github.png"
import linkedIn from "../assets/linkedin.png"

class NavBar extends Component {
  goToProjects() {
    console.log('hello');
    window.scrollY = window.innerHeight * 2
  }

  render(){
    return(
      <div className="navigation" style={{marginTop: this.props.navBarMarginTop+"em"}}>
        <div className="navLeft">
          <a href="#landing"><p>Back</p></a>
          <a href="#projects"><p>Projects</p></a>
          <a href="#tech"><p>Technology</p></a>
          <a href="#videoArea"><p>Videos</p></a>
        </div>
        <div className="navRight">
          <a href="https://www.linkedin.com/in/d-pfeif/" target="_blank" rel="noopener noreferrer"><img alt="LinkedIn" className="icons" src={linkedIn} /></a>
          <a href="https://github.com/d-pfeif" target="_blank" rel="noopener noreferrer"><img alt="GitHub" className="icons" src={gitHub} /></a>
          <a href={resume} download><p>Resume</p></a>
        </div>
      </div>
    )
  }
}

export default NavBar
