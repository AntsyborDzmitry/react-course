import React from 'react';
import Logo from './logo';
import Button from './button';

export default function headerTop() {
  return (
    <div className="header-top">
      <Logo logoLink="my-test-site.com" />
      <div className="add-film">
        <Button title="+ add movie" />
      </div>
    </div>
  );
}
