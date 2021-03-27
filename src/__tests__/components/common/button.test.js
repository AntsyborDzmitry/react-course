import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../../components/common/button';

describe('Snapshot testing of the Button component', () => {
  it('rendered Button component should match the snapshot', () => {
    const result = renderer.create(
      <Button cssClass="add-film" title="+ add movie" clickListener={jest.fn()} />,
    ).toJSON();
    expect(result).toMatchSnapshot();
  });
});
