import React from 'react';
import '../css/login_signup_cart_comp.css';

export default class LoginSignUpCartComp extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className="login-signup-cart-comp-main-container">
                <a className="login-signup-cart-comp-link">Login</a>
                <a className="login-signup-cart-comp-link">Cart</a>
            </div>
        )
    }
}