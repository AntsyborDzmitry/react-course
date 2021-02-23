import React from 'react';
import '../../styles/header/modal.scss';
import PropTypes from 'prop-types';

export default function modal(props) {
  const {
    visibilityState,
    setHideModal,
    title,
    children,
  } = props;

  return (
    <div className={`modal ${visibilityState.visibilityState}`}>
      <section className="modal-main">
        <button type="button" className="top close" aria-label="Close" onClick={setHideModal}>
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
  visibilityState: PropTypes.shape({ visibilityState: PropTypes.string.isRequired }),
  setHideModal: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
