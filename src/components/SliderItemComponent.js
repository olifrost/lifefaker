import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import $ from 'jquery';

class SliderItemComponent extends Component {
  constructor() {
    super();
    this.state = {
      isSelected: false,
      imageURL: '',
      caption: "caption",
      short: "",
      price: 0
    }
    this.onClickHandler = this.onClickHandler.bind(this);
    this.sliderHeight = 0;
  }

  onClickHandler(e) {
    let state = this.state;
    if (state.isSelected) {
      state.isSelected = false;
    } else {
      state.isSelected = true;
    }
    this.setState(state, () => {
      this.props.onItemClick(this.state);
    });
  }
  componentDidMount() {

    if (this.props.settings) {
      let state = this.state;
      state.imageURL = this.props.settings.imageURL;
      state.caption = this.props.settings.description;
      state.short = this.props.settings.short;
      state.price = this.props.settings.price;
      state.isCheckedClass = 'fa';
      this.setState(state);
    }

  }
  componentWillReceiveProps(props) {
    // console.dir(props);
  }
  render() {
    return (
      <div className="package-slider-item">
        {/* <a onClick={this.props.isCLickable?this.onClickHandler:null}> */}
        <div className="slider-item">
          <div className="item-image-container">
            <Image className="ui fluid image" src={
              this.state.imageURL !== ""
                ? process.env.PUBLIC_URL + '/' + this.state.imageURL
                : process.env.PUBLIC_URL + '/ph.jpg'
            } />
          </div>
          <p dangerouslySetInnerHTML={{ __html: this.state.caption }} />
        </div>
        {/* </a> */}
      </div>
    );
  }
}

export default SliderItemComponent;
