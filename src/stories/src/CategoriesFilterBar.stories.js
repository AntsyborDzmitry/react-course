import React from 'react';
import { Provider } from 'react-redux';
import CategoriesFilterBar from '../../components/navigation/categoriesFilterBar';
import { CATEGORIES } from '../../data/constant';
import configureStore from '../../redux/configureStore';

export default {
  title: 'Component/navigation/categoriesFilterBar',
  component: CategoriesFilterBar,
};
const store = configureStore({});
const Template = (args) => (
  <Provider store={store}>
    <CategoriesFilterBar {...args} />
  </Provider>
);

export const defaultFilterOptions = Template.bind({});

defaultFilterOptions.args = {
  categories: CATEGORIES,
};
