import React, { Component } from 'react';
import PackageTemplate from './PackageTemplate'
import { Fullpage, Slide } from 'fullpage-react';
import { Button } from 'semantic-ui-react';
import Scroll from 'react-scroll'; // Imports all Mixins
import {scroller} from 'react-scroll'; //Imports scroller mixin, can use as scroller.scrollTo()
import * as AppActions from "../actions/AppActions";
//import {Motion, spring} from 'react-motion';
//import Snap from 'snapsvg-cjs';
import AppStore from '../stores/AppStore';

import $ from "jquery";

const { changeFullpageSlide } = Fullpage;

let scroll = Scroll.animateScroll;


class RevealTemplate extends Component {

  constructor(){
    super();

    this.state = {
      transition:{
        open:false
      }
    };

    this.isAnimating = false;
  }

  componentWillMount(){

  }

  componentDidMount(){
    let _w = document.getElementsByClassName("intro-container")[0].clientWidth;
    let _h = document.getElementsByClassName("intro-container")[0].clientHeight;

    AppStore.addChangeListener(()=>{
      if(AppStore.getRevealStatus() === 1 && !this.isAnimating){

        this.isAnimating = true;

        let state = this.state;
        state.transition.open = true;
        this.setState(state);

        _w = document.getElementsByClassName("intro-container")[0].clientWidth;
        _h = document.getElementsByClassName("intro-container")[0].clientHeight;

        $(".reveal-container .splash").css({"opacity":0})
        $(".reveal-container .logo").css({"opacity":0})
        $("#reveal-button-container").css({"opacity":0})

        $("#circle").css({"top":"-100%"})
        $("#circle2").css({"top":"-100%"})

        $("#circle").animate({top:"30%"}, 800);
        $("#circle2").animate({top:"100%"}, 750);

        setTimeout(()=>{
          $(".reveal-container .splash").animate({opacity:1}, 1000);
          $(".reveal-container .logo").animate({opacity:1}, 1000);
          $("#reveal-button-container").animate({opacity:1}, 1000);
          this.isAnimating = false;
        },1000)

      }

      if(AppStore.getRevealStatus() === 2  && !this.isAnimating){
        this.isAnimating = true;
        let state = this.state;
        state.transition.open = false;
        this.setState(state);

        $(".reveal-container .splash").animate({opacity:0}, 250);
        $(".reveal-container .logo").animate({opacity:0}, 250);
        $("#reveal-button-container").animate({opacity:0}, 250);

        $("#circle").animate({top:"-100%"}, 500);
        $("#circle2").animate({top:"-100%"}, 400);
        setTimeout(()=>{
          this.isAnimating = false;
        },500)
      }

    });
  }

  onGoBackHandler(event){
    event.preventDefault();
    AppActions.revealShown(2);
    // this.scrollTo(document.getElementsByClassName("main-template")[0], document.getElementsByClassName("intro-container")[0].clientHeight, 500);
  }

  render() {
    return(
      <div className="reveal-container">

        <div id="circle-background">
          {/* <img src="sanctus-dot.svg" /> */}
          <div id="circle2"></div>
          <div id="circle"></div>

        </div>

        <header className="app-header red sanctus">
          <div className="logo"></div>
        </header>

        <div className="splash">
            <div className="reveal-header"><h1>Sorry, you missed out</h1></div>
            <hr></hr>
            <div className="splash-copy">
            <p>FOMO warranted. Lifefaker.com was an exclusive online experience that launched in 2018.</p>
            <p>In 2022 it was replaced by our new subsidiary <a href="https://olifro.st/instagreen">Instagreen.</a></p>
            </div>
        </div>
        <div id="reveal-button-container"><Button id="reveal-button" basic inverted onClick={this.onGoBackHandler.bind(this)}>BACK</Button></div>
      </div>
    )
  }
}

export default RevealTemplate;
