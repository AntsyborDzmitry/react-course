import React from 'react';
import renderer from 'react-test-renderer';
import CircleMenu from '../../../../components/content/editMovie/circleMenu';

describe('Snapshot testing of the circleMenu component', () => {
  it('rendered circleMenu component should match the snapshot', () => {
    const result = renderer.create(<CircleMenu stateHandler={jest.fn()} />).toJSON();
    expect(result).toMatchSnapshot();
  });
});
