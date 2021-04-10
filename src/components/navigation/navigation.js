import React from 'react';
import '../../styles/navigation/navigation.scss';
import { CATEGORIES } from '../../data/constant';
import CategoriesFilterBarAsync from './categoriesFilterBarAsync';
import SortBarAsync from './sortBarAsync';

export default function navigation() {
  return (
    <div className="navigation">
      <CategoriesFilterBarAsync categories={CATEGORIES} />
      <SortBarAsync />
    </div>
  );
}
