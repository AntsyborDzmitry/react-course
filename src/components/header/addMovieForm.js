import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../common/button';
import Input from '../common/input';
import InputSelect from '../common/inputSelect';
import Modal from '../common/modal';
import { addMovie } from '../../redux/actions/actionCreators';
import { GENRE_OPTIONS } from '../../data/constant';
import { getSerializedFormData } from '../../utils/utils';

function addMovieForm(props) {
  const { id, addMovieHandler } = props;

  const doSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(document.getElementById(`${id}_form`));
    const serializedData = getSerializedFormData(formData);
    addMovieHandler(serializedData);
    document.querySelector(`#${id}_modal`).classList.add('display-none');
  };

  return (
    <form id={`${id}_form`} onSubmit={doSubmit}>
      <Modal title="add movie" modalId={`${id}_modal`}>
        <Input inputType="text" labelTitle="title" inputId="add_movie_title" inputName="title" inputPlaceholder="Title here" />
        <Input inputType="date" labelTitle="release date" inputId="add_movie_date" inputName="release_date" inputPlaceholder="Select Date" />
        <Input inputType="text" labelTitle="movie url" inputId="add_movie_url" inputName="poster_path" inputPlaceholder="Movie URL here" />
        <InputSelect labelTitle="genre" inputId="add_movie_genre" inputName="genres" inputPlaceholder="Select Genre" options={GENRE_OPTIONS} />
        <Input inputType="text" labelTitle="overview" inputId="add_movie_overview" inputName="overview" inputPlaceholder="Overview here" />
        <Input inputType="text" labelTitle="runtime" inputId="add_movie_runtime" inputName="runtime" inputPlaceholder="Runtime here" />
        <div className="bottom wrapper">
          <Button cssClass="bottom reset" type="reset" title="reset" />
          <Button cssClass="bottom submit" type="submit" title="submit" />
        </div>
      </Modal>
    </form>
  );
}

addMovieForm.propTypes = {
  id: PropTypes.string.isRequired,
  addMovieHandler: PropTypes.func,
};

const mapDispatchToProps = { addMovieHandler: addMovie };

export default connect(null, mapDispatchToProps)(addMovieForm);
