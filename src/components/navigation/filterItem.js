// @flow
import React from 'react';

type filterItemProps = {
    category: string;
    activityStatus: string;
    doFiltering: Function;
    dataKey: string;
}

export default function filterItem(props: filterItemProps): any {
  const {
    category,
    activityStatus,
    doFiltering,
    dataKey,
  } = props;

  const clickHandler = (e) => {
    doFiltering(e.target?.dataset?.key);
  };

  return (
    <>
      <div data-key={dataKey} className={activityStatus} onClick={clickHandler}>{category}</div>
    </>
  );
}
