import React from 'react';
import '../css/timing_card_comp.css';


/*
This component takes the following props
timingValues: takes an object as input whose keys are strings having values of the days or as
                weekdays and weekends, which in turn have a array of string
width : takes the width value


*/
export default class TimingCardComp extends React.Component{
    constructor(props){
        super(props);
    }
    renderTiming = () => {

        return(
          Object.keys(this.props.timingValues).map((item) => 
            <tr className="timing-card-comp-timing-item">
                <td className="timing-card-comp-timing-text">{item}</td>
                {
                    this.props.timingValues[item].map((thing) => 
                        <td className="timing-card-comp-timing-value">{thing}</td>
                    )
                }
            </tr>
          )
        )
    }
    render(){
        return(
            <table className="timing-card-comp-main-container" style={{width : this.props.width}}>
                {
                   this.renderTiming()
                }
            </table>
        )
    }
}