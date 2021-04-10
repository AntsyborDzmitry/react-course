import React from 'react';
import HeroAsync from '../layout/heroAsync';
import HeroContentAsync from './heroContentAsync';
import MovieDetailsAsync from './movieDetailsAsync';

export default function heroComponent() {
  return (
    <HeroAsync>
      <HeroContentAsync />
      <MovieDetailsAsync />
    </HeroAsync>
  );
}
