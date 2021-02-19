import React from 'react';
import '../../styles/layout/header.scss';

export default function header(props) {
  const { children } = props;

  return (
    <div className="header">
      {children}
      <div className="concord-img-gradient" />
    </div>
  );
}
