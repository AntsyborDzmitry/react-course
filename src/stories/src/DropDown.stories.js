import React from 'react';
import { action } from '@storybook/addon-actions';
import DropDown from '../../components/navigation/dropDown';
import { SORT_OPTIONS } from '../../data/constant';

export default {
  title: 'Component/navigation/dropDown',
  component: DropDown,
};

const Template = (args) => <DropDown {...args} />;

export const defaultOptions = Template.bind({});

defaultOptions.args = {
  sortMovieHandler: action('Dropdown is clicked!'),
  options: SORT_OPTIONS,
};
