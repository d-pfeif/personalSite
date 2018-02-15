import React, { Component } from 'react';
import './App.css';

// import components
import AboutMe from "./components/aboutMe.js"
import Landing from "./components/landing.js"
import Projects from "./components/projects.js"
import Technologies from "./components/technologies.js"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logoHeight: 40,
      navBarMarginTop: -5,
      landingLinkDisplay: 'flex',
      project1Margin: -150,
      project2Margin: -150,
      project3Margin: -150,
      project4Margin: -150,
      rainDisplay: 'none',
      arrowDisplay: 'block'
    }

    this.logoSizeChange = this.logoSizeChange.bind(this)
    this.landingLinksChange = this.landingLinksChange.bind(this)
    this.projectFlyIn1 = this.projectFlyIn1.bind(this)
    this.projectFlyIn2 = this.projectFlyIn2.bind(this)
    this.projectFlyIn3 = this.projectFlyIn3.bind(this)
    this.projectFlyIn4 = this.projectFlyIn4.bind(this)
    this.displayRain = this.displayRain.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.logoSizeChange)
    window.addEventListener('scroll', this.landingLinksChange)
    window.addEventListener('scroll', this.projectFlyIn1)
    window.addEventListener('scroll', this.projectFlyIn2)
    window.addEventListener('scroll', this.projectFlyIn3)
    window.addEventListener('scroll', this.projectFlyIn4)
    window.addEventListener('scroll', this.displayRain)
  }

  logoSizeChange() {
    let Y = window.innerHeight / 1.75
    let X = window.innerHeight
    if (window.scrollY > Y) {
      this.setState({logoHeight: 175, arrowDisplay: 'none', navBarMarginTop: 0})
    } else {
      this.setState({logoHeight: 40, arrowDisplay: 'block', navBarMarginTop: -5})
    }
  }

  landingLinksChange() {
    let Y = window.innerHeight / 1.75
    if (window.scrollY > Y) {
      this.setState({landingLinkDisplay: 'none'})
    } else {
      this.setState({landingLinkDisplay: 'flex'})
    }
  }

  projectFlyIn1() {
    let multiplier = 1.45
    let Y = window.innerHeight * multiplier
    if (window.scrollY > Y) {
      this.setState({project1Margin: 0})
    } else {
      this.setState({project1Margin: -150})
    }
  }

  projectFlyIn2() {
    let multiplier = 1.90
    let Y = window.innerHeight * multiplier
    if (window.scrollY > Y) {
      this.setState({project2Margin: 0})
    } else {
      this.setState({project2Margin: -150})
    }
  }

  projectFlyIn3() {
    let multiplier = 2.35
    let Y = window.innerHeight * multiplier
    if (window.scrollY > Y) {
      this.setState({project3Margin: 0})
    } else {
      this.setState({project3Margin: -150})
    }
  }

  projectFlyIn4() {
    let multiplier = 2.8
    let Y = window.innerHeight * multiplier
    if (window.scrollY > Y) {
      this.setState({project4Margin: 0})
    } else {
      this.setState({project4Margin: -150})
    }
  }

  displayRain() {
    let multiplier = 3.5
    let Y = window.innerHeight * multiplier
    if (window.scrollY > Y) {
      this.setState({rainDisplay: 'flex'})
    } else {
      this.setState({rainDisplay: 'none'})
    }
  }

  render() {
    return (
      <div className="App">
        <Landing logoHeight={this.state.logoHeight} navBarMarginTop={this.state.navBarMarginTop} landingLinkDisplay={this.state.landingLinkDisplay} arrowDisplay={this.state.arrowDisplay}/>
        <AboutMe />
        <Projects margin1={this.state.project1Margin} margin2={this.state.project2Margin} margin3={this.state.project3Margin} margin4={this.state.project4Margin} />
        <Technologies rainDisplay={this.state.rainDisplay} />
      </div>
    );
  }
}

export default App;
