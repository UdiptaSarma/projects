import React from 'react';
import '../css/facility_block_comp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default class FacilityBlockComp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            remainingServices: this.props.facilityAndService.length - 2,
            areServicesRemaining: true,
            newArrayToRender: [],
        }
    };
    componentDidMount(){
        let lengthOfArray = this.props.facilityAndService.length;
        let newArr = this.props.facilityAndService.slice(0,2);
        this.setState(() => ({remainingServices: lengthOfArray-2, areServicesRemaining: true, newArrayToRender: newArr}));
        if(lengthOfArray<=2){
            newArr = this.props.facilityAndService;
            this.setState(() => ({remainingServices: 0, areServicesRemaining: false, newArrayToRender: newArr}));
            
        }
        
    }
    renderFacilities = () => {
         return(
            this.state.newArrayToRender.map((item) => 
            
                <p className="facility-block-service-item">{item}</p>
                ))
    }
    renderMoreButton = () =>{
        if(this.state.areServicesRemaining){
            return(
                <a className="facility-block-remaining-button"
                 src="#">{this.state.remainingServices} more services | View</a>
            )
        }
    }
    

    render(){
        return(
            <div className={`facility-block-container ${this.props.containerClass}`}>
                
                    <div className="facility-block-image-rating">
                        <img src={this.props.showImage} className="facility-block-show-image" />
                        <div className="facility-block-rating">
                            <div className="facility-block-rate-block" onclick={this.onButtonPress}>
                                <p className="facility-block-rating-figure" >{this.props.rating}</p>
                                <FontAwesomeIcon icon={faStar} className="facility-block-rating-star" />
                        
                            </div>
                            <p className="facility-block-rating-written">{this.props.totalRating} Ratings</p>
                        </div>
                        <p className="facility-block-status">{this.props.ratingStatus}</p>
                    </div>
                    
                    <div className="facility-block-details">
                        <p className="facility-block-name">{this.props.facilityName}</p>
                        <p className="facility-block-address">{this.props.facilityAddress}</p>
                        <p className="facility-block-pricing">Pricing : &#x20b9; {this.props.basicPricing}</p>
                        <p className="facility-block-contact-number">Contact : {this.props.contactNumber}</p>

                        <div className="facility-block-facility-service">
                            <p className="facility-block-services-name">Services and Facilities : </p>
                            <div className="facility-block-service-list">
                                {this.renderFacilities()}
                                
                            </div>
                            {this.renderMoreButton()}
                            
                        </div>
                        
                    </div>
                    
                </div>

                
            
        );
    }
}