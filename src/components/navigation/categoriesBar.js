import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/navigation/categoriesBar.scss';

export default function categoriesBar(props) {
  const { categories } = props;
  const items = categories.map((category) => (<div key={category}>{category}</div>));

  return (
    <div className="categories-bar">
      {items}
    </div>
  );
}

categoriesBar.propTypes = {
  categories: PropTypes.instanceOf(Array).isRequired,
};
