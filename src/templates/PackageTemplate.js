import React, { Component } from 'react';
//import { Transition, Image, Button, Header, Icon, Modal } from 'semantic-ui-react';

import ReactDOM from 'react-dom';
import * as AppActions from "../actions/AppActions";
import AppStore from "../stores/AppStore";
//import {Motion, spring} from 'react-motion';
import $ from 'jquery';
import Slider from 'react-slick';
import SliderItemComponent from '../components/SliderItemComponent';
import ReactGA from 'react-ga';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import '../App.css';

class PackageTemplate extends Component {
  constructor(props){
    super(props);
    this.state = {
      showModal:false,
      packageKey:0,
      transition:{
        open:false
      },
      settings: {
        sliderItems: [],
        lazyLoad: true,
        draggable: true,
        touchThreshold: 10,
        afterChange:this.beforeChangeHandler.bind(this),
        dots: false,
        initialSlide: 1,
        infinite: true,
        speed: 500,
        arrows: false,
        accessibility: true,
        swipeToSlide: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        initialSlide: 0,
        //pauseOnHover:true,
        responsive: [
          {
            breakpoint: 1030,
            settings: {
              slidesToShow: 5
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 5
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: '60px',
              initialSlide: 1
            }
          }]
        }
    };

    this.isAdded = false;
    this.isPaused = false;
    this.sliderHeight = 0;
  }

  componentWillMount(){
      if(this.props.package){
       let state = this.state;
       let that = this;
       let index = 0;
       state.packageKey = this.props.packageKey;
       state.package = this.props.package;
       state.package.name = this.props.package.name;
       state.package.youtubeREF = this.props.package.youtubeREF;
       state.package.items = this.props.package.items;
       state.package.sliderItems = this.props.package.items.map(function(item) {
           return <div key={index++}><SliderItemComponent settings={item} isCLickable={true}/></div>;
       });
       this.setState(state, () => {
         let that  = this;
         let i = setInterval(function(){
           if(that.slider)
           {
             ReactDOM.findDOMNode(that.slider).style.width = "100%";
             that.forceUpdate();
             clearInterval(i);
           }
         }, 50);
       });
     }
  }

  beforeChangeHandler(oldIndex, newIndex){
    // console.log(oldIndex, newIndex);
    // console.log(this.slider.innerSlider.list.children[0].children);
    if($(el).height() > 0){
    var el = $(".item-image-container")[0];
        $(".item-image-container").css({
        "height":$(el).height(),
        "width":$(el).width()
      });
    }
  }

  componentDidMount(){
    let that  = this;
    var el = this.refs.packageTemplate;
    var pl = this.refs.packageHead;
    AppStore.addChangeListener(()=>{
      if(AppStore.getActiveSlide() >= this.state.packageKey && !this.state.transition.open){

        let state = this.state;
        state.transition.open = true;
        this.setState(state);

        $(el).css("visibility", "visible");
        $(el).addClass("moveUpAndShow");
        $(pl).addClass("animated fadeInUp");

        setTimeout(()=>{
          this.isPaused = false;
          this.slider.innerSlider.play();

          if(this.sliderHeight === 0){
            for(var i = 0; i < $(".item-image-container").length; i++){
              var el = $(".item-image-container")[i];
              if($(el).height() > 0){
                this.sliderHeight = $(el).height();
                $(".item-image-container").css({
                  "height":$(el).height(),
                  "width":$(el).width()
                });
              console.log(this.sliderHeight);
                break;
              };
            }
          }

        },1500);

      }else if(!this.state.transition.open){
        if(!this.isPaused){
          this.isPaused = true;
          $(el).css("marginTop", "20px");
          this.slider.innerSlider.pause();
        }
      }
    });
  }

  handleClose(){
    this.setState({ showModal: false });
  }

  componentWillReceiveProps(props){
    console.log('componentWillReceiveProps');
  }

  componentWillUnmount(){
    console.log('componentWillUnmount');
  }

  onAddPackageClickHandler(e){
    AppActions.revealShown(1);
    ReactGA.event({
      category: 'Package',
      action: 'Bought',
      label: 'Buy Package'
    });
  }

  onViewTestimonialClickHandler(e){
    this.setState({ showModal: true });
  }

  render() {


    if(this.state.package.sliderItems === 0){
      return (
          <div className="package-template">
            <span>Loading...</span>
          </div>
      )
    }
    return (
       <div className="package-template" ref="packageTemplate" >
        <div className="vertical-center">
         <div className="package-header" ref="packageHead">
            <h2>THE</h2>
            <hr></hr>
            <h1 dangerouslySetInnerHTML={{__html: this.state.package.name}} />
            <hr></hr>
            <h2>PACKAGE</h2>
         </div>
        <div className="slider-container" onClick={this.onAddPackageClickHandler.bind(this)}>
           <Slider ref={slider => (this.slider = slider)} {...this.state.settings} >
             {this.state.package.sliderItems}
           </Slider>
        </div>
          <button className="ui green button"  onClick={this.onAddPackageClickHandler.bind(this)}>

             {this.isAdded?"Remove Package":"BUY PHOTOS"}
         </button>
         <button className="ui green button learn" onClick={this.onAddPackageClickHandler.bind(this)}>

             VIEW DEMO
         </button>
       </div>
       </div>
    );
  }
}

export default PackageTemplate;
