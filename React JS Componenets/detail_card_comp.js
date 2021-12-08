import React from 'react';
import '../css/detail_card_comp.css';
/*
The props are 
health benefits: takes an array of health benefits as output
averageCalorieBurn: takes a string as input specify the average calorie burn per hour
resultTime: takes a string as input specify the result time
pricing: takes a number denoting the price it outputs

*/




export default class DetailCardComp extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="detail-card-container">
                <div className="detail-card-health-benefit-container">
                    <p className="detail-card-header">Health Benefits</p>
                    <ul className="detail-card-list-container">
                        {this.props.healthBenefit.map((item) => 
                            <li className="detail-card-item">{item}</li>
                        )}
                    </ul>
                </div>
                <div className="detail-card-calorie-burn-result-pricing">
                    <div className="detail-card-calorie-burn">
                        <p className="detail-card-header">Average Calorie Burn</p>
                        <ul className="detail-card-list-container">
                            <li className="detail-card-item">{this.props.averageCalorieBurn}</li>
                        </ul>
                    </div>
                    <div className="detail-card-result">
                        <p className="detail-card-header">Results</p>
                        <ul className="detail-card-list-container">
                            <li className="detail-card-item">{this.props.resultTime}</li>
                        </ul>
                    </div>
                    <div className="detail-card-result">
                        <p className="detail-card-header">Pricing</p>
                        <ul className="detail-card-list-container">
                            <li className="detail-card-item">&#x20b9; {this.props.pricing}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}