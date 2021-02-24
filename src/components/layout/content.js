import React from 'react';
import '../../styles/layout/content.scss';

export default function content(props) {
  const { children } = props;
  return (
    <div className="content">
      {children}
    </div>
  );
}
