import React from 'react';
import PropTypes from 'prop-types';
import FilterItem from './filterItem';
import '../../styles/navigation/categoriesFilterBar.scss';

export default function categoriesFilterBar(props) {
  const { categories } = props;

  const buildFilterItem = (category, ind) => {
    const status = ind === 0 ? 'active' : '';
    return (<FilterItem key={category} category={category} activityStatus={status} />);
  };

  const highLightActiveFilter = (e) => {
    const elements = Array.from(e.currentTarget.children);
    if (elements.length) {
      elements.forEach((element) => element.classList.remove('active'));
    }
    e.target.classList.add('active');
  };

  return (
    <div className="categories-bar" onClick={highLightActiveFilter}>
      {
        categories.map((category, ind) => buildFilterItem(category, ind))
      }
    </div>
  );
}

categoriesFilterBar.propTypes = {
  categories: PropTypes.instanceOf(Array).isRequired,
};
