import React, { Component } from 'react';
import myFace from '../assets/myFace.png'

class AboutMe extends Component {
  render(){
    return(
      <div className="about">
        <img src={myFace} className="myFace" />
        <div className="aboutSection">
          <h2>ABOUT ME</h2>
          <p><i>Wheresoever you go, go with all your heart.</i> -Confucius</p>
          <p>I was born in Minnesota and moved to Colorado when I was 11. Since then I had dabbled with programming and building websites. It wasn’t until I turned 24 that I decided to dive into a new career as a developer.</p>
          <p>I love programming and every aspect of the industry: team communication, time management, creativity, problem solving, and continual learning! I’ve worked on group projects, lead community-wide breakouts on new technologies, and helped teach JavaScript fundamentals as a teacher’s assistant.</p>
          <p>This industry is something I’m truly passionate about and I can’t wait to see how it will evolve.</p>
        </div>
      </div>
    )
  }

}

export default AboutMe
