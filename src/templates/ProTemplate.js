import React, { Component } from 'react';
import $ from "jquery";
import Collapsible from 'react-collapsible';


class ProTemplate extends Component {

  constructor(){
    super();
  }

  componentWillMount(){

  }

  componentDidMount(){
  }

  render() {
    return(
      <div className="pro-container">

        <div className="pro">
          <p className="pro-header">Lifefaker Pro</p>
          <p>Find out about our bespoke service</p>
          <button className="ui green button learn">

              LEARN MORE
          </button>
        </div>
      </div>

    )
  }
}

export default ProTemplate;
