import React from 'react';
import '../css/basic_detail_card.css';

/*
This component takes the following properties

titleColor : color of the title
addressColor : color of the address
contactColor : color of the contact
title : value of title as string
address : value of address as string
contact : phone no. as string
height : height of block;
width : width of block;



*/

export default class BasicDetailCardComp extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {  
        this.updateVariables();
    }

    updateVariables(){
        document.documentElement.style.setProperty('--title-color',this.props.titleColor);
        document.documentElement.style.setProperty('--address-color',this.props.addressColor);
        document.documentElement.style.setProperty('--contact-color',this.props.contactColor);
        document.documentElement.style.setProperty('--box-height',this.props.height + 'px');
        document.documentElement.style.setProperty('--box-width',this.props.width + 'px');
    }

    render(){
        return(
            <div className="basic-detail-card-container" >
                <p className="basic-detail-card-title">{this.props.title}</p>
                <p className="basic-detail-card-address">{this.props.address}</p>
                <p className="basic-detail-card-contact">{this.props.contact}</p>
            </div>
        )
    }
}