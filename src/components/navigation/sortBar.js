import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DropDown from './dropDown';
import { buildMovieList } from '../../redux/actions/actionCreators';
import { SORT_OPTIONS } from '../../data/constant';
import '../../styles/navigation/sortBar.scss';

function sortBar(props) {
  const { sortMovieList, filterKey } = props;
  const doSorting = (sortKey) => {
    sortMovieList(filterKey, sortKey);
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

const mapStateToProps = (state) => ({
  movies: state.movies,
  filterKey: state.filterBy,
});
const mapDispatchToProps = { sortMovieList: buildMovieList };

export default connect(mapStateToProps, mapDispatchToProps)(sortBar);
