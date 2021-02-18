import React from 'react';
import PropTypes from 'prop-types';

export default function movieList(props) {
  const { movies } = props;

  const getGalleryItem = (item) => (
    <div className="col-6 col-sm-4 col-md-3" key={item.title}>
      <img src={item.link} className="gallery__img" alt={item.title} />
      <div className="movie-info">
        <div className="main-info">
          <span className="title">{item.title}</span>
          <span className="year">{item.year}</span>
        </div>
        <div className="genre">{item.genre}</div>
      </div>
    </div>
  );
  const galleryItems = movies.map((item) => getGalleryItem(item));

  return (
    <div className="movie-list">
      <div className="row">
        {galleryItems}
      </div>
    </div>
  );
}

movieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      year: PropTypes.string,
      genre: PropTypes.string.isRequired,
    }),
  ),
};
