import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



class ImageSearchHomeComp extends React.Component{
constructor(props){
  super(props);

  this.state = {
    locSearchStatus: false,
    facSearchStatus: false,
    

    windowWidth: 0, 
    windowHeight: 0,
    

  };
  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
}
componentDidMount() {
  this.updateWindowDimensions();
  window.addEventListener('resize', this.updateWindowDimensions);
}

componentWillUnmount() {
  window.removeEventListener('resize', this.updateWindowDimensions);
}

updateWindowDimensions() {
  this.setState({ windowWidth: window.clientWidth, windowHeight: window.clientHeight });
}

render(){

  var bgImgUrl = require('../assets/img3.jpg');

  var styles = {
    search_img_box: {
        width: this.state.windowWidth,
        height: 400,

        backgroundImage: `url(${bgImgUrl})` ,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflow: 'hidden',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        borderStyle: 'solid',
        borderWidth: 1,
    },
    
    form_box: {
      borderStyle: 'solid',
      borderWidth: 1,

      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    location: {
      display: 'flex',
      flexDirection: 'column',
    },
    options_show: {
      zIndex: 1,

    },
    options_vanish:{
      display: 'none',
    },

    
  };


  return (


      <div style={styles.search_img_box}>
            
                <form style={styles.form_box}>
                    <div style={styles.location}>
                        <input type="search" name="search_location" 
                        style={styles.search_location_bar} 
                        onFocus={() => {this.setState({locSearchStatus: true})}}
                        onBlur={() => {this.setState({locSearchStatus: false})}}/>
                        {this.state.locSearchStatus && (
                          <div>
                            <div style={styles.shown_option}><p>Option 1</p></div>
                            <div style={styles.shown_option}><p>Option 1</p></div>
                            <div style={styles.shown_option}><p>Option 1</p></div>
                          </div>
                        )
                        }
                    </div>
                    <input type="search" name="search_facility" style={styles.search_facility_bar}/>
                    <input type="submit" style={styles.search_button}/>
                </form>
            </div>


    
  );


  

};
 
}





export default ImageSearchHomeComp;
