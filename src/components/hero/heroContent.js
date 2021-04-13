import React from 'react';
import { useSelector } from 'react-redux';
import SearchAsync from './searchAsync';
import HeroMenuAsync from './heroMenuAsync';

export default function heroContent() {
  const visibility = useSelector((state) => state.movieDetails.visibility);
  return (
    <div className={`hero-content ${visibility}`}>
      <HeroMenuAsync />
      <SearchAsync />
      <div className="concord-img-gradient" />
    </div>
  );
}
