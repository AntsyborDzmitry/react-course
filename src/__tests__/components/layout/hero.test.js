import React from 'react';
import renderer from 'react-test-renderer';
import Hero from '../../../components/layout/hero';

describe('Snapshot testing of the hero component', () => {
  it('rendered hero component should match the snapshot', () => {
    const result = renderer.create(<Hero><div>test</div></Hero>).toJSON();
    expect(result).toMatchSnapshot();
  });
});
