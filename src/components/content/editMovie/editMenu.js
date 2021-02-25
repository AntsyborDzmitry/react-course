import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../../styles/content/editMovie/editMenu.scss';

export default function editMenu(props) {
  const { modalDeleteId, modalEditId, selfRef } = props;

  const handleExternalClick = (e) => {
    const { classList } = e.target;
    if (!classList.contains('edit-menu') && !classList.contains('circle')) {
      selfRef.current.classList.add('display-none');
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleExternalClick);
    return () => {
      document.removeEventListener('click', handleExternalClick);
    };
  }, []);

  const closeMenu = () => { selfRef.current.classList.add('display-none'); };

  const openEditModal = () => {
    document.querySelector(`#${modalEditId}`).classList.remove('display-none');
  };

  const openDeleteModal = () => {
    document.querySelector(`#${modalDeleteId}`).classList.remove('display-none');
  };

  return (
    <div className="edit-menu display-none" ref={selfRef}>
      <div><span onClick={closeMenu}>x</span></div>
      <div onClick={openEditModal}>Edit</div>
      <div onClick={openDeleteModal}>Delete</div>
    </div>
  );
}

editMenu.propTypes = {
  modalDeleteId: PropTypes.string.isRequired,
  modalEditId: PropTypes.string.isRequired,
  selfRef: PropTypes.shape({
    current: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  }).isRequired,
};
