export const getEditFormInitialValues = (selectedMovie) => (
  {
    id: selectedMovie.id,
    title: selectedMovie.title,
    release_date: selectedMovie.release_date,
    poster_path: selectedMovie.poster_path,
    genres: selectedMovie.genres[0]?.toLowerCase() || '',
    overview: selectedMovie.overview,
    runtime: selectedMovie.runtime || 0,
    vote_average: selectedMovie.vote_average,
    tagline: selectedMovie.tagline,
    vote_count: selectedMovie.vote_count,
    budget: selectedMovie.budget,
    revenue: selectedMovie.revenue,
  }
);

export const getEditFormValidationSchema = (Yup) => Yup.object({
  id: Yup.string().required('Required'),
  title: Yup.string().required('Required'),
  overview: Yup.string().required('Required'),
  poster_path: Yup.string().matches(/((https?):\/\/)/, 'Link should begin from https or http').required('Required'),
  runtime: Yup.number()
    .typeError("That doesn't look like a number")
    .integer("A runtime can't include a decimal point")
    .required('Required'),
});

export const addFormInitialValues = {
  title: '',
  release_date: '',
  poster_path: '',
  genres: '',
  overview: '',
  runtime: '',
  vote_average: 0,
  tagline: '',
  vote_count: 0,
  budget: 0,
  revenue: 0,
};

export const getAddFormValidationSchema = (Yup) => Yup.object({
  title: Yup.string().required('Required'),
  overview: Yup.string().required('Required'),
  poster_path: Yup.string().matches(/((https?):\/\/)/, 'Link should begin from https or http').required('Required'),
  runtime: Yup.number()
    .typeError("That doesn't look like a number")
    .integer("A runtime can't include a decimal point")
    .required('Required'),
});

export const onChangeDate = (setFieldValue) => (e) => {
  const dateValue = e.currentTarget.value;
  setFieldValue('release_date', dateValue);
  if (dateValue) {
    e.target.classList.add('has-value');
    return;
  }
  e.target.classList.remove('has-value');
};
