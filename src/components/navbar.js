import React, { Component } from 'react';
import resume from "../assets/DakotaPfeifer-resume.pdf"

class NavBar extends Component {
  render(){
    return(
      <div className="navigation" style={{backgroundColor: 'rgba(80, 85, 90,' +  String(this.props.navBarOpacity) + ')'}}>
        <div className="navLeft">
          <p></p>
        </div>
        <div className="navRight">
          <a href={resume} download><p>Resume</p></a>
        </div>
      </div>
    )
  }
}

export default NavBar
