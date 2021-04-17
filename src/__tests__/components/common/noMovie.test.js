import React from 'react';
import renderer from 'react-test-renderer';
import NoMovie from '../../../components/common/noMovie';

describe('Snapshot testing of the NoMovie component', () => {
  it('rendered NoMovie component should match the snapshot', () => {
    const result = renderer.create(<NoMovie />).toJSON();
    expect(result).toMatchSnapshot();
  });
});
