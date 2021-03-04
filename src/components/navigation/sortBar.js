import React from 'react';
import { connect } from 'react-redux';
import DropDown from './dropDown';
import { sortMovieListBy } from '../../redux/actions/actionCreators';
import { SORT_OPTIONS } from '../../data/constant';
import '../../styles/navigation/sortBar.scss';

function sortBar(props) {
  const { sortMovieList, movies } = props;
  const doSorting = (key) => {
    sortMovieList(movies, key);
  };

  return (
    <div className="sort-bar">
      <div className="sort-title">sort by</div>
      <DropDown options={SORT_OPTIONS} sortMovieHandler={doSorting} />
    </div>
  );
}
const mapStateToProps = (state) => ({ movies: state.movies });
const mapDispatchToProps = { sortMovieList: sortMovieListBy };

export default connect(mapStateToProps, mapDispatchToProps)(sortBar);
