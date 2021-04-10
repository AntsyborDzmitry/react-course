import React, { useCallback, useState } from 'react';
import Button from '../common/button';
import AddMovieFormAsync from './addMovieFormAsync';

export default function addMovie() {
  const [visibleAdd, setVisibleAddForm] = useState(false);
  const addMovieId = 'add_movie';
  const showModal = () => { setVisibleAddForm(true); };
  return (
    <>
      {visibleAdd && <AddMovieFormAsync id={addMovieId} displayModal={setVisibleAddForm} />}
      <Button cssClass="add-film" title="+ add movie" clickListener={useCallback(showModal, [])} />
    </>
  );
}
