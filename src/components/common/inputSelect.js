import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import '../../styles/common/input.scss';

export default function inputSelect(props) {
  const {
    inputName, labelTitle, inputPlaceholder, changeListener, value, clickListener, options,
  } = props;

  const selectRef = useRef(null);

  const itemsBuilder = (item) => (<option key={item.key} value={item.key}>{item.value}</option>);
  const items = options.map(itemsBuilder);
  const isSelectedItemShouldBeUpdated = (inputRef, actualValues) => (
    inputRef.current && actualValues.length > 0 && actualValues[0] !== inputRef.current.value
  );

  if (isSelectedItemShouldBeUpdated(selectRef, value)) {
    selectRef.current.value = value[0].toLowerCase();
  }

  return (
    <>
      <label>
        {labelTitle}
        <select
          name={inputName}
          placeholder={inputPlaceholder}
          ref={selectRef}
          onChange={changeListener}
          onClick={clickListener}
        >
          <option hidden>{inputPlaceholder}</option>
          {items}
        </select>
      </label>
    </>
  );
}

inputSelect.propTypes = {
  inputName: PropTypes.string,
  labelTitle: PropTypes.string,
  value: PropTypes.arrayOf(PropTypes.string),
  inputPlaceholder: PropTypes.string,
  clickListener: PropTypes.func,
  changeListener: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
};
