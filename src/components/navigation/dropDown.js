import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../styles/navigation/dropDown.scss';

export default function dropDown(props) {
  const { options, sortMovieHandler } = props;

  const chooseElementEvent = (e) => {
    const { target } = e;
    if (!target.classList.contains('selected')) {
      const selected = target.parentNode.querySelector('.custom-option.selected');
      if (selected) {
        selected.classList.remove('selected');
      }
      target.classList.add('selected');
      target.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = target.textContent;
      sortMovieHandler(target.dataset.value);
    }
  };

  const openMenuEvent = (e) => { e.currentTarget.classList.toggle('open'); };
  const handleClick = (e) => {
    const select = document.querySelector('.custom-select');
    if (!select.contains(e.target)) {
      select.classList.remove('open');
    }
  };

  const buildSortOption = (item, ind) => {
    const status = ind === 0 ? 'selected' : '';
    return (
      <span
        key={item.key}
        className={`custom-option ${status}`}
        data-value={item.key}
        onClick={chooseElementEvent}
      >
        {item.value}
      </span>
    );
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
          <span>{options[0].value}</span>
          <div className="arrow" />
        </div>
        <div className="custom-options">
          {
            options.map((item, ind) => buildSortOption(item, ind))
          }
        </div>
      </div>
    </div>
  );
}

dropDown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  sortMovieHandler: PropTypes.func,
};
