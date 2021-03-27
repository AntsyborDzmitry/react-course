import React from 'react';
import renderer from 'react-test-renderer';
import Logo from '../../../components/common/logo';

describe('Snapshot testing of the Logo component', () => {
  it('rendered Logo component should match the snapshot', () => {
    const result = renderer.create(<Logo logoLink="my-test-site.com" />).toJSON();
    expect(result).toMatchSnapshot();
  });
});
