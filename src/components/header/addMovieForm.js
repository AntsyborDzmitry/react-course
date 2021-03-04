import React from 'react';
import PropTypes from 'prop-types';
import Button from '../common/button';
import Input from '../common/input';
import InputSelect from '../common/inputSelect';
import Modal from '../common/modal';
import { genreOptions } from '../../data/mockData';

export default function addMovieForm(props) {
  const { modalId } = props;

  return (
    <form>
      <Modal title="add movie" modalId={modalId}>
        <Input inputType="text" labelTitle="title" inputId="add_movie_title" inputName="movie_title" inputPlaceholder="Title here" />
        <Input inputType="date" labelTitle="release date" inputId="add_movie_date" inputName="movie_date" inputPlaceholder="Select Date" />
        <Input inputType="text" labelTitle="movie url" inputId="add_movie_url" inputName="movie_url" inputPlaceholder="Movie URL here" />
        <InputSelect labelTitle="genre" inputId="add_movie_genre" inputName="movie_genre" inputPlaceholder="Select Genre" options={genreOptions} />
        <Input inputType="text" labelTitle="overview" inputId="add_movie_overview" inputName="movie_url" inputPlaceholder="Overview here" />
        <Input inputType="text" labelTitle="runtime" inputId="add_movie_runtime" inputName="movie_runtime" inputPlaceholder="Runtime here" />
        <div className="bottom wrapper">
          <Button cssClass="bottom reset" type="reset" title="reset" />
          <Button cssClass="bottom submit" type="button" title="submit" />
        </div>
      </Modal>
    </form>
  );
}

addMovieForm.propTypes = {
  modalId: PropTypes.string.isRequired,
};
