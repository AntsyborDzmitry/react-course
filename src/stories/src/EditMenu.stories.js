import React from 'react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';
import EditMenu from '../../components/content/editMovie/editMenu';
import configureStore from '../../redux/configureStore';

export default {
  title: 'Component/content/editMovie/EditMenu',
  component: EditMenu,
  argTypes: {
    editMenuCssClass: {
      name: 'CSS class',
      type: { name: 'string', required: false },
      defaultValue: '',
    },
  },
};

const store = configureStore({});
const Template = (args) => (
  <Provider store={store}>
    <EditMenu {...args} />
  </Provider>
);

export const menu = Template.bind({});
menu.args = {
  editMenuCssClass: '',
  setVisibleEditForm: action('Edit is clicked!'),
  setVisibleDeleteForm: action('Delete is clicked!'),
};
