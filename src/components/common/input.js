import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../styles/common/input.scss';

export default function input(props) {
  const {
    inputType,
    inputName,
    labelTitle,
    inputPlaceholder,
    clickListener,
    changeListener,
  } = props;

  const inputRef = useRef(null);
  const defaultDateTypeChangeListener = () => {
    const inputElem = inputRef.current;
    inputElem.className = (inputElem.value !== '' ? 'has-value' : '');
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

  return (
    <>
      <label>
        {labelTitle}
        <input
          type={inputType}
          name={inputName}
          placeholder={inputPlaceholder}
          onChange={inputType === 'date' ? defaultDateTypeChangeListener : changeListener}
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
  inputPlaceholder: PropTypes.string,
  changeListener: PropTypes.func,
  clickListener: PropTypes.func,
};
