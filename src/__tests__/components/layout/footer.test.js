import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../../../components/layout/footer';

describe('Snapshot testing of the footer component', () => {
  it('rendered footer component should match the snapshot', () => {
    const result = renderer.create(<Footer><div>test</div></Footer>).toJSON();
    expect(result).toMatchSnapshot();
  });
});
