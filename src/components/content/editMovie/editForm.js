import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/button';
import Input from '../../common/input';
import InputSelect from '../../common/inputSelect';
import Modal from '../../common/modal';
import { GENRE_OPTIONS } from '../../../data/constant';

export default function editForm(props) {
  const { modalId } = props;

  return (
    <form>
      <Modal title="edit movie" modalId={modalId}>
        <Input inputType="text" labelTitle="movie id" inputName="movie_id" inputPlaceholder="Movie id here" />
        <Input inputType="text" labelTitle="title" inputName="movie_title" inputPlaceholder="Title here" />
        <Input inputType="date" labelTitle="release date" inputName="movie_date" inputPlaceholder="Select Date" />
        <Input inputType="text" labelTitle="movie url" inputName="movie_url" inputPlaceholder="Movie URL here" />
        <InputSelect labelTitle="genre" inputName="movie_genre" inputPlaceholder="Select Genre" options={GENRE_OPTIONS} />
        <Input inputType="text" labelTitle="overview" inputName="movie_url" inputPlaceholder="Overview here" />
        <Input inputType="text" labelTitle="runtime" inputName="movie_runtime" inputPlaceholder="Runtime here" />
        <div className="bottom wrapper">
          <Button cssClass="bottom reset" type="reset" title="reset" value="reset" />
          <Button cssClass="bottom save" type="button" title="save" />
        </div>
      </Modal>
    </form>
  );
}

editForm.propTypes = {
  modalId: PropTypes.string.isRequired,
};
