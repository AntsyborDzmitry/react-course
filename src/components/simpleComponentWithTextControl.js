import React from 'react';
import { calculateCounterState, colors } from '../utilities/textControlUtilities';

export default class SimpleComponentWithTextControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textDisplay: false,
      counter: 0,
    };
  }

  toggleButton() {
    this.setState((currentState) => ({
      textDisplay: !currentState.textDisplay,
      counter: calculateCounterState(currentState, colors.length),
    }));
  }

  render() {
    const colorSchema = [...colors].reverse();
    const { counter, textDisplay } = this.state;
    const { text } = this.props;
    return (
      <div className={colorSchema[counter]}>
        <button type="button" onClick={() => this.toggleButton()}>
          {textDisplay ? 'hide' : 'show'}
        </button>
        <span>{textDisplay && text}</span>
      </div>
    );
  }
}
