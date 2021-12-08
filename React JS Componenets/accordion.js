import React from'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import '../css/accordion.css';

/*
The props used here are
accordionButtonColor: a color text string specifying the required color
accordionButtonTextColor:a color text string specifying the required text color
accordionButtonTextHoverColor: a color text string specifying the required text color
arrowColor: a color text string specifying the required text color for arrow
transitionTime: time in no. to specify the transition time
header: To specify the heading
*/


export default class Accordion extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            pressStatusHeader : true,
            widthContainer: 0,
            heightContainer : 0,
        }
    }

    componentDidMount() {  
        this.updateVariables();
    }

    togglePressStatus = () => {
        
        this.setState((currentState) => ({
            pressStatusHeader: !currentState.pressStatusHeader
        }));

    }


    updateVariables(){
        document.documentElement.style.setProperty('--accordion-button-color',this.props.accordionButtonColor);
        document.documentElement.style.setProperty('--accordion-button-text-color',this.props.accordionButtonTextColor);
        document.documentElement.style.setProperty('--accordion-button-text-hover-color',this.props.accordionButtonTextHoverColor);
        
        document.documentElement.style.setProperty('--arrow-color', this.props.arrowColor);
        document.documentElement.style.setProperty('--section-height', this._container.scrollHeight + 'px');
        document.documentElement.style.setProperty('--accordion-width', this._container.scrollWidth + 'px');
        document.documentElement.style.setProperty('--transit-time', this.props.transitionTime + 's');
        this.setState(() => ({
            widthContainer: this._container.scrollWidth,
            heightContainer : this._container.scrollHeight,
        }))
        

    }
    render(){
    
        return(
            <div className="accordion-body" style={{width: this.state.widthContainer}}>
                <div className={"accordion-header"} 
                onClick={this.togglePressStatus}>
                    <p className="accordion-header-text"
                    style={this.state.pressStatusHeader ? {} : {color: this.props.accordionButtonTextHoverColor,}}
                    >{this.props.header}</p>
                    <FontAwesomeIcon className={"accordion-arrow " + 
                    (this.state.pressStatusHeader ? " accordion-arrow-down " : " accordion-arrow-up ")} 
                    icon={faAngleDown} 
                    />
                </div>
                <div className={"accordion-content "  + 
                (this.state.pressStatusHeader ? " accordion-content-hide " : " accordion-content-show " )
                }
                    ref={(el) => this._container = el} 
                    style={
                        this.state.pressStatusHeader ? 
                            {height : 0} : 
                            {height : this.state.heightContainer}
                        }
                    
                    >
                    { this.props.children }
                    
                </div>
            </div>
        )
    }
}