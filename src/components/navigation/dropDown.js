import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import '../../styles/navigation/dropDown.scss';

function dropDown(props) {
  const { options, sortMovieHandler } = props;
  const [openDropDownState, setOpenDropDownState] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  const chooseElementEvent = (e) => {
    const { target } = e;
    setOpenDropDownState('');
    setSelectedValue(target.textContent);
    sortMovieHandler(target.dataset.value);
  };
  const openMenuEvent = () => { setOpenDropDownState('open'); };
  const handleClick = (e) => {
    if (!e.target.classList.contains('custom-select__trigger')
      && !e.target.classList.contains('selected-value')) {
      setOpenDropDownState('');
    }
  };

  useEffect(() => {
    setSelectedValue(options[0].value);
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const optionsBuilder = (item) => (
    <span
      key={item.key}
      className="custom-option"
      data-value={item.key}
      onClick={chooseElementEvent}
    >
      {item.value}
    </span>
  );

  const optionItems = useMemo(() => options.map(optionsBuilder), [options]);
  return (
    <div className="custom-select-wrapper">
      <div className={`custom-select ${openDropDownState}`} onClick={openMenuEvent}>
        <div className="custom-select__trigger">
          <span className="selected-value">{selectedValue}</span>
          <div className="arrow" />
        </div>
        <div className="custom-options">
          {optionItems}
        </div>
      </div>
    </div>
  );
}

export default React.memo(dropDown);

dropDown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  sortMovieHandler: PropTypes.func,
};
