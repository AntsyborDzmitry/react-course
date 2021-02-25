import React from 'react';
import '../../styles/common/modal.scss';
import PropTypes from 'prop-types';

export default function modal(props) {
  const {
    title,
    modalId,
    children,
  } = props;

  const hideModal = () => {
    const modalEl = document.querySelector(`#${modalId}`);
    modalEl.classList.add('display-none');
    modalEl.closest('form').reset();
  };
  return (
    <div id={modalId} className="modal display-none">
      <section className="modal-main">
        <button type="button" className="top close" aria-label="Close" onClick={hideModal}>
          <span aria-hidden="true">&times;</span>
        </button>
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
