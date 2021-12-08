import React from 'react';
import '../css/search_bar_comp.css';

/*

This component takes two props
locationList: an array of strings containing all the locations of the locality
serviceList: an array of strings containing all the services


*/



export default class SearchBarComp extends React.Component{
    constructor(props){
        super(props);

        this.state = {

            locationArray : [],
            locationStatus : false,
            locationValue : '',
            serviceArray : [],
            serviceStatus : false,
            serviceValue : '',
            cityList : ['Mumbai','Bangalore','Pune','Hyderabad'],
            cityNum : 2,
        }

        this.locationRef = React.createRef();
        this.serviceRef = React.createRef();


    }

    //////////////////////TO SET THE LOCATION SUGGESTION/////////////////
    setLocationSuggestion = (e) =>{
        const val = e.target.value;
        let suggestionLocation = [];

        if(val.length === 0){
            suggestionLocation = this.props.locationList;
            
        }
        if(val.length > 0){
            const regex = new RegExp(`^${val}`, 'i');
            suggestionLocation = this.props.locationList.sort().filter( v => regex.test(v));
            
        }
        this.setState(() => ({ 
            locationArray : suggestionLocation,
            locationStatus : true,
            locationValue : val,
        
        }));
    }

    suggestedLocationSelected  = (val) => {
        this.setState(() => ({
            locationValue : val,
            locationArray : [],
            locationStatus : false,
        }));

    }
    

    renderLocationSuggestion = (e) => {
        return(
            <ul className="search-bar-suggestion-list"  id="search-bar-location-list">
                {e.map((item) => 
                <li className="search-bar-suggestion-list-item"
                onClick={() => {this.suggestedLocationSelected(item)}}>{item}</li>
                )}
            </ul>
        )
    }

    

    removeLocationSuggestion = () => {
        this.setState(() => ({
            locationStatus : false,
        }));

    }
    
    /////////////////////TO SET THE SERVICE SUGGESTION////////////////

    setServiceSuggestion = (e) =>{
        const val = e.target.value;
        let suggestionService = [];

        if(val.length === 0){
            suggestionService = this.props.serviceList;
            
        }
        if(val.length > 0){
            const regex = new RegExp(`^${val}`, 'i');
            suggestionService = this.props.serviceList.sort().filter( v => regex.test(v));
            
        }
        this.setState(() => ({ 
            serviceArray : suggestionService,
            serviceStatus : true,
            serviceValue : val,
        
        }));
    }


    suggestedServiceSelected  = (val) => {
        this.setState(() => ({
            serviceValue : val,
            serviceArray : [],
            serviceStatus : false,
        }));

    }
    

    renderServiceSuggestion = (e) => {
        return(
            <ul className="search-bar-suggestion-list"  id="search-bar-service-list">
                {e.map((item) => 
                <li className="search-bar-suggestion-list-item"
                onClick={() => {this.suggestedServiceSelected(item)}}>{item}</li>
                )}
            </ul>
        )
    }

    

    removeServiceSuggestion = () => {
        this.setState(() => ({
            serviceStatus : false,
        }));

    }

/***********************THE FORM FOR SELECTING THE LOCATION**************/
    render(){
        const {locationArray} = this.state;
        const {serviceArray} = this.state;

        return(
            <div className="search-bar-main-container">
                <form className="search-bar-location-facility-search">
                    <div className="search-bar-location-search">
                        <input type="search" className="search-bar-location-search-bar" 
                        placeholder="Search Locality" onChange={this.setLocationSuggestion}
                        value={this.state.locationValue} onFocus={this.setLocationSuggestion}
                        spellCheck="false"/>

                        {this.state.locationStatus && this.renderLocationSuggestion(locationArray)}
                    </div>
                    <div className="search-bar-facility-search">
                        <input type="search" className="search-bar-facility-search-bar" 
                        placeholder="Search Service" onChange={this.setServiceSuggestion}
                        value={this.state.serviceValue} onFocus={this.setServiceSuggestion}
                        spellCheck="false"/>

                        {this.state.serviceStatus && this.renderServiceSuggestion(serviceArray)}
                    </div>
                    <a className="search-bar-search-button">Search</a>
                </form>

                <form className="search-bar-city-select">
                    <div className="search-bar-city-select-container">
                        <p className="search-bar-city-text">So you're in</p>
                        <a href="#" className="search-bar-city-link">{this.state.cityList[this.state.cityNum]}</a>
                    </div>
                </form>
            </div>
        )
    }
}