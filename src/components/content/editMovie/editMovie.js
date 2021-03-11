import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CircleMenu from './circleMenu';
import EditMenu from './editMenu';

export default function editMovie(props) {
  const {
    modalDeleteId, modalEditId, setVisibleEditForm, setVisibleDeleteForm,
  } = props;
  const [editMenuCssClass, setEditMenuCssClass] = useState('display-none');

  const showEditMenu = (state) => {
    setEditMenuCssClass(state);
  };

  return (
    <>
      <CircleMenu stateHandler={showEditMenu} />
      <EditMenu
        editMenuCssClass={editMenuCssClass}
        modalDeleteId={modalDeleteId}
        modalEditId={modalEditId}
        showEditMenu={showEditMenu}
        setVisibleEditForm={setVisibleEditForm}
        setVisibleDeleteForm={setVisibleDeleteForm}
      />
    </>
  );
}

editMovie.propTypes = {
  modalDeleteId: PropTypes.string.isRequired,
  modalEditId: PropTypes.string.isRequired,
};
