import React from 'react';
import {calculateCounterState, colors} from '../utilities/textControlUtilities.js';

export default class SimpleComponentWithTextControl extends React.Component {
  constructor(props){
        super(props);
        this.state={
            textDisplay: false,
            counter: 0
        }
    }

  toggleButton(){
    this.setState((currentState) => ({
      textDisplay: !currentState.textDisplay,
      counter : calculateCounterState(this.state, colors.length)
    }));
  }

  render() {
      const colorSchema = [...colors].reverse();
    return ( <div className={colorSchema[this.state.counter]}>
         <button onClick={() => this.toggleButton()}>
           {this.state.textDisplay ? "hide" : "show"}
         </button>
         <span>{this.state.textDisplay && this.props.text}</span>
     </div>)
  }
}