import React, { Component } from 'react';
import './App.css';
import AboutMe from "./components/aboutMe.js"
import Landing from "./components/landing.js"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logoHeight: 40,
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
      this.setState({navBarOpacity: 'flex'})
    } else {
      this.setState({navBarOpacity: 'none'})
    }
  }

  render() {
    return (
      <div className="App">
        <Landing logoHeight={this.state.logoHeight} navBarOpacity={this.state.navBarOpacity} />
        <AboutMe />
      </div>
    );
  }
}

export default App;
