import React, { useState } from 'react';
import { calculateCounterState, colors } from '../utilities/textControlUtilities';

export default function functionalComponentWithTextControl(props) {
  const [textDisplay, setTextDisplay] = useState(false);
  const [counter, setCounter] = useState(0);
  const colorSchema = colors;
  const { text } = props;

  const toggleButton = () => {
    setTextDisplay(!textDisplay);
    setCounter(calculateCounterState({ textDisplay, counter }, colors.length));
  };

  return (
    <div className={colorSchema[counter]}>
      <button type="button" onClick={() => toggleButton()}>
        {textDisplay ? 'hide' : 'show'}
      </button>
      <span>{textDisplay && text}</span>
    </div>
  );
}
