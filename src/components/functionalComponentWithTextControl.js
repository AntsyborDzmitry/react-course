import React, { useState } from 'react';
import {calculateCounterState, colors} from '../utilities/textControlUtilities.js';

export default function functionalComponentWithTextControl(props) {

  const [textDisplay, setTextDisplay] = useState(false);
  const [counter, setCounter] = useState(0);
  const colorSchema = colors;

  const toggleButton = () => {
    setTextDisplay(!textDisplay);
    setCounter(calculateCounterState({'textDisplay': textDisplay, 'counter': counter}, colors.length));
  }

  return(
    <div className={colorSchema[counter]}>
      <button onClick={() => toggleButton()}>
        {textDisplay ? 'hide' : 'show'}
      </button>
      <span>{textDisplay && props.text}</span>
    </div>
  )
}