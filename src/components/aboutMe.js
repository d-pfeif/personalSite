import React, { Component } from 'react';
import myFace from '../assets/myFace.png'

class AboutMe extends Component {
  render(){
    return(
      <div className="about">
        <img src={myFace} className="myFace" />
        <div className="aboutSection">
          <h2>ABOUT ME</h2>
          <p>I was born in Minnesota and moved to Colorado when I was 11. When I turned 19 I decided to pursue a career in the medical field. After about 5 years I realized it wasn't really for me. There were some aspects of the job I really liked: team communication and time management. But I felt like I wasn't able to be as creative as I wanted to be and most of the problem solving I loved to do was spent on Calculus or sudoku.</p>
          <p>I wanted a career change and I always had a sort of affinity for coding. When I wasn't working full time or going to school to get a biology degree, I would dabble in programming, but I never found the time to immerse myself in an industry that would provide everything I could ever want in a career: team communication, time management, creativity, problem solving, and continual learning!</p>
          <p>It was at this point in my life I decided I was going to be a developer and if I was going to dive into a career, I would dive into the deep end. So I went to Galvanize and graduated their six month program.</p>
        </div>
      </div>
    )
  }

}

export default AboutMe
