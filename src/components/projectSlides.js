import React, {Component} from 'react';

class ProjectSlides extends Component{
  render(){
    return(
      <div className="projArea">
        <img src={this.props.logo} className="projLogo"/>
        <div className="projInfo">
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
          <div className="linkArea">
          <h3>Links</h3>
            <div className="projLinks">
              <a href={this.props.urllink} target="_blank"><h3>{this.props.title}</h3></a>
              <a href={this.props.gitlink} target="_blank"><h3>GitHub</h3></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectSlides
