// @flow
import React from 'react';

type buttonCloseProps = {
    clickListener: Function;
}

function buttonClose(props: buttonCloseProps): any {
  const {
    clickListener,
  } = props;

  return (
    <button type="button" className="close" aria-label="Close" onClick={clickListener}>
      <span aria-hidden="true">&times;</span>
    </button>
  );
}
export default React.memo(buttonClose);
