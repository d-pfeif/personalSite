import React, {Component} from 'react';

class Videos extends Component{
  render(){
    return(
      <div id="videoArea">
        <div id="vidDisplay">
          <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
            <h2 style={{marginBottom: 0+"em"}}>Programming</h2>
            <a href="https://www.youtube.com/channel/UCqOyZalfSN_K5_eW3k7sAZw/videos?view_as=subscriber" target="_blank"><h3>View All Breakouts</h3></a>
          </div>
          <div className="vids">
            <div>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/xas71K-1AXI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <div>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/BKnQSDOcHV0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <div>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/_ZlRqeAetJs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
            <h2 style={{marginBottom: 0+"em"}}>Creativity</h2>
            <a href="https://www.youtube.com/user/kh2guru/videos?view_as=subscriber" target="_blank"><h3>Doxyc Productions</h3></a>
          </div>
          <div className="vids">
            <div>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/B5mRak7FD9E" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <div>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/JebPTUBDxJ8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <div>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/grTipPM73nM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Videos;
