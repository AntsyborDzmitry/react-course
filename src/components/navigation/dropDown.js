import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/navigation/dropDown.scss';

export default function dropDown(props) {
  const { options } = props;
  const [openDropDownState, setOpenDropDownState] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  const generateOptionsState = (items, target) => items.map(
    (item) => {
      let selected = '';
      if (item === target?.textContent) {
        selected = 'selected';
      }
      return (
        <span key={item} className={`custom-option ${selected}`} data-value={item} onClick={chooseElementEvent}>
          {item}
        </span>
      );
    },
  );

  const chooseElementEvent = (e) => {
    const { target } = e;
    const newOptionsState = generateOptionsState(options, target);
    setOpenDropDownState('');
    setDropDownOptionsState(newOptionsState);
    setSelectedValue(target.textContent);
  };

  const [dropDownOptionsState, setDropDownOptionsState] = useState(generateOptionsState(options));
  const openMenuEvent = () => { setOpenDropDownState('open'); };
  const handleClick = (e) => {
    if (!e.target.classList.contains('custom-select__trigger')
      && !e.target.classList.contains('selected-value')) {
      setOpenDropDownState('');
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="custom-select-wrapper">
      <div className={`custom-select ${openDropDownState}`} onClick={openMenuEvent}>
        <div className="custom-select__trigger">
          <span className="selected-value">{selectedValue}</span>
          <div className="arrow" />
        </div>
        <div className="custom-options">
          {dropDownOptionsState}
        </div>
      </div>
    </div>
  );
}

dropDown.propTypes = {
  options: PropTypes.instanceOf(Array).isRequired,
};
