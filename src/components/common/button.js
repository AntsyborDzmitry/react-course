// @flow
import React from 'react';
import '../../styles/common/button.scss';

type buttonProps = {
    cssClass: number;
    type: string;
    title: string;
    clickListener: Function;
}

function button(props: buttonProps): any {
  const {
    cssClass,
    type,
    title,
    clickListener,
  } = props;

  return (
    <button className={cssClass} type={type} onClick={clickListener}>
      {title}
    </button>
  );
}

export default React.memo(button);
