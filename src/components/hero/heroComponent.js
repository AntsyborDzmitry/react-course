import React from 'react';
import Hero from '../layout/hero';
import HeroContent from './heroContent';
import MovieDetails from './movieDetails';

export default function heroComponent() {
  return (
    <Hero>
      <HeroContent />
      <MovieDetails />
    </Hero>
  );
}
