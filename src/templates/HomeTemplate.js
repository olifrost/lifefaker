import React, { Component } from 'react';
import PackageTemplate from './PackageTemplate';
import IntroTemplate from './IntroTemplate';
import { Fullpage, Slide } from 'fullpage-react';
//import { Button, Icon } from 'semantic-ui-react';
import Scroll from 'react-scroll'; // Imports all Mixins
import {scroller} from 'react-scroll'; //Imports scroller mixin, can use as scroller.scrollTo()
//import * as AppActions from "../actions/AppActions";
//import {Motion, spring} from 'react-motion';
//import AppStore from '../stores/AppStore';
import FAQTemplate from './FAQTemplate';
import VideoTemplate from './VideoTemplate';
import ProTemplate from './ProTemplate';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-117502772-1'); //Unique Google Analytics tracking number
ReactGA.pageview(window.location.pathname + window.location.search);

const { changeFullpageSlide } = Fullpage;
let scroll = Scroll.animateScroll;

class HomeTemplate extends Component {

  constructor(){
    super();

    this.state = {
      packages:[],
      sections:[]
    };
  }

  componentWillMount(){
    if(this.props.packages){
      let state = this.state;
      let index = 0;
      let that = this;
      state.packages = this.props.packages;

      state.sections.push(<IntroTemplate key='IntroTemplate0' style={state.sliderHeight}/>);
      state.sections.push(<VideoTemplate key='VideoTemplate0' style={state.sliderHeight}/>);
      state.packages.map(function(packageItem, index){
        state.sections.push(
          <PackageTemplate key={index++} packageKey={index++} package={packageItem} isActive={that.state.activeSlider}/>
        );
      });
      
      state.sections.push(<FAQTemplate key='FAQTemplate0' style={state.sliderHeight}/>);

      this.setState(state);
    }
  }

  componentDidMount(){

  }

  render() {

    if(this.state.sections.length === 0){
      return (
        <div className="main-template">
          <div className="loader">Loading dreams...</div>
        </div>
      );
    }
    return (
       <div className="main-template">
         {this.state.sections}
       </div>
    );
  }
}

export default HomeTemplate;
