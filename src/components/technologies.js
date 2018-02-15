import React, {Component} from 'react';

// import assets
import python from '../assets/tech/python.png'
import javascript from '../assets/tech/JavaScript.png'
import angularjs from '../assets/tech/angularjs.png'
import react from '../assets/tech/react.png'
import nodejs from '../assets/tech/nodejs.png'
import express from '../assets/tech/express.png'
import hbs from '../assets/tech/handlebars.png'
import knex from '../assets/tech/knex.png'
import pg from '../assets/tech/postgresql.png'
import sql from '../assets/tech/sql.png'
import html from '../assets/tech/html.png'
import css from '../assets/tech/css.png'
import pi from '../assets/tech/pi.png'
import apache from '../assets/tech/apache.png'
import alexa from '../assets/tech/alexa.png'
import aLeft from '../assets/leftarrow.png'
import aRight from '../assets/rightarrow.png'

class Technologies extends Component {
  render(){
    return(
      <div id="tech">
        <h1 style={{textAlign: 'right', marginTop: 3+'em'}}>Technology</h1>
        <div id="techArea">
          <img className="arrow" src={aLeft} alt="Left Arrow" />
          <div className="techList">
            <img className="technologies" src={python} alt="Python" />
            <img className="technologies" src={javascript} alt="JavaScript" />
            <img className="technologies" src={angularjs} alt="AngularJS" />
            <img className="technologies" src={react} alt="React" />
            <img className="technologies" src={nodejs} alt="Node.js" />
            <img style={{width: 200 + 'px', height: 80 + 'px'}} src={express} alt="Express" />
            <img style={{width: 150 + 'px'}} src={hbs} alt="Handlebars JS" />
            <img className="technologies" src={knex} alt="Knex.js" />
            <img className="technologies" src={pg} alt="PostgreSQL" />
            <img className="technologies" src={sql} alt="SQL" />
            <img className="technologies" src={html} alt="HTML5" />
            <img className="technologies" src={css} alt="CSS3" />
            <img className="technologies" src={pi} alt="Raspberry Pi" />
            <img className="technologies" src={apache} alt="Apache" />
            <img className="technologies" src={alexa} alt="Amazon Alexa" />
          </div>
          <img className="arrow" src={aRight} alt="Right Arrow" />
        </div>
      </div>
    )
  }
}

export default Technologies
