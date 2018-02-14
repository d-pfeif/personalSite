import React, { Component } from 'react';
import './App.css';

// import components
import AboutMe from "./components/aboutMe.js"
import Landing from "./components/landing.js"
import Projects from "./components/projects.js"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logoHeight: 40,
      navBarMarginTop: 0,
      landingLinkDisplay: 'flex'
    }

    this.logoSizeChange = this.logoSizeChange.bind(this)
    this.navBarChange = this.navBarChange.bind(this)
    this.landingLinksChange = this.landingLinksChange.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.logoSizeChange)
    window.addEventListener('scroll', this.navBarChange)
    window.addEventListener('scroll', this.landingLinksChange)
  }

  logoSizeChange() {
    let Y = window.innerHeight / 1.75
    let X = window.innerHeight
    if (window.scrollY > Y) {
      // if(window.scrollY) {
      this.setState({logoHeight: 175})
        // console.log(this.state.logoHeight);
      // }
    } else {
      this.setState({logoHeight: 40})
    }
  }

  navBarChange() {
    let Y = window.innerHeight / 1.75
    if (window.scrollY > Y) {
      this.setState({navBarMarginTop: 0})
    } else {
      this.setState({navBarMarginTop: -5})
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

  render() {
    return (
      <div className="App">
        <Landing logoHeight={this.state.logoHeight} navBarMarginTop={this.state.navBarMarginTop} landingLinkDisplay={this.state.landingLinkDisplay} />
        <AboutMe />
        <Projects />
      </div>
    );
  }
}

export default App;
