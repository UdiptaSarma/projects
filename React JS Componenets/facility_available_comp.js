import React from 'react';
import '../css/facility_available_comp.css';

/*
This component takes the following components as props

width: to show the width of the variable
facilityAvailable : an array of strings hosting all the available facilities
facilityCollection : the list of total facilities


*/


export default class FacilityAvailableComp extends React.Component{
    constructor(props){
        super(props);
    }

    getItem = (item) => {
        let index = 0;
        for(let i=0;i<this.props.facilityCollection.length;i++){
            if(item === this.props.facilityCollection[i])index = i;
            
        }

        return(
            <div className="facility-available-comp-item">
                <p className="facility-available-comp-item-name">{this.props.facilityCollection[index]}</p>
            </div>
        )
    }

    render(){
        return(
            <div className="facility-available-comp-container" style={{width: this.props.width}}>
                {this.props.facilityAvailable.map((obj) => 
                this.getItem(obj)
                )}
            </div>
        )
    }
}
