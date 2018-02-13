import React, { Component } from 'react';
import resume from "../assets/DakotaPfeifer-resume.pdf"
import gitHub from "../assets/github.png"
import linkedIn from "../assets/linkedin.png"

class NavBar extends Component {
  render(){
    return(
      <div className="navigation" style={{marginTop: this.props.navBarMarginTop+"em"}}>
        <div className="navLeft">
          <p></p>
        </div>
        <div className="navRight">
          <a href="https://www.linkedin.com/in/d-pfeif/" target="_blank"><img className="icons" src={linkedIn} /></a>
          <a href="https://github.com/d-pfeif" target="_blank"><img className="icons" src={gitHub} /></a>
          <a href={resume} download><p>Resume</p></a>
        </div>
      </div>
    )
  }
}

export default NavBar
