import React from 'react';
import '../css/autocomplete_text_box.css';

/*
This component takes the following props

items: This will be a comma separated array of the data to be filtered
highlightColor: To specify the color of highlight of the dropdown list items
highlightTextColor: To specify the color of text to be seen when highlighted
containerClass: to access and set a class to the container
placeHolderText: to set the placeholder text
textFieldClass: to set the text field className 
listBoxClass: to style the list box
listItemClass: to style the list items
listItemFontSize: the font size of the list items
fieldName: specifies the name of the input box

*/

export default class AutoCompleteTextBox extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            suggestions: [],
            text: ''
        };
        
    };
    componentDidMount() {  
        this.updateVariables();
      }


    updateVariables(highlightTextColor, ){
        document.documentElement.style.setProperty('--highlight-color',this.props.highlightColor);
        document.documentElement.style.setProperty('--highlight-text-color', this.props.highlightTextColor);
        document.documentElement.style.setProperty('--list-item-font-size', this.props.listItemFontSize + 'px');
    }
    onTextChange = (e) => {
        const val = e.target.value;
        let suggestions = [];
        if(val.length > 0){
            const regex = new RegExp(`^${val}`, 'i');
            suggestions = this.props.items.sort().filter(v => regex.test(v));
        }
        this.setState(() => ({ suggestions, text: val }));
    }
    suggestionSelected (val) {
        this.setState(() =>({
            text: val,
            suggestions: [],

        }))
    }

    renderSuggestions(){
        const { suggestions } = this.state;
        if(suggestions.length === 0){
            return null; 
        }
        return (
            <ul className={`autocomplete-list-box ${this.props.listBoxClass}`}>
                {suggestions.map((item) => <li
                onClick={() => this.suggestionSelected(item)}
                className={`autocomplete-list-item ${this.props.listItemClass}`}>{item}</li>)}
            </ul>
        )

    }

    render(){
        const {text} = this.state;
        return(
            <div className={`autocomplete-main-container ${this.props.containerClass}`}>
                <div className={'autocomplete-container'}>
                    <input value={text} onChange={this.onTextChange} type="search" 
                    className={`autocomplete-input-bar ${this.props.textFieldClass}`} placeholder={this.props.placeholderText}
                    name={this.props.fieldName} />
                    
                </div>
                {this.renderSuggestions()} 
            </div>    
            
        );
    }
}