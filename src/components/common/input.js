import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/common/input.scss';

export default function input(props) {
  const {
    inputId,
    inputType,
    inputName,
    labelTitle,
    inputPlaceholder,
    clickListener,
    changeListener,
  } = props;

  const defaultDateTypeChangeListener = () => {
    const inputElem = document.querySelector(`#${inputId}`);
    inputElem.className = (inputElem.value !== '' ? 'has-value' : '');
  };
  return (
    <>
      <label htmlFor={inputId}>{labelTitle}</label>
      <input
        type={inputType}
        id={inputId}
        name={inputName}
        placeholder={inputPlaceholder}
        onChange={inputType === 'date' ? defaultDateTypeChangeListener : changeListener}
        onClick={clickListener}
      />
    </>
  );
}

input.propTypes = {
  inputId: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputName: PropTypes.string,
  labelTitle: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  changeListener: PropTypes.func,
  clickListener: PropTypes.func,
};
