import React, { Component } from 'react';
import './App.css';
import AboutMe from "./components/aboutMe.js"
import Landing from "./components/landing.js"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logoWidth: 50
    }

    this.navBarChange = this.navBarChange.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.navBarChange)
  }

  navBarChange() {
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

  render() {
    return (
      <div className="App">
        <Landing logoWidth={this.state.logoWidth} />
        <AboutMe />
      </div>
    );
  }
}

export default App;
