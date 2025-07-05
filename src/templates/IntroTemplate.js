import React, { Component } from 'react';
import PackageTemplate from './PackageTemplate'
import { Fullpage, Slide } from 'fullpage-react';
import { Button, Icon } from 'semantic-ui-react';
import Scroll from 'react-scroll'; // Imports all Mixins
import {scroller} from 'react-scroll'; //Imports scroller mixin, can use as scroller.scrollTo()
import * as AppActions from '../actions/AppActions';
//import {Motion, spring} from 'react-motion';

import $ from 'jquery';

const { changeFullpageSlide } = Fullpage;

let scroll = Scroll.animateScroll;


class IntroTemplate extends Component {

  constructor(){
    super();

    this.state = {
      transition:{
        open:false
      }
    };
  }

  componentWillMount(){

  }

  componentDidMount(){

    let el = $(".splash-background")[0];
    let elH = $(".intro-container")[0];

    // setTimeout(() => {
      let state = this.state;
      state.transition.open = true;
      this.setState(state);
      // let offset = $(el).width() - document.getElementsByClassName("intro-container")[0].clientWidth - 50;
      // console.log(offset);



      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        $(el).css("backgroundPosition", "0% 60%")
        $(elH).css("height", window.innerHeight)
      }

      $(el).addClass("startSlide");

  }

  moveDown(event){
    event.preventDefault();
    var el = $('.main-template')[0];
    $(el).animate({ scrollTop: document.getElementsByClassName('intro-container')[0].clientHeight }, 500, '', () =>{
    });
  }

  render() {
    return(
      <div className='intro-container'>
        <div className='splash-background'></div>
        <div className='splash'>

          <div className="intro-elements">

              <h1 id="splash-headline">Life isn’t perfect.<br></br> Your profile <span className="nowrap">should be.</span></h1>


            <div id="logo-holder">
              <svg id='splash-logo' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 627.1 125.2'>
                  <polygon points='0,122.8 0,3.3 22,3.3 22,122.8 0,122.8' />
                  <path d='M39,13.7C38.9,6.2,45,0.1,52.5,0C60-0.1,66.1,6,66.2,13.5c0.1,7.5-6,13.6-13.5,13.7c-0.1,0-0.1,0-0.2,0	C45.1,27.1,39.1,21.1,39,13.7z M41.5,122.7V37.4h22v85.3H41.5z'
                  />
                  <path d='M128.4,22c-12.1-0.9-18.1,3.9-18.1,14.5v0.9h18.1v21.2h-18.1v64.2h-22V58.6H76V37.4h12.3v-0.9c0-24.1,13.5-37.2,40.1-35.7	L128.4,22L128.4,22z'
                  />
                  <path d='M157,89.1c2.9,10.8,10.9,16,24.1,16c8.4,0,14.9-2.9,19.1-8.5l17.8,10.2c-8.4,12.1-20.8,18.3-37.2,18.3	c-14.2,0-25.4-4.3-34-12.8S134,93.1,134,80.1c0-12.8,4.3-23.6,12.6-32.1c8.4-8.7,19.3-13,32.4-13c12.5,0,22.9,4.3,30.9,13	c8.2,8.7,12.3,19.3,12.3,32.1c0,3-0.3,6.1-0.9,9L157,89.1z M200.2,72.1c-2.6-11.6-11.1-17.2-21.2-17.2c-11.8,0-19.8,6.3-22.4,17.2	H200.2z'
                  />
                  <path d='M281.8,22c-12.1-0.9-18.1,3.9-18.1,14.5v0.9h18.1v21.2h-18.1v64.2h-22V58.6h-12.3V37.4h12.3v-0.9	c0-24.1,13.5-37.2,40.1-35.7L281.8,22L281.8,22z'
                  />
                  <path d='M356.8,37.4h22v85.3h-22v-10c-6.7,8.4-15.9,12.5-27.8,12.5c-11.4,0-21.2-4.3-29.4-13c-8-8.7-12.1-19.5-12.1-32.1	s4.1-23.2,12.1-31.9c8.2-8.7,17.9-13.1,29.4-13.1c12,0,21.2,4.1,27.8,12.5V37.4z M333,104.1c6.8,0,12.5-2.2,16.9-6.6	c4.6-4.6,6.8-10.4,6.8-17.4s-2.2-12.8-6.8-17.2c-4.4-4.6-10.1-6.8-16.9-6.8s-12.5,2.2-16.9,6.8c-4.4,4.4-6.7,10.2-6.7,17.2	s2.2,12.8,6.7,17.4C320.5,101.9,326.2,104.1,333,104.1z'
                  />
                  <polygon points='477,122.8 451.4,122.8 420.4,84 420.4,122.8 398.3,122.8 398.3,3.3 420.4,3.3 420.4,75 449.7,37.4 476,37.4 441.7,79.6 477,122.8'
                  />
                  <path d='M498.4,89.1c2.9,10.8,10.9,16,24.1,16c8.4,0,14.8-2.9,19.1-8.5l17.8,10.2c-8.4,12.1-20.8,18.3-37.2,18.3	c-14.2,0-25.4-4.3-34-12.8s-12.8-19.3-12.8-32.3c0-12.8,4.3-23.6,12.6-32.1c8.4-8.7,19.3-13,32.4-13c12.5,0,22.9,4.3,30.9,13	c8.2,8.7,12.3,19.3,12.3,32.1c0,3-0.3,6.1-0.8,9L498.4,89.1z M541.6,72.1c-2.5-11.6-11.1-17.2-21.2-17.2c-11.8,0-19.8,6.3-22.4,17.2	H541.6z'
                  />
                  <path d='M601.2,52.1c4.1-10.9,14.3-16.4,25.9-16.4v24.6c-6.3-0.9-12.8,0.5-18.1,4.1c-5.3,3.6-7.8,9.4-7.8,17.6v40.8h-22V37.4h22	V52.1z'
                  />
              </svg>
              <div id="smile-holder">
                <svg id='smile' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 196.4 52.1'>
                  <path className='st0' d='M171.1,0C134.4,40.3,72,43.1,31.7,6.4c-2.2-2-4.4-4.2-6.4-6.4H0c36.8,54.2,110.5,68.4,164.8,31.7 C177.2,23.2,188,12.5,196.4,0H171.1z'/>
                </svg>
              </div>

            </div>

          </div>


        </div>
        <div className='chevron-container' onClick={this.moveDown.bind(this)}><div className='chevron bottom'></div></div>
      </div>
    )
  }
}

export default IntroTemplate;
