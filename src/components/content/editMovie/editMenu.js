import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../../styles/content/editMovie/editMenu.scss';

export default function editMenu(props) {
  const {
    modalDeleteId,
    modalEditId,
    displayCssClass,
    stateHandler,
  } = props;

  const handleExternalClick = (e) => {
    const { classList } = e.target;
    if (!classList.contains('edit-menu') && !classList.contains('circle')) {
      stateHandler('display-none');
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleExternalClick);
    return () => {
      document.removeEventListener('click', handleExternalClick);
    };
  }, []);

  const openModal = (modalId) => () => {
    document.querySelector(`#${modalId}`).classList.remove('display-none');
  };

  return (
    <div className={`edit-menu ${displayCssClass}`}>
      <div><span>x</span></div>
      <div onClick={openModal(modalEditId)}>Edit</div>
      <div onClick={openModal(modalDeleteId)}>Delete</div>
    </div>
  );
}

editMenu.propTypes = {
  modalDeleteId: PropTypes.string.isRequired,
  modalEditId: PropTypes.string.isRequired,
  displayCssClass: PropTypes.string,
  stateHandler: PropTypes.func,
};
