import React from 'react';
import Logo from '../common/logo';
import Button from '../common/button';
import '../../styles/header/headerMenu.scss';

export default function headerMenu() {
  return (
    <div className="header-menu">
      <Logo logoLink="my-test-site.com" />
      <Button cssClass="add-film" title="+ add movie" />
    </div>
  );
}
