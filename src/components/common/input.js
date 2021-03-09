import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../styles/common/input.scss';

export default function input(props) {
  const {
    inputType, inputName, labelTitle, value, inputPlaceholder, clickListener,
  } = props;

  const inputRef = useRef(null);

  const changeListener = (e) => {
    const inputElem = e.target;
    if (inputType === 'date') {
      inputElem.className = (inputElem.value !== '' ? 'has-value' : '');
    }
  };
  const resetDatePlaceholder = () => inputRef.current.classList.remove('has-value');

  useEffect(() => {
    const form = inputRef.current.closest('form');
    if (inputType === 'date') {
      form?.addEventListener('reset', resetDatePlaceholder);
    }
    return () => {
      form?.removeEventListener('reset', resetDatePlaceholder);
    };
  }, []);

  if (inputRef.current && value !== inputRef.current.value) {
    if (inputType === 'date') {
      inputRef.current.className = (value !== '' ? 'has-value' : '');
    }
    inputRef.current.value = value;
  }

  return (
    <>
      <label>
        {labelTitle}
        <input
          type={inputType}
          name={inputName}
          placeholder={inputPlaceholder}
          onChange={changeListener}
          onClick={clickListener}
          ref={inputRef}
        />
      </label>
    </>
  );
}

input.propTypes = {
  inputType: PropTypes.string.isRequired,
  inputName: PropTypes.string,
  labelTitle: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  inputPlaceholder: PropTypes.string,
  clickListener: PropTypes.func,
};
