import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../../common/button';
import Modal from '../../common/modal';
import { deleteMovie } from '../../../redux/actions/actionCreators';

function deleteForm(props) {
  const {
    id, deleteMovieHandler, selectedMovie, displayModal,
  } = props;
  const doSubmit = (e) => {
    e.preventDefault();
    deleteMovieHandler(selectedMovie.id);
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
  deleteMovieHandler: PropTypes.func,
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

const mapDispatchToProps = { deleteMovieHandler: deleteMovie };
const mapStateToProps = (state) => ({ selectedMovie: state.movieDetails.selectedMovie });
export default connect(mapStateToProps, mapDispatchToProps)(deleteForm);
