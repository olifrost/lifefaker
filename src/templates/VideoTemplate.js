import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import $ from "jquery";
//import YouTube from 'react-youtube-embed'

class VideoTemplate extends Component {

  constructor(){
    super();
  }

  componentWillMount(){

  }

  componentDidMount(){
  }

  moveDown(event){
    event.preventDefault();
    var el = $('.video-template')[0];
    $(el).animate({ scrollTop: document.getElementsByClassName('video-template')[0].clientHeight }, 500, '', () =>{
      // $(el).css('display', 'none');
      // $(el).css('zIndex', '800');
    });
  }

  render() {
    return(
      <div className="video-template">
        <div className="video">

          <div className="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/IuibG80U-Gs?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
         </div>
        <div><blockquote>Instead of slicing my own avocados, I just got the <span className="nowrap">pictures instead</span></blockquote><cite>Lindsey, student</cite></div>


      </div>
        <div className='chevron-container'><div className='chevron bottom'></div></div>

      </div>
    )
  }
}

export default VideoTemplate;
