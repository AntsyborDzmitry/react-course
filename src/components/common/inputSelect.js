import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/common/input.scss';

export default function inputSelect(props) {
  const {
    inputId,
    inputName,
    labelTitle,
    inputPlaceholder,
    clickListener,
    changeListener,
    options,
  } = props;

  return (
    <>
      <label htmlFor={inputId}>{labelTitle}</label>
      <select
        id={inputId}
        name={inputName}
        placeholder={inputPlaceholder}
        onChange={changeListener}
        onClick={clickListener}
      >
        <option hidden>{inputPlaceholder}</option>
        {
          options.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))
        }
      </select>
    </>
  );
}

inputSelect.propTypes = {
  inputId: PropTypes.string.isRequired,
  inputName: PropTypes.string,
  labelTitle: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  changeListener: PropTypes.func,
  clickListener: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
