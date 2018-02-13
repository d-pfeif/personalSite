import React, {Component} from 'react';

//import assets
import myViewport from '../assets/myViewport.png'
import ghqLogo from '../assets/g-fin.png'
import fableLogo from '../assets/fableLogo.png'
import gotLogo from '../assets/gotcyoa.png'

class ProjectSlides extends Component{
  constructor(props) {
    super(props)

    this.state = {
      logo: myViewport,
      title: 'MyViewport',
      description: 'Built with a Raspberry Pi and integrated with Alexa, this is a smart mirror designed for you!',
      urllink: 'https://www.youtube.com/watch?v=-42N0AdAzV8',
      gitlink: 'https://github.com/d-pfeif/mySmartMirror'
    }

    this.masterRight = this.masterRight.bind(this)
    this.masterLeft = this.masterLeft.bind(this)
  }

  masterRight() {
    this.changeLogoRight()
    this.changeTitleRight()
    this.changeDescRight()
    this.changeUrlRight()
    this.changeGitRight()
  }

  changeLogoRight() {
    if(this.state.logo == myViewport){
      this.setState({logo: ghqLogo})
    } else if (this.state.logo == ghqLogo){
      this.setState({logo: fableLogo})
    } else if (this.state.logo == fableLogo){
      this.setState({logo: gotLogo})
    } else {
      this.setState({logo: myViewport})
    }
  }

  changeTitleRight() {
    if(this.state.title == 'MyViewport'){
      this.setState({title: 'Galvanize HQ'})
    } else if (this.state.title == 'Galvanize HQ'){
      this.setState({title: 'Fable'})
    } else if (this.state.title == 'Fable'){
      this.setState({title: 'King Slayer'})
    } else {
      this.setState({title: 'MyViewport'})
    }
  }

  changeDescRight() {
    if(this.state.description == 'A choose your own adventure game set in the Game of Thrones world.'){
      this.setState({description: 'Built with a Raspberry Pi and integrated with Alexa, this is a smart mirror designed for you!'})
    } else if (this.state.description == 'Built with a Raspberry Pi and integrated with Alexa, this is a smart mirror designed for you!'){
      this.setState({description: 'A one-stop-shop for Galvanize students where they can view all resources available to them daily.'})
    } else if (this.state.description == 'A one-stop-shop for Galvanize students where they can view all resources available to them daily.'){
      this.setState({description: 'An online community where writers can post short stories and get feedback on their work.'})
    } else if (this.state.description == 'An online community where writers can post short stories and get feedback on their work.'){
      this.setState({description: 'A choose your own adventure game set in the Game of Thrones world.'})
    }
  }

  changeUrlRight() {
    if(this.state.title == 'MyViewport'){
      this.setState({urllink: 'https://galvanize-hq.firebaseapp.com/'})
    } else if (this.state.title == 'Galvanize HQ'){
      this.setState({urllink: 'https://prosepros-fable.herokuapp.com/'})
    } else if (this.state.title == 'Fable'){
      this.setState({urllink: 'https://bestcyoa.firebaseapp.com'})
    } else {
      this.setState({urllink: 'https://www.youtube.com/watch?v=-42N0AdAzV8'})
    }
  }

  changeGitRight() {
    if(this.state.title == 'MyViewport'){
      this.setState({gitlink: 'https://github.com/Go-Getters-g64/g-hq'})
    } else if (this.state.title == 'Galvanize HQ'){
      this.setState({gitlink: 'https://github.com/Prose-Pros/fable'})
    } else if (this.state.title == 'Fable'){
      this.setState({gitlink: 'https://github.com/d-pfeif/gotcyoa'})
    } else {
      this.setState({gitlink: "https://github.com/d-pfeif/mySmartMirror"})
    }
  }

  masterLeft() {
    this.changeLogoLeft()
    this.changeTitleLeft()
    this.changeDescLeft()
    this.changeUrlLeft()
    this.changeGitLeft()
  }

  changeLogoLeft() {
    if(this.state.logo == myViewport){
      this.setState({logo: gotLogo})
    } else if (this.state.logo == ghqLogo){
      this.setState({logo: myViewport})
    } else if (this.state.logo == fableLogo){
      this.setState({logo: ghqLogo})
    } else {
      this.setState({logo: fableLogo})
    }
  }

  changeTitleLeft() {
    if(this.state.title == 'MyViewport'){
      this.setState({title: 'King Slayer'})
    } else if (this.state.title == 'Galvanize HQ'){
      this.setState({title: 'MyViewport'})
    } else if (this.state.title == 'Fable'){
      this.setState({title: 'Galvanize HQ'})
    } else {
      this.setState({title: 'Fable'})
    }
  }

  changeDescLeft() {
    if(this.state.description == 'A choose your own adventure game set in the Game of Thrones world.'){
      this.setState({description: 'An online community where writers can post short stories and get feedback on their work.'})
    } else if (this.state.description == 'Built with a Raspberry Pi and integrated with Alexa, this is a smart mirror designed for you!'){
      this.setState({description: 'A choose your own adventure game set in the Game of Thrones world.'})
    } else if (this.state.description == 'A one-stop-shop for Galvanize students where they can view all resources available to them daily.'){
      this.setState({description: 'Built with a Raspberry Pi and integrated with Alexa, this is a smart mirror designed for you!'})
    } else if (this.state.description == 'An online community where writers can post short stories and get feedback on their work.'){
      this.setState({description: 'A one-stop-shop for Galvanize students where they can view all resources available to them daily.'})
    }
  }

  changeUrlLeft() {
    if(this.state.title == 'MyViewport'){
      this.setState({urllink: 'https://bestcyoa.firebaseapp.com'})
    } else if (this.state.title == 'Galvanize HQ'){
      this.setState({urllink: 'https://www.youtube.com/watch?v=-42N0AdAzV8'})
    } else if (this.state.title == 'Fable'){
      this.setState({urllink: 'https://galvanize-hq.firebaseapp.com/'})
    } else {
      this.setState({urllink: 'https://prosepros-fable.herokuapp.com/'})
    }
  }

  changeGitLeft() {
    if(this.state.title == 'MyViewport'){
      this.setState({gitlink: 'https://github.com/d-pfeif/gotcyoa'})
    } else if (this.state.title == 'Galvanize HQ'){
      this.setState({gitlink: "https://github.com/d-pfeif/mySmartMirror"})
    } else if (this.state.title == 'Fable'){
      this.setState({gitlink: 'https://github.com/Go-Getters-g64/g-hq'})
    } else {
      this.setState({gitlink: 'https://github.com/Prose-Pros/fable'})
    }
  }

  render(){
    return(
      <div className="projArea">
        <button onClick={this.masterLeft}>prev</button>
        <img src={this.state.logo} className="projLogo"/>
        <div className="projInfo">
          <h3>{this.state.title}</h3>
          <p>{this.state.description}</p>
          <h3>Links</h3>
          <div className="projLinks">
            <a href={this.state.urllink} target="_blank"><h3>{this.state.title}</h3></a>
            <a href={this.state.gitlink} target="_blank"><h3>GitHub</h3></a>
          </div>
        </div>
        <button onClick={this.masterRight}>next</button>
      </div>
    )
  }
}

export default ProjectSlides
