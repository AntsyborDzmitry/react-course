import React from 'react';
import CategoriesFilterBar from './categoriesFilterBar';
import SortBar from './sortBar';
import '../../styles/navigation/navigation.scss';
import { CATEGORIES } from '../../data/constant';

export default function navigation() {
  return (
    <div className="navigation">
      <CategoriesFilterBar categories={CATEGORIES} />
      <SortBar />
    </div>
  );
}
