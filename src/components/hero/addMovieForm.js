import React from 'react';
import { connect } from 'react-redux';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { addFormInitialValues, getAddFormValidationSchema, onChangeDate } from '../../data/formData';
import Button from '../common/button';
import Modal from '../common/modal';
import { addMovie } from '../../redux/actions/actionCreators';
import { GENRE_OPTIONS } from '../../data/constant';
import { getSerializedFormData } from '../../utils/utils';

function addMovieForm(props) {
  const { id, addMovieHandler, displayModal } = props;

  const onSubmit = (values) => {
    const serializedData = getSerializedFormData(values);
    addMovieHandler(serializedData);
    displayModal(false);
  };

  return (
    <Formik
      initialValues={addFormInitialValues}
      validationSchema={getAddFormValidationSchema(Yup)}
      onSubmit={onSubmit}
    >
      {({ setFieldValue }) => (
        <Form id={`${id}_form`}>
          <Modal title="add movie" modalId={`${id}_modal`} displayModal={displayModal}>
            <label>
              title
              <Field name="title" type="text" placeholder="Title here" />
              <ErrorMessage name="title" component="div" className="invalid-feedback" />
            </label>
            <label>
              release date
              <Field name="release_date" type="date" placeholder="Select Date" onChange={onChangeDate(setFieldValue)} />
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
              <Button cssClass="bottom submit" type="submit" title="submit" />
            </div>
          </Modal>
        </Form>
      )}
    </Formik>
  );
}

addMovieForm.propTypes = {
  id: PropTypes.string.isRequired,
  addMovieHandler: PropTypes.func,
};

const mapDispatchToProps = { addMovieHandler: addMovie };

export default connect(null, mapDispatchToProps)(addMovieForm);
