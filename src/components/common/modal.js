import React from 'react';
import PropTypes from 'prop-types';
import ButtonClose from './buttonClose';
import '../../styles/common/modal.scss';
import '../../styles/common/buttonClose.scss';

export default function modal(props) {
  const {
    title, modalId, children, displayModal,
  } = props;

  const hideModal = () => { displayModal(false); };
  return (
    <div id={modalId} className="modal">
      <section className="modal-main">
        <ButtonClose clickListener={hideModal} />
        <div className="modal-content">
          <div className="modal-title">{title}</div>
          { children }
        </div>
      </section>
    </div>
  );
}

modal.propTypes = {
  title: PropTypes.string,
  modalId: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
