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
          <p>I'm a full stack developer with a background in the medical field. My experience as a CNA has cultivated many soft skills that make me a successful developer: attention to details, team communication, time management, clear documentation, and critical thinking.</p>
          <p>I got my start into programming professionally through the Web Development Immersive at Galvanize in Denver, CO, but I've been dabbling since early high school. What I lack in experience I make up for with my hunger for knowledge, aptitude for quick learning, and notoriously positive attitude. I thrive as a team player; collaboration is one thing that propels me to put forth my best.</p>
          <p>Above all else, I live by the golden rule: do unto others as you would have them do unto you. I also believe in living honestly, respectfully, and passionately. I've always gone out of my way to help others in need. Those who know me would describe me as someone with a big heart, a substantial team player, reliable, and responsible.</p>
          <p>In my free time I like to hike, rock climb, do anything outdoors, read, try new things, watch movies, karaoke, play D&D...I'm basically a giant nerd.</p>
        </div>
      </div>
    )
  }

}

export default AboutMe
