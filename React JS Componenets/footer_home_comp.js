import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {faAndroid, faApple, faFacebook, faInstagram, faTwitter, faPinterest} from '@fortawesome/free-brands-svg-icons';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



class FooterHomeComp extends React.Component{
constructor(props){
  super(props);

  this.state = {

    pressStatusFacebook: false,
    pressStatusTwitter: false,
    pressStatusInstagram: false,
    pressStatusPinterest: false,
    pressStatusAndroid: false,
    pressStatusApple: false,

    pressStatusAbout: false,
    pressStatusFaq: false,
    pressStatusNews: false,
    pressStatusWhitepaper: false,
    pressStatusLegal: false,
    pressStatusTerms: false,
    pressStatusPrivacy: false,

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

  var styles = {

    /*Footer Starts from here*/
    footer: {
      

      width: this.state.windowWidth,
      height: 300,

      backgroundColor: '#272636',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',


    },
/**********************************SUbscribe**************************************************/
    subscribe: {

      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',


    },
    subscribe_text: {
      fontSize: 17,
      color: '#6684a1',
      fontWeight: 'bold',

      marginBottom: 10,

    },
    e_mail_form: {
      display: 'flex',

      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#6684a1',

      width: 280,
      height: 40,

    },
    text_bar: {
      flex: 0.75,
      paddingLeft: 5,

      color: '#6684a1',

      backgroundColor: '#272636',
    },
    submit_button:{
      flex: 0.25,

      color: '#6684a1',

      backgroundColor: '#272636',
    },


/*************************************Social************************************** */
    social_media_tags: {
      
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',


    },
    social: {
      display: 'flex',
      flexDirection: 'row',

      height: 40,
      width: 270,


    },
    footer_link: {
      flex: 0.25,
      height: 40,

      fontSize: 25,

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      color: '#6684a1',

    },
    footer_link_hover: {
      flex: 0.25,
      height: 40,

      fontSize: 25,

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      color: '#d4d2f4'
    },
    footer_glyph:{

      height: 40,

    },
    footer_glyph_hover: {
      flex: 1,
      height: 40,
    },
    store: {

      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',

      height: 50,
      width: 350,
    },
    store_text: {
      color: '#6684a1',
      fontSize: 14,
      flex: 0.34
    },
    store_description: {
      color: '#6684a1',
      fontSize: 10,
    },
    store_description_hover: {
      color: '#d4d2f4',
      fontSize: 10,
    },
    footer_link_store:{
      flex: 0.33,
      height: 50,

      fontSize: 25,

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      color: '#6684a1',
    },
    footer_link_store_hover: {
      flex: 0.33,
      height: 50,

      fontSize: 25,

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      color: '#d4d2f4'

    },
    footer_glyph_store: {
      flex: 1,
      height: 50,

    },
    footer_glyph_store_hover: {
      flex: 1,
      height: 50,

    },
    border_div:{
      borderTop: 1,
      borderBottom: 1,
      borderStyle: 'solid',
      borderColor: '#6684a1',

      width: 300,

    },
    imp_link: {

      height: 50,
      width: 180,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
    },
    footer_imp_link: {
      textDecoration: 'none',
      fontSize: 14,
      color: '#6684a1',
      marginLeft: 5,
      marginRight: 5,

    },
    footer_imp_link_hover: {
      textDecoration: 'none',
      fontSize: 14,
      color: '#d4d2f4',
      marginLeft: 5,
      marginRight: 5,

    },
/********************************Contact range*****************************/
    contacts: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',


    },
    logo_footer: {
      flex: 0.5,
      fontSize: 37,
      fontWeight: 'bold',
      color: '#6684a1',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

    },
    contact_detail_footer: {
      flex: 0.5,
      width: 280,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#6684a1',
      fontSize: 11,


    },
    address: {
      flex: 0.5,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      justifyContent: 'center',

    },
    contact_number: {
      flex: 0.5,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'space-between',
      justifyContent: 'center',

     
    },
    address_content: {
      flex: 0.33,

      marginBottom: 3,
      marginTop: 3,

      textAlign: 'left',

    },
    contact_content: {
      flex: 0.33,

      marginBottom: 3,
      marginTop: 3,

      textAlign: 'right',

    },
    
  };


  return (
      <div style={styles.footer}>

        <div style={styles.social_media_tags}>
          <div style={styles.social}>
          <a href="#"  
          onMouseOver={() => {this.setState({pressStatusFacebook: true})}}
          onMouseOut={() => {this.setState({pressStatusFacebook: false})}}
          onClick={() => {this.setState({pressStatusFacebook: true})}}
          style={this.state.pressStatusFacebook ? styles.footer_link_hover : styles.footer_link}>
            <FontAwesomeIcon icon={faFacebook} 
            style={this.state.pressStatusFacebook ? styles.footer_glyph_hover : styles.footer_glyph}/>
          </a>

          <a href="#"  
          onMouseOver={() => {this.setState({pressStatusTwitter: true})}}
          onMouseOut={() => {this.setState({pressStatusTwitter: false})}}
          onClick={() => {this.setState({pressStatusTwitter: true})}}
          style={this.state.pressStatusTwitter ? styles.footer_link_hover : styles.footer_link}>
            <FontAwesomeIcon icon={faTwitter} 
            style={this.state.pressStatusTwitter ? styles.footer_glyph_hover : styles.footer_glyph} />
          </a>

          <a href="#"  
          onMouseOver={() => {this.setState({pressStatusInstagram: true})}}
          onMouseOut={() => {this.setState({pressStatusInstagram: false})}}
          onClick={() => {this.setState({pressStatusInstagram: true})}}
          style={this.state.pressStatusInstagram ? styles.footer_link_hover : styles.footer_link}>
            <FontAwesomeIcon icon={faInstagram} 
            style={this.state.pressStatusInstagram ? styles.footer_glyph_hover : styles.footer_glyph} />
          </a>

          <a href="#"  
          onMouseOver={() => {this.setState({pressStatusPinterest: true})}}
          onMouseOut={() => {this.setState({pressStatusPinterest: false})}}
          onClick={() => {this.setState({pressStatusPinterest: true})}}
          style={this.state.pressStatusPinterest ? styles.footer_link_hover : styles.footer_link}>
            <FontAwesomeIcon icon={faPinterest} 
            style={this.state.pressStatusPinterest ? styles.footer_glyph_hover : styles.footer_glyph} />
          </a>
            
          </div>

          <div style={styles.store}>
            <p style={styles.store_text}>Find Us At</p>
            <div style={styles.store_box}>
            <a href="#"  
              onMouseOver={() => {this.setState({pressStatusAndroid: true})}}
              onMouseOut={() => {this.setState({pressStatusAndroid: false})}}
              onClick={() => {this.setState({pressStatusAndroid: true})}}
              style={this.state.pressStatusAndroid ? styles.footer_link_store_hover : styles.footer_link_store}>
              <FontAwesomeIcon icon={faAndroid} 
              style={this.state.pressStatusAndroid ? styles.footer_glyph_store_hover : styles.footer_glyph_store} />
            </a>
              <p style={this.state.pressStatusAndroid ? styles.store_description_hover : styles.store_description}>Google Play Store</p>
            </div>

            <div style={styles.store_box}>
            <a href="#"  
              onMouseOver={() => {this.setState({pressStatusApple: true})}}
              onMouseOut={() => {this.setState({pressStatusApple: false})}}
              onClick={() => {this.setState({pressStatusApple: true})}}
              style={this.state.pressStatusApple ? styles.footer_link_store_hover : styles.footer_link_store}>
              <FontAwesomeIcon icon={faApple} 
              style={this.state.pressStatusApple ? styles.footer_glyph_store_hover : styles.footer_glyph_store} />
            </a>
              <p style={this.state.pressStatusApple ? styles.store_description_hover : styles.store_description}>Apple App Store</p>
            </div>

            
          </div>
          <div style={styles.border_div}></div>

          <div style={styles.imp_link}>
            <a href="#"  
              onMouseOver={() => {this.setState({pressStatusAbout: true})}}
              onMouseOut={() => {this.setState({pressStatusAbout: false})}}
              onClick={() => {this.setState({pressStatusAbout: true})}}
              style={this.state.pressStatusAbout ? styles.footer_imp_link_hover : styles.footer_imp_link}>
              About
            </a>

            <a href="#"  
              onMouseOver={() => {this.setState({pressStatusFaq: true})}}
              onMouseOut={() => {this.setState({pressStatusFaq: false})}}
              onClick={() => {this.setState({pressStatusFaq: true})}}
              style={this.state.pressStatusFaq ? styles.footer_imp_link_hover : styles.footer_imp_link}>
              FAQ
            </a>

            <a href="#"  
              onMouseOver={() => {this.setState({pressStatusNews: true})}}
              onMouseOut={() => {this.setState({pressStatusNews: false})}}
              onClick={() => {this.setState({pressStatusNews: true})}}
              style={this.state.pressStatusNews ? styles.footer_imp_link_hover : styles.footer_imp_link}>
              News
            </a>

            <a href="#"  
              onMouseOver={() => {this.setState({pressStatusWhitepaper: true})}}
              onMouseOut={() => {this.setState({pressStatusWhitepaper: false})}}
              onClick={() => {this.setState({pressStatusWhitepaper: true})}}
              style={this.state.pressStatusWhitepaper ? styles.footer_imp_link_hover : styles.footer_imp_link}>
              Whitepaper
            </a>

            <a href="#"  
              onMouseOver={() => {this.setState({pressStatusLegal: true})}}
              onMouseOut={() => {this.setState({pressStatusLegal: false})}}
              onClick={() => {this.setState({pressStatusLegal: true})}}
              style={this.state.pressStatusLegal ? styles.footer_imp_link_hover : styles.footer_imp_link}>
              Legal
            </a>

            <a href="#"  
              onMouseOver={() => {this.setState({pressStatusTerms: true})}}
              onMouseOut={() => {this.setState({pressStatusTerms: false})}}
              onClick={() => {this.setState({pressStatusTerms: true})}}
              style={this.state.pressStatusTerms ? styles.footer_imp_link_hover : styles.footer_imp_link}>
              Terms
            </a>

            <a href="#"  
              onMouseOver={() => {this.setState({pressStatusPrivacy: true})}}
              onMouseOut={() => {this.setState({pressStatusPrivacy: false})}}
              onClick={() => {this.setState({pressStatusPrivacy: true})}}
              style={this.state.pressStatusPrivacy ? styles.footer_imp_link_hover : styles.footer_imp_link}>
              Privacy
            </a>


          </div>

        </div>



        <div style={styles.subscribe}>
          <p style={styles.subscribe_text}>SUBSCRIBE TO OUR NEWSLETTER</p>
          <form style={styles.e_mail_form}>
            <input style={styles.text_bar} type="text" name="e_mail" placeholder="Enter your e-mail"/>
            <input style={styles.submit_button} type="submit" name="submit_button" value="SUBMIT" />
          </form>

        </div>

        

        <div style={styles.contacts}>
          <div style={styles.logo_footer}>
            <p>BIG LOGO IMAGE</p>
          </div>

          <div style={styles.contact_detail_footer}>
            <div style={styles.address}>
              <p style={styles.address_content}>Lorem Ipsum dolor sit amet</p>
              <p style={styles.address_content}>Lorem Ipsum dolor</p>
              <p style={styles.address_content}>Lorem Ipsum</p>
            </div>
            <div style={styles.contact_number}>
              <p style={styles.contact_content}>aesthofit@xyz.com</p>
              <p style={styles.contact_content}>+91-9999999999</p>
              <p style={styles.contact_content}>+91-9999999999</p>
            </div>
          </div>

        </div>
        

      </div>

    
  );


  

};
 
}





export default FooterHomeComp;
