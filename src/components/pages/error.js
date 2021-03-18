import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/404.scss';
import Button from '../common/button';

export default function error() {
  return (
  <div className="error-page">
    <div>404 error</div>
    <Link to="/">
      <Button cssClass="reset" title="Go back to home" />
    </Link>
  </div>
  );
}
