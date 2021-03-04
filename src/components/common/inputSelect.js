import React, { useMemo } from 'react';
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

  const itemsBuilder = (item) => (<option key={item.key} value={item.key}>{item.value}</option>);
  const items = useMemo(() => options.map(itemsBuilder), [options]);
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
          {items}
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
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
};
