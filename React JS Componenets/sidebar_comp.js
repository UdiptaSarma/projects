import React from 'react';
import '../css/sidebar_comp.css';

export default class SidebarComp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            locationResult : this.props.locationList
        }
    }

    renderSuggestion = (e) =>{
        const val = e.target.value;
        let suggestion = [];

        if(val.length === 0){
            
            suggestion = this.props.locationList;
        }
        if(val.length > 0){
            const regex = new RegExp(`^${val}`, 'i');
            suggestion = this.props.locationList.sort().filter(v => regex.test(v));
        }

        this.setState(() => ({locationResult : suggestion}));
    }


    render(){
        return(
            <div className="sidebar-comp-main-container">
                <form className="sidebar-comp-form">
                    <p className="sidebar-comp-header">Services</p>
                    <div className="sidebar-comp-box" id="service">
                        <div className="sidebar-comp-content">
                            {this.props.serviceOffered.map((item) => 
                            <div className="sidebar-comp-item-box">
                                <p className="sidebar-comp-item">{item}</p>
                                <input type="checkbox" className="sidebar-comp-item-check" />
                            </div>
                            )}
                        </div>
                        
                    </div>
                    
                </form>


                <form className="sidebar-comp-form">
                    <p className="sidebar-comp-header">Location</p>
                    <input type="search" className="sidebar-comp-search-location" onChange={this.renderSuggestion}/>
                    <div className="sidebar-comp-box" id="location">
                        <div className="sidebar-comp-content">
                            {this.state.locationResult.map((item) => 
                            <div className="sidebar-comp-item-box">
                                <p className="sidebar-comp-item">{item}</p>
                                <input type="checkbox" className="sidebar-comp-item-check" />
                            </div>
                            )}
                        </div>
                        
                    </div>
                </form>

                
                <form className="sidebar-comp-form">
                    <p className="sidebar-comp-header">Facilities</p>
                    <div className="sidebar-comp-box" id="facility">
                        <div className="sidebar-comp-content">
                            {this.props.facilityOffered.map((item) => 
                            <div className="sidebar-comp-item-box">
                                <p className="sidebar-comp-item">{item}</p>
                                <input type="checkbox" className="sidebar-comp-item-check" />
                            </div>
                            )}
                        </div>
                        
                    </div>
                    
                </form>

                
                
                
            </div>
        )
    }
}