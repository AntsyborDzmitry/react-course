import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import CircleMenu from './circleMenu';
import EditMenu from './editMenu';

export default function editMovie(props) {
  const { modalDeleteId, modalEditId } = props;
  const editMenuRef = useRef();

  return (
    <>
      <CircleMenu externalRef={editMenuRef} />
      <EditMenu selfRef={editMenuRef} modalDeleteId={modalDeleteId} modalEditId={modalEditId} />
    </>
  );
}

editMovie.propTypes = {
  modalDeleteId: PropTypes.string.isRequired,
  modalEditId: PropTypes.string.isRequired,
};
