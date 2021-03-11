import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../../styles/content/editMovie/editMenu.scss';

export default function editMenu(props) {
  const {
    modalDeleteId,
    modalEditId,
    editMenuCssClass,
    showEditMenu,
    setVisibleEditForm,
    setVisibleDeleteForm,
  } = props;

  const handleExternalClick = (e) => {
    const { classList } = e.target;
    if (!classList.contains('edit-menu') && !classList.contains('circle')) {
      showEditMenu('display-none');
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleExternalClick);
    return () => {
      document.removeEventListener('click', handleExternalClick);
    };
  }, []);

  const openEditModal = () => {
    setVisibleEditForm(true);
  };
  const openDeleteModal = () => {
    setVisibleDeleteForm(true);
  };

  return (
    <div className={`edit-menu ${editMenuCssClass}`}>
      <div><span>x</span></div>
      <div onClick={openEditModal}>Edit</div>
      <div onClick={openDeleteModal}>Delete</div>
    </div>
  );
}

editMenu.propTypes = {
  modalDeleteId: PropTypes.string.isRequired,
  modalEditId: PropTypes.string.isRequired,
  displayCssClass: PropTypes.string,
  stateHandler: PropTypes.func,
};
