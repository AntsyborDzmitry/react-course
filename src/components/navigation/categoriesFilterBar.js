import React, { useMemo, useCallback } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadMovieList } from '../../redux/actions/actionCreators';
import FilterItem from './filterItem';
import { FILTER_MOVIE_BY } from '../../redux/actions/actionTypes';
import '../../styles/navigation/categoriesFilterBar.scss';

function categoriesFilterBar(props) {
  const { categories, filterMovieList, sortKey } = props;
  const doFiltering = (filterKey) => {
    filterMovieList(filterKey, sortKey, FILTER_MOVIE_BY);
  };
  const buildFilterItem = (category, ind) => {
    const status = ind === 0 ? 'active' : '';
    return (
      <FilterItem
        key={category.key}
        dataKey={category.key}
        category={category.value}
        activityStatus={status}
        doFiltering={doFiltering}
      />
    );
  };

  const categoryBuilder = (category, ind) => buildFilterItem(category, ind);
  const items = useMemo(() => categories.map(categoryBuilder), [categories]);

  const highLightActiveFilter = (e) => {
    const elements = Array.from(e.currentTarget.children);
    if (elements.length) {
      elements.forEach((element) => element.classList.remove('active'));
    }
    e.target.classList.add('active');
  };

  return (
    <div className="categories-bar" onClick={useCallback(highLightActiveFilter, [])}>
      {items}
    </div>
  );
}

categoriesFilterBar.propTypes = {
  categories: PropTypes.instanceOf(Array).isRequired,
  filterMovieList: PropTypes.func.isRequired,
  sortKey: PropTypes.string,
};

const mapStateToProps = (state) => ({
  movies: state.movie.movies,
  sortKey: state.movie.sortedBy,
});
const mapDispatchToProps = { filterMovieList: loadMovieList };

export default connect(mapStateToProps, mapDispatchToProps)(categoriesFilterBar);
