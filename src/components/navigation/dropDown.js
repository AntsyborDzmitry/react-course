import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../styles/navigation/dropDown.scss';

export default function dropDown(props) {
  const { options } = props;

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

  const getDropdownItem = (item) => (<span key={item} className="custom-option" data-value={item} onClick={chooseElementEvent}>{item}</span>);

  const items = options.map((item) => getDropdownItem(item));
  const openMenuEvent = (e) => { e.currentTarget.classList.toggle('open'); };
  const handleClick = (e) => {
    const select = document.querySelector('.custom-select');
    if (!select.contains(e.target)) {
      select.classList.remove('open');
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
      <div className="custom-select" onClick={openMenuEvent}>
        <div className="custom-select__trigger">
          <span />
          <div className="arrow" />
        </div>
        <div className="custom-options">
          {items}
        </div>
      </div>
    </div>
  );
}

dropDown.propTypes = {
  options: PropTypes.instanceOf(Array).isRequired,
};
