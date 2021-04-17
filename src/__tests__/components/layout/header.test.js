import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../../../components/layout/header';

describe('Snapshot testing of the header component', () => {
  it('rendered header component should match the snapshot', () => {
    const result = renderer.create(<Header><div>test</div></Header>).toJSON();
    expect(result).toMatchSnapshot();
  });
});
