import React from 'react';
import '../css/rating_card_comp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

/*
This component takes the following props

ratingArray : an array containing all the ratings in numbers

*/


export default class RatingCardComp extends React.Component{
    constructor(props){
        super(props);
        this._rating_container = React.createRef();

        this.state = {
            ratingColor: null,
            ratingValue: 0,
            ratingComment: "",
            oneRating: 0,
            twoRating: 0,
            threeRating: 0,
            fourRating: 0,
            fiveRating: 0,
            totalRatingNumber: 0,
            pressStatusRatingBar: false,
            widthOfBlock: 300,
            hoverStatus: false,
        }

    }

    componentDidMount(){
        this.decideRatingColorComment();
    }

    decideRatingColorComment = () => {
        let color = "", comment = "",first = 0,second = 0,third = 0,fourth = 0,fifth = 0;
        let rating = 0, totalRating = 0;
        let lengthOfArray = this.props.ratingArray.length;

        for(let i=0;i<lengthOfArray;i++){
            totalRating = totalRating + this.props.ratingArray[i];

            if(this.props.ratingArray[i]===1)first = first + 1;
            if(this.props.ratingArray[i]===2)second = second + 1;
            if(this.props.ratingArray[i]===3)third = third + 1;
            if(this.props.ratingArray[i]===4)fourth = fourth + 1;
            if(this.props.ratingArray[i]===5)fifth = fifth + 1;

        }
        

        rating = (Math.round((totalRating/lengthOfArray)*10))/10;
        
        if(rating >= 0 && rating < 1){
            color = '#da190b';
            comment = "Poor";
        }
        if(rating >= 1 && rating < 2){
            color = '#e68a00';
            comment = "Not Good";
        }
        if(rating >= 2 && rating < 3){
            color = '#e1e500';
            comment = "Not Recommended";
        }
        if(rating >= 3 && rating < 4){
            color = '#0b7dda';
            comment = "Average";
        }
        if(rating >= 4 && rating < 5){
            color = '#46a049';
            comment = "Excellent";
        }
        this.setState(() => ({
            ratingColor: color,
            ratingValue: rating,
            ratingComment: comment,
            oneRating: first,
            twoRating: second,
            threeRating: third,
            fourRating: fourth,
            fiveRating: fifth,
            totalRatingNumber: lengthOfArray,
            
        }));

        console.log(this.state.ratingColor)
        this._rating_container.current.style.background = this.state.ratingColor;

        
    }
    

    /*updateVariables = () => {
        
        document.documentElement.style.setProperty('--rate-block-bgcolor',this.state.ratingColor);

        console.log(this.state.ratingColor);
        
    }*/

    togglePressStatus = () => {
        this.setState((currentState) => ({
            pressStatusRatingBar: !currentState.pressStatusRatingBar,
            
        }));
    }
    renderRatingBar = () => {
        
        
    }
    

    render(){
        
        let unitLength = 300/this.state.totalRatingNumber;
        let firstHeight = unitLength*this.state.oneRating;
        let secondHeight = unitLength*this.state.twoRating;
        let thirdHeight = unitLength*this.state.threeRating;
        let fourthHeight = unitLength*this.state.fourRating;
        let fifthHeight = unitLength*this.state.fiveRating;
        console.log(firstHeight);
        console.log(secondHeight);
        console.log(thirdHeight);
        console.log(fourthHeight);
        console.log(fifthHeight);
        return(
            <div className="rating-card-main-container">
                        <div className="rating-card-rating">
                            <div className="rating-card-rate-block" onClick={this.togglePressStatus} 
                             ref={this._rating_container} 
                             onMouseOver={() => {this.setState({hoverStatus: true})}}
                             onMouseOut={() => {this.setState({hoverStatus: false})}}
                             style={
                                 
                                (this.state.hoverStatus || this.state.pressStatusRatingBar) ? {
                                    boxShadow: `0px 0px 10px ${this.state.ratingColor}`,
                                    background: this.state.ratingColor} : 
                                    {background: this.state.ratingColor}
                                }
                                 >
                                <p className="rating-card-rating-figure" >{this.state.ratingValue}</p>
                                <FontAwesomeIcon icon={faStar} className="rating-card-rating-star" />
                            </div>
                            <p className="rating-card-rating-written">{this.state.totalRatingNumber} Ratings</p>
                        </div>
                        {}
                        <div className="rating-card-rating-bar-container" 
                        style={this.state.pressStatusRatingBar ? 
                            {height: 20, transition: "0.2s ease-out"} : 
                            {height: 0, transition: "0.2s ease-in 0.8s"}}>

                            <div className="rating-card-rating" id="first" 
                            style={this.state.pressStatusRatingBar ? 
                            {width: firstHeight, transition: "0.6s ease-out 0.5s"} : 
                            {width: 0, transition: "0.6s ease-in"}}></div>

                            <div className="rating-card-rating" id="second"
                            style={this.state.pressStatusRatingBar ? 
                            {width: secondHeight, transitionDuration: "0.6s ease-out 0.5s"} : 
                            {width: 0, transition: "0.6s ease-in"}}></div>

                            <div className="rating-card-rating" id="third" 
                            style={this.state.pressStatusRatingBar ? 
                            {width: thirdHeight, transitionDuration: "0.6s ease-out 0.5s"} : 
                            {width: 0, transition: "0.6s ease-in"}}></div>

                            <div className="rating-card-rating" id="fourth"
                            style={this.state.pressStatusRatingBar ? 
                            {width: fourthHeight, transitionDuration: "0.6s ease-out 0.5s"} : 
                            {width: 0, transition: "0.6s ease-in"}}></div>

                            <div className="rating-card-rating" id="fifth"
                            style={this.state.pressStatusRatingBar ? 
                            {width: fifthHeight, transitionDuration: "0.6s ease-out 0.5s"} : 
                            {width: 0, transition: "0.6s ease-in"}}></div>

                        </div>
        <p className="rating-card-status">{this.state.ratingComment}</p>
            </div>
        )
    }
}