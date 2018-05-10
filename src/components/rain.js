import React, {Component} from 'react';

class Rain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rain: this.props.rain,
      logo: this.props.logo
    }
  }


  render(){
    return(
      <div>
        <img alt="rain" className={this.state.rain} src={this.state.logo} />
      </div>
    )
  }
}

export default Rain
