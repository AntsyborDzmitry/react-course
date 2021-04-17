import React from 'react';
import renderer from 'react-test-renderer';
import Content from '../../../components/layout/content';

describe('Snapshot testing of the content component', () => {
  it('rendered header content should match the snapshot', () => {
    const result = renderer.create(<Content><div>test</div></Content>).toJSON();
    expect(result).toMatchSnapshot();
  });
});
