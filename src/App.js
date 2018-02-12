import React, { Component } from 'react';
import './App.css';
import AboutMe from "./components/aboutMe.js"
import Landing from "./components/landing.js"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logoWidth: 50,
      navBarOpacity: 0
    }

    this.logoSizeChange = this.logoSizeChange.bind(this)
    this.navBarChange = this.navBarChange.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.logoSizeChange)
    window.addEventListener('scroll', this.navBarChange)
  }

  logoSizeChange() {
    let Y = window.innerHeight / 1.75
    let X = window.innerHeight
    if (window.scrollY > Y) {
      // if(window.scrollY) {
      while (this.state.logoWidth > 20) {
        // console.log('haha');
        this.setState({logoWidth: this.state.logoWidth - 1})

      }
        // console.log(this.state.logoWidth);
      // }
    } else {
      this.setState({logoWidth: 50})
    }
  }

  navBarChange() {
    let Y = window.innerHeight / 1.75
    if (window.scrollY > Y) {
      this.setState({navBarOpacity: 0.8})
    } else {
      this.setState({navBarOpacity: 0})
    }
  }

  render() {
    return (
      <div className="App">
        <Landing logoWidth={this.state.logoWidth} navBarOpacity={this.state.navBarOpacity} />
        <AboutMe />
      </div>
    );
  }
}

export default App;
