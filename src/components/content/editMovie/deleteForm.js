import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/button';
import Modal from '../../common/modal';

export default function editForm(props) {
  const { modalId } = props;

  return (
    <form>
      <Modal title="delete movie" modalId={modalId}>
        <div className="confirmation-message">Are you sure you want to delete this movie?</div>
        <div className="bottom wrapper">
          <Button cssClass="bottom confirm" type="button" title="confirm" />
        </div>
      </Modal>
    </form>
  );
}

editForm.propTypes = {
  modalId: PropTypes.string.isRequired,
};
