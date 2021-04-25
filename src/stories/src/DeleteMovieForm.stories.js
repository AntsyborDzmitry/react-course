import React from 'react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';
import DeleteForm from '../../components/content/editMovie/deleteForm';
import configureStore from '../../redux/configureStore';

export default {
  title: 'Component/content/editMovie/DeleteForm',
  component: DeleteForm,
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
    <DeleteForm {...args} />
  </Provider>
);

export const form = Template.bind({});
form.args = {
  id: 'delete_movie',
  displayModal: action('Button is clicked!'),
};
