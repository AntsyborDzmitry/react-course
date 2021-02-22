import React from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './categoryItem';
import '../../styles/navigation/categoriesBar.scss';

export default function categoriesBar(props) {
  const { categories } = props;
  const buildCategoryItem = (category, ind) => {
    const status = ind === 0 ? 'active' : '';
    return (<CategoryItem key={category} category={category} activityStatus={status} />);
  };
  const items = categories.map((category, ind) => buildCategoryItem(category, ind));

  const changeActivityStatus = (e) => {
    const elements = Array.from(e.currentTarget.children);
    if (elements.length) {
      elements.forEach((element) => element.classList.remove('active'));
    }
    e.target.classList.add('active');
  };

  return (
    <div className="categories-bar" onClick={changeActivityStatus}>
      {items}
    </div>
  );
}

categoriesBar.propTypes = {
  categories: PropTypes.instanceOf(Array).isRequired,
};
