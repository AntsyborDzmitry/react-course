import React from 'react';
import '../../styles/layout/footer.scss';

export default function footer(props) {
  const { children } = props;
  return (
    <div className="footer">
      {children}
    </div>
  );
}
