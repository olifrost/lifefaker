import React, { Component } from 'react';
import $ from "jquery";
import PackageTemplate from './PackageTemplate';
import Collapsible from 'react-collapsible';
import * as AppActions from "../actions/AppActions";
import ReactGA from 'react-ga';


class AboutTemplate extends Component {

  constructor(){
    super();
  }

  componentWillMount(){

  }

  componentDidMount(){
  }

  onAccordionClick(){
    
  }

  render() {
    return(
      <div>
      <div className="faq">

        <div className="thefaq">
          <Collapsible trigger="What is Lifefaker?" transitionTime={200}>
           <p>Lifefaker is the world’s first online life faking service. Instead of going through the hassle of living a perfect life, now you can just get the photos. </p><p>We have thousands of photos of everything from toned abs to skinny flat whites. Just sign-up for one of our perfect packages and let us do the posting for you. </p>
         </Collapsible>
         <Collapsible trigger="Why did you make Lifefaker?" onOpening={this.onAccordionClick.bind(this)} transitionTime={200}>
         <p>{"This site isn't real – the problem is. It's part of a campaign by mental health startup"} <a href="https://sanctus.io/social-media-mental-health-b1803b6b475f">Sanctus</a> confronting the social media behaviours that can harm our mental health</p>
         </Collapsible>
          <Collapsible trigger="How much does it cost?" transitionTime={200}>
          <p>Each package on Lifefaker is only $1 a month – a fraction of the cost of real life. </p>
          <p>Why pay $5 for a coffee, when you can just have the photo?</p>

          <p>The cost covers a licensing fee we pay to our partner influencers who are guaranteed to be cooler, hotter, and happier than you. </p>
          </Collapsible>
          <Collapsible trigger="Can I sell my photos on Lifefaker?" transitionTime={200}>
          <p>If you think you have a life a cut above the rest, then send your profile to our admin at <a href="mailto:mail@olifro.st">hello@lifefaker.com</a> and we’ll review it for our influencer programme.</p>
          </Collapsible>
          <Collapsible trigger="Is Lifefaker the same as catfishing?" transitionTime={200}>
          <p>No. Catfishing is taking somebody’s photos without permission to fake another identity. Lifefaker is taking somebody’s photos with permission to fake another identity.</p>
          </Collapsible>
          <Collapsible trigger="Why has my girlfriend turned into a boyfriend?" transitionTime={200} >
          <p>There was a common issue that has since been fixed where boyfriend photos were accidentally posted instead of girlfriends. We have since corrected the issue and removed all posts made in error.</p>
          </Collapsible>
        </div>
      </div>

      <div className="footer">
          <hr></hr>
          <ul>
          <li><a href="http://www.lifefaker.com/media/lifefakerpresskit.zip" download>Press Kit</a></li>
          <li><a href="mailto:mail@olifro.st">Contact</a></li>
          <li><a href="http://twitter.com/olifro_st">Twitter</a></li>
          <li><a href="http://instagram.com/olifro.st">Instagram</a></li>
          </ul>
      </div>
      </div>



    )
  }
}

export default AboutTemplate;
