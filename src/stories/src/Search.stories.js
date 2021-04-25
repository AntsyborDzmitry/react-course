import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Search from '../../components/hero/search';

export default {
  title: 'Component/hero/search',
  component: Search,
};

const context = {};
const Template = (args) => (
  <BrowserRouter context={context}>
    <Search {...args} />
  </BrowserRouter>
);

export const defaultSearch = Template.bind({});
defaultSearch.args = {};
