import React from 'react';
import '../css/carousel_home_comp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';



/*
This component takes the following components
width: width of the carousel
height: height of the carousel
imageLink : array containing the links of the images...in react format


*/
export default class CarouselHomeComp extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      counter: 0,
      size: this.props.width,
      imageArray: [],
    }
  }
  componentDidMount() {  
    this.updateVariables();
  }


updateVariables(){
    document.documentElement.style.setProperty('--reqd-width',this.props.width + 'px');
    document.documentElement.style.setProperty('--reqd-height', this.props.height + 'px');
}
  goLeft = () => {
    this.setState({ counter: this.state.counter - 1 });
    if(this.state.counter===-1){
      let count = this.props.imageLink.length - 2;
      this.setState({ counter: count });
      
      return;
    }
    return;
  }

  goRight = () => {
    this.setState({ counter: this.state.counter + 1 });
    if(this.state.counter===this.props.imageLink.length){
      let count = 1;
      this.setState({ counter: count });
      return;
    }
    return;
  }
  renderImages = () => {
    let lengthOfArray = this.props.imageLink.length;
    return(
      <div className="carousel_slider" id="carousel_slider_box">
        <img className="carousel_image_slides" id="clone_last_image" 
        style={{transform: `translateX(-${this.state.counter*this.state.size + this.state.size}px)`}}
        src={this.props.imageLink[lengthOfArray - 1]} />
        {this.props.imageLink.map((item, index) =>
        <img className="carousel_image_slides" 
        style={{transform: `translateX(-${this.state.counter*this.state.size + this.state.size}px)`}}
        src={item} key={index} />
        )}
        <img className="carousel_image_slides" id="clone_first_image" 
        style={{transform: `translateX(-${this.state.counter*this.state.size + this.state.size}px)`}}
        src={this.props.imageLink[0]} 
        />
      </div>
    )
    
  }

  render(){
    return(
      <div className="carousel_container">
        <div className="carousel_button_set">
          <div className="nav_button" id="prev_button" onClick={this.goLeft}><FontAwesomeIcon icon={faAngleLeft} /></div>
          <div className="nav_button" id="next_button" onClick={this.goRight}><FontAwesomeIcon icon={faAngleRight} /></div>
        </div>        
        {this.renderImages()}
      </div>
      
    )
  }
}