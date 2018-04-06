import React, {Component} from 'react';

//import assets
import myViewport from '../assets/myViewport.png'
import ghqLogo from '../assets/g-fin.png'
import fableLogo from '../assets/fableLogo.png'
import gotLogo from '../assets/gotcyoa.png'

// import components
import ProjectSlides from './projectSlides.js'

class Projects extends Component {
  render(){
    return(
      <div id="projects">
        <h1>Projects</h1>
        <div className="projSlideL" style={{marginLeft: this.props.margin1 + "em"}}>
          <ProjectSlides logo={myViewport} title="MyViewport" description="Built with a Raspberry Pi and integrated with Alexa, this is a smart mirror designed for you!" urllink="https://www.youtube.com/watch?v=-42N0AdAzV8" gitlink="https://github.com/d-pfeif/mySmartMirror"/>
        </div>
        <div className="projSlideL" style={{marginLeft: this.props.margin2 + "em"}}>
          <ProjectSlides logo={ghqLogo} title="Galvanize HQ" description="A one-stop-shop for Galvanize students where they can view all resources available to them daily." urllink="https://galvanize-hq.firebaseapp.com/" gitlink="https://github.com/Go-Getters-g64/g-hq"/>
        </div>
        <div className="projSlideL" style={{marginLeft: this.props.margin3 + "em"}}>
          <ProjectSlides logo={fableLogo} title="Fable" description="An online community where writers can post short stories and get feedback on their work." urllink="https://prosepros-fable.herokuapp.com/" gitlink="https://github.com/Prose-Pros/fable"/>
        </div>
        <div className="projSlideL" style={{marginLeft: this.props.margin4 + "em"}}>
          <ProjectSlides logo={gotLogo} title="King Slayer" description="A choose your own adventure game set in the Game of Thrones world." urllink="https://bestcyoa.firebaseapp.com" gitlink="https://github.com/d-pfeif/gotcyoa"/>
        </div>
      </div>
    )
  }
}

export default Projects
