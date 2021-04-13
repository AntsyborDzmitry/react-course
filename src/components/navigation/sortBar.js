import React from 'react';
import { useDispatch } from 'react-redux';
import DropDown from './dropDown';
import { loadMovieList } from '../../redux/actions/actionCreators';
import { SORT_OPTIONS } from '../../data/constant';
import { SORT_MOVIE_BY } from '../../redux/actions/actionTypes';
import '../../styles/navigation/sortBar.scss';

export default function sortBar(props) {
  const { filterKey } = props;
  const dispatch = useDispatch();
  const doSorting = (sortKey) => {
    dispatch(loadMovieList(filterKey, sortKey, SORT_MOVIE_BY));
  };

  return (
    <div className="sort-bar">
      <div className="sort-title">sort by</div>
      <DropDown options={SORT_OPTIONS} sortMovieHandler={doSorting} />
    </div>
  );
}
