import React from 'react';
import CategoriesBar from './categoriesBar';
import SortBar from './sortBar';

export default function nav() {
  return (
    <div className="navigation">
      <CategoriesBar categories={['all', 'documentary', 'comedy', 'horror', 'crime']} />
      <SortBar />
    </div>
  );
}
