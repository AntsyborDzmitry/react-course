import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/content/movieItem.scss';

export default function movieItem(props) {
  const {
    title,
    link,
    year,
    genre,
    children,
  } = props;

  return (
    <div className="col-6 col-sm-4 col-md-3">
      {children}
      <img src={link} className="movie__img" alt={title} />
      <div className="movie-info">
        <div className="main-info">
          <span className="title">{title}</span>
          <span className="year">{year}</span>
        </div>
        <div className="genre">{genre}</div>
      </div>
    </div>
  );
}

movieItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  genre: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
