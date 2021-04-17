import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from '../../../helpers/test/enzyme';
import AddMovie from '../../../components/hero/addMovie';
import AddMovieForm from '../../../components/hero/addMovieForm';

const mockStore = configureMockStore([thunk]);

describe('Test of the addMovie component', () => {
  it('should render the AddMovieForm component only after click by button', () => {
    const store = mockStore();
    const wrapper = mount(
      <Provider store={store}>
        <AddMovie />
      </Provider>,
    );

    expect(wrapper.find(AddMovieForm).length).toEqual(0);

    const submitButton = wrapper.find('.add-film');
    submitButton.simulate('click');

    expect(wrapper.find(AddMovieForm).length).toEqual(1);
  });
});
