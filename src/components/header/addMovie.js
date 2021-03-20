import React, { useCallback } from 'react';
import Button from '../common/button';
import AddMovieForm from './addMovieForm';

export default function addMovie() {
  const addMovieId = 'add_movie';
  const showModal = () => {
    document.querySelector(`#${addMovieId}_modal`).classList.remove('display-none');
  };
  return (
    <>
      <AddMovieForm id={addMovieId} />
      <Button cssClass="add-film" title="+ add movie" clickListener={useCallback(showModal, [])} />
    </>
  );
}
