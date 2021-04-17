import React from 'react';
import { action } from "@storybook/addon-actions";
import Button from '../../components/common/button';

export default {
  title: 'Component/common/Button',
  component: Button,
  argTypes: {
    cssClass: {
      name: 'CSS class',
      type: { name: 'string', required: false },
      defaultValue: '',
    },
    type: {
      name: 'Type',
      control: {
        type: 'select',
        options: ['button', 'submit', 'reset'],
      },
      defaultValue: 'button',
    },
    title: {
      name: 'Title',
      type: { name: 'string', required: false },
      defaultValue: 'Title',
    },
  }
};

const Template = (args) => <Button {...args} />;

export const simpleButton = Template.bind({});
simpleButton.args = {
  cssClass: 'bottom confirm',
  clickListener: action("Button is clicked!")
};

export const submitButton = Template.bind({});
submitButton.args = {
  type: 'submit',
  title: 'submit',
  cssClass: 'bottom submit',
  clickListener: action("Submit button is clicked!")
};

export const resetButton = Template.bind({});
resetButton.args = {
  type: 'reset',
  title: 'reset',
  cssClass: 'bottom reset',
  clickListener: action("Reset button is clicked!")
};

export const AddFilmButton = Template.bind({});
AddFilmButton.args = {
  title: 'ADD Film',
  cssClass: 'add-film',
  clickListener: action("ADD Film button is clicked!")
};


export const SearchButton = Template.bind({});
SearchButton.args = {
  title: 'Search',
  cssClass: 'search-button',
  clickListener: action("Search button is clicked!")
};
