import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../../common/button';
import Input from '../../common/input';
import InputSelect from '../../common/inputSelect';
import Modal from '../../common/modal';
import { GENRE_OPTIONS } from '../../../data/constant';
import { editMovie } from '../../../redux/actions/actionCreators';
import { getSerializedFormData } from '../../../utils/utils';

function editForm(props) {
  const { id, editMovieHandler, selectedMovie } = props;
  const doSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(document.getElementById(`${id}_form`));
    const serializedData = getSerializedFormData(formData);
    editMovieHandler(serializedData);
    document.querySelector(`#${id}_modal`).classList.add('display-none');
  };
  return (
    <form id={`${id}_form`} onSubmit={doSubmit}>
      <Modal title="edit movie" modalId={`${id}_modal`} resetFormAfterClose={false}>
        <Input inputType="text" labelTitle="movie id" inputName="id" inputPlaceholder="Movie id here" value={selectedMovie.id} />
        <Input inputType="text" labelTitle="title" inputName="title" inputPlaceholder="Title here" value={selectedMovie.title} />
        <Input inputType="date" labelTitle="release date" inputName="release_date" inputPlaceholder="Select Date" value={selectedMovie.release_date} />
        <Input inputType="text" labelTitle="movie url" inputName="poster_path" inputPlaceholder="Movie URL here" value={selectedMovie.poster_path} />
        <InputSelect labelTitle="genre" inputName="genres" inputPlaceholder="Select Genre" options={GENRE_OPTIONS} value={selectedMovie.genres} />
        <Input inputType="text" labelTitle="overview" inputName="overview" inputPlaceholder="Overview here" value={selectedMovie.overview} />
        <Input inputType="text" labelTitle="runtime" inputName="runtime" inputPlaceholder="Runtime here" value={selectedMovie.runtime} />
        <Input inputType="hidden" inputName="vote_average" value={selectedMovie.vote_average} />
        <Input inputType="hidden" inputName="tagline" value={selectedMovie.tagline} />
        <Input inputType="hidden" inputName="vote_count" value={selectedMovie.vote_count} />
        <Input inputType="hidden" inputName="budget" value={selectedMovie.budget} />
        <Input inputType="hidden" inputName="revenue" value={selectedMovie.revenue} />
        <div className="bottom wrapper">
          <Button cssClass="bottom reset" type="reset" title="reset" value="reset" />
          <Button cssClass="bottom save" type="submit" title="save" />
        </div>
      </Modal>
    </form>
  );
}

editForm.propTypes = {
  id: PropTypes.string.isRequired,
  editMovieHandler: PropTypes.func,
  selectedMovie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    tagline: PropTypes.string,
    runtime: PropTypes.number,
    overview: PropTypes.string,
    vote_average: PropTypes.number,
  }),
};

const mapDispatchToProps = { editMovieHandler: editMovie };

export default connect(null, mapDispatchToProps)(editForm);
