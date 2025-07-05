import React, {Component} from 'react';
//import {BrowserRouter, Route} from 'react-router-dom';
import AppStore from './stores/AppStore';
import NavComponent from './components/NavComponent';
import HomeTemplate from './templates/HomeTemplate';
import RevealTemplate from './templates/RevealTemplate';
import $ from 'jquery';
import * as AppActions from "./actions/AppActions";

class App extends Component {

  constructor() {
    super();
    this.state = {
      price:0,
      packages:[],
      reveal:false
    };
    this.currentSlide = -1;
    this.isTransitioning = false;
  }

  componentDidMount(){

    fetch("./info.json", {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
      })
      .then(response => response.json())
      .then(json => {
        var _packages = json.packages.map(function(item){
          return item;
        })
        this.setState({
          price:0,
          packages: _packages
        });

        setInterval(this.onTick, 50);

      }).catch(function(error) {
        // console.log(error);
    });

    AppStore.addChangeListener(()=>{
      var el = $(".reveal-container")[0];

      if(AppStore.getRevealStatus() === 1){
        $(el).css("display", "block");
        $(el).css("zIndex", "1000");
        $(el).css("opacity", "1");
        setTimeout(()=>{AppActions.revealShown(-1)},100);
      } else if(AppStore.getRevealStatus() === 2){
        setTimeout(()=>{
          if($(el).css("opacity") > 0){
            $(el).css("display", "none");
            $(el).css("zIndex", "800");
            $(el).css("opacity", "0");
            setTimeout(()=>{AppActions.revealShown(-1)},100);
          }
        },800)
      }
    });
  }

  onTick(){
    var el = $(".main-template")[0];
    var _h = document.getElementsByClassName("intro-container")[0].clientHeight;
    AppStore.activateSlide(Math.floor($(el).scrollTop() / _h));
  }

  render() {
    if(this.state.packages.length === 0){
      return <div className="loader-body"><span className="loader">Loading dreams...</span></div>
    }

    return (
        <div className="container">
          <RevealTemplate />
          <HomeTemplate key='HomeTemplate0' packages={this.state.packages} />
          <NavComponent key='NavComponent1' price={this.state.price}/>
        </div>
    );
  }
}

export default App;
