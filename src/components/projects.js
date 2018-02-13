import React, {Component} from 'react';

// import components
import ProjectSlides from './projectSlides.js'

class Projects extends Component {
  render(){
    return(
      <div className="projects">
        <h1 style={{marginRight: 15+'em', marginTop: 4+'em'}}>Projects</h1>
        <div className="projSlide">
          <ProjectSlides />
        </div>
      </div>
    )
  }
}

export default Projects
