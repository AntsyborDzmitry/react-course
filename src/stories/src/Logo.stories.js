import React from 'react';
import Logo from '../../components/common/logo';

export default {
  title: 'Component/common/Logo',
  component: Logo,
  argTypes: {
    logoLink: {
      name: 'logo link',
      type: { name: 'string', required: true },
      defaultValue: '',
    },
  },
};

const Template = (args) => <Logo {...args} />;

export const defaultLogo = Template.bind({});
defaultLogo.args = {
  logoLink: 'test-site.com',
};
