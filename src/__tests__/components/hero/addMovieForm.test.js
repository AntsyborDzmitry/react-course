import React from 'react';
import { Provider } from 'react-redux';
import { waitFor } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from '../../../helpers/test/enzyme';
import AddMovieForm from '../../../components/hero/addMovieForm';

describe('AddMovieForm', () => {
  const mockStore = configureMockStore([thunk]);
  it('should update all visible fields on change', async () => {
    const store = mockStore();
    const wrapper = mount(
      <Provider store={store}>
        <AddMovieForm id="add_movie" displayModal={jest.fn()} />
      </Provider>,
    );
    const titleInput = wrapper.find("input[name='title']").simulate('change', {
      target: {
        name: 'title',
        value: 'test title',
      },
    });
    const releaseDateInput = wrapper.find("input[name='release_date']").simulate('change', {
      target: {
        name: 'release_date',
        value: '1991-02-07',
      },
    });
    const imagePathInput = wrapper.find("input[name='poster_path']").simulate('change', {
      target: {
        name: 'poster_path',
        value: 'images/image-1.png',
      },
    });
    const genresInput = wrapper.find("select[name='genres']").simulate('change', {
      target: {
        name: 'genres',
        value: 'comedy',
      },
    });

    const overviewInput = wrapper.find("input[name='overview']").simulate('change', {
      target: {
        name: 'overview',
        value: 'test overview',
      },
    });
    const runtimeInput = wrapper.find("input[name='runtime']").simulate('change', {
      target: {
        name: 'runtime',
        value: '100',
      },
    });

    const voteAverageInputDefault = wrapper.find("input[name='vote_average']");
    const taglineInputDefault = wrapper.find("input[name='tagline']");
    const voteCountInputDefault = wrapper.find("input[name='vote_count']");
    const budgetInputDefault = wrapper.find("input[name='budget']");
    const revenueInputDefault = wrapper.find("input[name='revenue']");

    await waitFor(() => {
      expect(titleInput.instance().value).toEqual('test title');
      expect(releaseDateInput.instance().value).toEqual('1991-02-07');
      expect(imagePathInput.instance().value).toEqual('images/image-1.png');
      expect(genresInput.instance().value).toEqual('comedy');
      expect(overviewInput.instance().value).toEqual('test overview');
      expect(runtimeInput.instance().value).toEqual('100');
      expect(voteAverageInputDefault.instance().value).toEqual('0');
      expect(taglineInputDefault.instance().value).toEqual('');
      expect(voteCountInputDefault.instance().value).toEqual('0');
      expect(budgetInputDefault.instance().value).toEqual('0');
      expect(revenueInputDefault.instance().value).toEqual('0');
    });
  });
});
