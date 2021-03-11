import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/navigation/dropDown.scss';

export default function dropDown(props) {
  const { options } = props;
  const [ dropDownMenuState, setDropDownMenuState ] = useState('');

  const chooseElementEvent = (e) => {
    const { target } = e;
    if (!target.classList.contains('selected')) {
      const selected = target.parentNode.querySelector('.custom-option.selected');
      if (selected) {
        selected.classList.remove('selected');
      }
      target.classList.add('selected');
      target.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = target.textContent;
    }
  };

  const openMenuEvent = (e) => { setDropDownMenuState('open'); };
  const handleClick = (e) => {
    if (!e.target.classList.contains('custom-select__trigger')) {
      setDropDownMenuState('');
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
      <div className={`custom-select ${dropDownMenuState}`} onClick={openMenuEvent}>
        <div className="custom-select__trigger">
          <span />
          <div className="arrow" />
        </div>
        <div className="custom-options">
          {
            options.map((item) => (
              <span
                key={item}
                className="custom-option"
                data-value={item}
                onClick={chooseElementEvent}
              >
                {item}
              </span>
            ))
          }
        </div>
      </div>
    </div>
  );
}

dropDown.propTypes = {
  options: PropTypes.instanceOf(Array).isRequired,
};
