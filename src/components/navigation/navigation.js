import React from 'react';
import CategoriesFilterBar from './categoriesFilterBar';
import SortBar from './sortBar';
import '../../styles/navigation/navigation.scss';
import { categories } from '../../data/mockData';

export default function navigation() {
  return (
    <div className="navigation">
      <CategoriesFilterBar categories={categories} />
      <SortBar />
    </div>
  );
}
