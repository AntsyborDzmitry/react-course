import React from 'react';
import Search from './search';
import HeaderTop from './headerTop';

export default function header() {
  return (
    <div className="header">
      <HeaderTop />
      <Search searchTitle="find your movie" searchPlaceholder="What do you want to watch?" />
      <div className="concord-img-gradient" />
    </div>
  );
}
