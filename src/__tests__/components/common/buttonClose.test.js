import React from 'react';
import renderer from 'react-test-renderer';
import ButtonClose from '../../../components/common/buttonClose';

describe('Snapshot testing of the ButtonClose component', () => {
  it('rendered ButtonClose component should match the snapshot', () => {
    const result = renderer.create(
      <ButtonClose clickListener={jest.fn()} />,
    ).toJSON();
    expect(result).toMatchSnapshot();
  });
});
