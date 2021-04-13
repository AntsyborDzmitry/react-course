import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { getEditFormInitialValues, getEditFormValidationSchema, onChangeDate } from '../../../data/formData';
import Button from '../../common/button';
import Modal from '../../common/modal';
import { GENRE_OPTIONS } from '../../../data/constant';
import { editMovie } from '../../../redux/actions/actionCreators';
import { getSerializedFormData } from '../../../utils/utils';

export default function editForm(props) {
  const { id, displayModal } = props;
  const dispatch = useDispatch();
  const selectedMovie = useSelector((state) => state.movieDetails.selectedMovie);

  const onSubmit = (values) => {
    const serializedData = getSerializedFormData(values);
    dispatch(editMovie(serializedData));
    displayModal(false);
  };

  return (
    <Formik
      initialValues={getEditFormInitialValues(selectedMovie)}
      validationSchema={getEditFormValidationSchema(Yup)}
      onSubmit={onSubmit}
    >
      {({ setFieldValue }) => (
        <Form id={`${id}_form`}>
          <Modal title="edit movie" modalId={`${id}_modal`} displayModal={displayModal}>
            <label>
              movie id
              <Field name="id" type="text" placeholder="Movie id here" readOnly />
              <ErrorMessage name="id" component="div" className="invalid-feedback" />
            </label>
            <label>
              title
              <Field name="title" type="text" placeholder="Title here" />
              <ErrorMessage name="title" component="div" className="invalid-feedback" />
            </label>
            <label>
              release date
              <Field name="release_date" type="date" className="has-value" placeholder="Select Date" onChange={onChangeDate(setFieldValue)} />
              <ErrorMessage name="release_date" component="div" className="invalid-feedback" />
            </label>
            <label>
              movie url
              <Field name="poster_path" type="text" placeholder="Movie URL here" />
              <ErrorMessage name="poster_path" component="div" className="invalid-feedback" />
            </label>
            <label>
              genre
              <Field name="genres">
                {({ field }) => (
                  <select {...field}>
                    <option hidden>Select Genre</option>
                    {
                      GENRE_OPTIONS.map(
                        (i) => <option key={i.key} value={i.key}>{i.value}</option>,
                      )
                    }
                  </select>
                )}
              </Field>
            </label>
            <label>
              overview
              <Field name="overview" type="text" placeholder="Overview here" />
              <ErrorMessage name="overview" component="div" className="invalid-feedback" />
            </label>
            <label>
              runtime
              <Field name="runtime" type="text" placeholder="Runtime here" />
              <ErrorMessage name="runtime" component="div" className="invalid-feedback" />
            </label>
            <Field name="vote_average" type="hidden" />
            <Field name="tagline" type="hidden" />
            <Field name="vote_count" type="hidden" />
            <Field name="budget" type="hidden" />
            <Field name="revenue" type="hidden" />

            <div className="bottom wrapper">
              <Button cssClass="bottom reset" type="reset" title="reset" />
              <Button cssClass="bottom save" type="submit" title="save" />
            </div>
          </Modal>
        </Form>
      )}
    </Formik>
  );
}

editForm.propTypes = {
  id: PropTypes.string.isRequired,
  displayModal: PropTypes.bool,
};
