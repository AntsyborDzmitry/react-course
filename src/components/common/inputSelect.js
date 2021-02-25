import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/common/input.scss';

export default function inputSelect(props) {
  const {
    inputName,
    labelTitle,
    inputPlaceholder,
    changeListener,
    clickListener,
    options,
  } = props;

  return (
    <>
      <label>
        {labelTitle}
        <select
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
      </label>
    </>
  );
}

inputSelect.propTypes = {
  inputName: PropTypes.string,
  labelTitle: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  changeListener: PropTypes.func,
  clickListener: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
