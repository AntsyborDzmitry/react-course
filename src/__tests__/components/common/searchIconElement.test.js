import React from 'react';
import renderer from 'react-test-renderer';
import SearchIconElement from '../../../components/common/searchIconElement';

describe('Snapshot testing of the SearchIconElement component', () => {
  it('rendered SearchIconElement component should match the snapshot', () => {
    const result = renderer.create(
      <SearchIconElement clickListener={jest.fn()} />,
    ).toJSON();
    expect(result).toMatchSnapshot();
  });
});
