import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../../common/button';
import Modal from '../../common/modal';
import { deleteMovie } from '../../../redux/actions/actionCreators';

export default function deleteForm(props) {
  const { id, displayModal } = props;
  const dispatch = useDispatch();
  const selectedMovie = useSelector((state) => state.movieDetails.selectedMovie);

  const doSubmit = (e) => {
    e.preventDefault();
    dispatch(deleteMovie(selectedMovie.id));
    displayModal(false);
  };

  return (
    <form id={`${id}_form`} onSubmit={doSubmit}>
      <Modal title="delete movie" modalId={`${id}_modal`} displayModal={displayModal}>
        <div className="confirmation-message">Are you sure you want to delete this movie?</div>
        <div className="bottom wrapper">
          <Button cssClass="bottom confirm" type="submit" title="confirm" />
        </div>
      </Modal>
    </form>
  );
}

deleteForm.propTypes = {
  id: PropTypes.string.isRequired,
  displayModal: PropTypes.func,
};
