import React from 'react';
import '../css/membership_card_comp.css';


/*
The props that are to be included are
servicesOffered: an array of the services offered
detailOfServicesOffered: array stating the respective details of services offered
width: width of the element


*/
export default class MembershipCardComp extends React.Component{
    constructor(props){
        super(props);
    }

    
    componentDidMount() {  
        this.updateVariables();
      }


    updateVariables(highlightTextColor, ){
        document.documentElement.style.setProperty('--container-width',this.props.width + 'px');
    }
    submitForm = () =>{
        this._membership_form.submit();
    }
    

    render(){
        return(
            <div className="membership-card-container">
                <p className="membership-card-name">{this.props.name}</p>
                <form ref={(e) => this._membership_form = e} className="membership-card-form">
                    <div className="membership-card-smaller-container">
                        <div className="membership-card-holder-div">
                            {
                            this.props.serviceOffered.map((item,index) => 
                            <div className="membership-card-service-item">
                                <p className="membership-card-heading">{item}</p>
                                <div className="membership-card-detail">
                                    <p className="membership-card-item-detail">{this.props.detailOfServiceOffered[index]}</p>
                                    <input type="checkbox" className="membership-card-item-check" />
                                </div>
                            </div>
                            )
                            }
                        </div>
                    </div>


                <div className="membership-card-submit" 
                onClick={this.submitForm}>
                    <p className="membership-card-submit-text">Book Now</p>
                </div>
                
                </form>


            </div>
        )
    }
}