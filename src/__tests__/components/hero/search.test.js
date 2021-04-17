import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { waitFor } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { mount } from '../../../helpers/test/enzyme';
import Search from '../../../components/hero/search';

describe('Snapshot testing of the search component', () => {
  it('rendered search component should match the snapshot', () => {
    const result = renderer.create(<MemoryRouter><Search /></MemoryRouter>).toJSON();
    expect(result).toMatchSnapshot();
  });

  it('should change search input value and redirect link', async () => {
    const wrapper = mount(<MemoryRouter><Search /></MemoryRouter>);
    expect(wrapper.find(Search).length).toEqual(1);

    const searchInput = wrapper.find("input[type='text']");
    searchInput.simulate('input', {
      target: {
        type: 'text',
        value: 'test value',
      },
    });
    searchInput.simulate('keypress', { key: 'Enter' });
    await waitFor(() => {
      expect(searchInput.instance().value).toEqual('test value');
      expect(wrapper.find('a').props().href).toEqual('/search query?search=test value');
    });
  });
});
