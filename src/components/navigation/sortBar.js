import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DropDown from './dropDown';
import { loadMovieList } from '../../redux/actions/actionCreators';
import { SORT_OPTIONS } from '../../data/constant';
import { SORT_MOVIE_BY } from '../../redux/actions/actionTypes';
import '../../styles/navigation/sortBar.scss';

function sortBar(props) {
  const { sortMovieList, filterKey } = props;
  const doSorting = (sortKey) => {
    sortMovieList(filterKey, sortKey, SORT_MOVIE_BY);
  };

  return (
    <div className="sort-bar">
      <div className="sort-title">sort by</div>
      <DropDown options={SORT_OPTIONS} sortMovieHandler={doSorting} />
    </div>
  );
}

sortBar.propTypes = {
  sortMovieList: PropTypes.func,
  filterKey: PropTypes.string,
};

sortBar.propTypes = {
  sortMovieList: PropTypes.func.isRequired,
  filterKey: PropTypes.string,
};

const mapDispatchToProps = { sortMovieList: loadMovieList };

export default connect(null, mapDispatchToProps)(sortBar);
