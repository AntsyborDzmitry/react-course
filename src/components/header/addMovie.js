import React from 'react';
import PropTypes from 'prop-types';
import Button from '../common/button';
import Input from '../common/input';
import InputSelect from '../common/inputSelect';
import ModalContainer from './modalContainer';

const genreOptions = ['documentaries', 'comedies', 'action'];

export default function addMovie(props) {
  const { setShowModal } = props;

  return (
    <>
      <form>
        <ModalContainer title="add movie">
          <Input inputType="text" labelTitle="title" inputId="add_movie_title" inputName="movie_title" inputPlaceholder="Title here" />
          <Input inputType="date" labelTitle="release date" inputId="add_movie_date" inputName="movie_date" inputPlaceholder="Select Date" />
          <Input inputType="text" labelTitle="movie url" inputId="add_movie_url" inputName="movie_url" inputPlaceholder="Movie URL here" />
          <InputSelect labelTitle="genre" inputId="add_movie_genre" inputName="movie_genre" inputPlaceholder="Select Genre" options={genreOptions} />
          <Input inputType="text" labelTitle="overview" inputId="add_movie_overview" inputName="movie_url" inputPlaceholder="Overview here" />
          <Input inputType="text" labelTitle="runtime" inputId="add_movie_runtime" inputName="movie_runtime" inputPlaceholder="Runtime here" />
          <div className="bottom wrapper">
            <Button cssClass="bottom reset" type="reset" title="reset" value="reset" />
            <Button cssClass="bottom submit" type="button" title="submit" />
          </div>
        </ModalContainer>
      </form>
      <Button cssClass="add-film" title="+ add movie" clickListener={setShowModal} />
    </>
  );
}

addMovie.propTypes = {
  setShowModal: PropTypes.func.isRequired,
};
