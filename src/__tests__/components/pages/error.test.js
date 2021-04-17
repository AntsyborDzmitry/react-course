import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Error from '../../../components/pages/error';

describe('Snapshot testing of the error component', () => {
  it('rendered error component should match the snapshot', () => {
    const result = renderer.create(<MemoryRouter><Error /></MemoryRouter>).toJSON();
    expect(result).toMatchSnapshot();
  });
});
