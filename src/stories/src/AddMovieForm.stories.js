import React from 'react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';
import AddMovieForm from '../../components/hero/addMovieForm';
import configureStore from '../../redux/configureStore';

export default {
  title: 'Component/hero/addMovieForm',
  component: AddMovieForm,
  argTypes: {
    id: {
      name: 'Form Id',
      type: { name: 'string', required: true },
      defaultValue: '',
    },
  },
};

const store = configureStore({});
const Template = (args) => (
  <Provider store={store}>
    <AddMovieForm {...args} />
  </Provider>
);

export const form = Template.bind({});
form.args = {
  id: 'add_movie',
  displayModal: action('Close clicked'),
};
