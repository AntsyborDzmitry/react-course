import React from 'react';
import CategoriesBar from './categoriesBar';
import SortBar from './sortBar';
import '../../styles/navigation/navigation.scss';
import { categories } from '../../data/mockData';

export default function navigation() {
  return (
    <div className="navigation">
      <CategoriesBar categories={categories} />
      <SortBar />
    </div>
  );
}
