import React from 'react';
import Button from '../common/button';
import AddMovieForm from './addMovieForm';

export default function addMovie() {
  const modalAddMovieId = 'add_movie_modal';
  const showModal = () => {
    document.querySelector(`#${modalAddMovieId}`).classList.remove('display-none');
  };
  return (
    <>
      <AddMovieForm modalId={modalAddMovieId} />
      <Button cssClass="add-film" title="+ add movie" clickListener={showModal} />
    </>
  );
}
