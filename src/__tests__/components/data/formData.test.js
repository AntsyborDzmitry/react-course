import { waitFor } from '@testing-library/react';
import * as data from '../../../data/formData';

describe('Testing of the formData functions', () => {
  it('Should return initial values for edit form', () => {
    const movie = {
      budget: 0,
      genres: ['adventure', 'comedy'],
      overview: 'test overview',
      poster_path: 'images/image-1.png',
      release_date: '2021-03-11',
      revenue: 0,
      runtime: '100',
      tagline: '',
      title: 'title',
      vote_average: 0,
      vote_count: 0,
    };
    const expected = {
      budget: 0,
      genres: 'adventure',
      id: undefined,
      overview: 'test overview',
      poster_path: 'images/image-1.png',
      release_date: '2021-03-11',
      revenue: 0,
      runtime: '100',
      tagline: '',
      title: 'title',
      vote_average: 0,
      vote_count: 0,
    };
    expect(expected).toStrictEqual(data.getEditFormInitialValues(movie));
  });

  it('Should should call add, remove and setField method', async () => {
    const setFieldValueMock = jest.fn();
    const addMock = jest.fn();
    const eventStubAdd = { target: { classList: { add: addMock }, value: '111' } };
    data.onChangeDate(setFieldValueMock)(eventStubAdd);

    await waitFor(() => {
      expect(setFieldValueMock).toBeCalled();
      expect(addMock).toBeCalled();
    });

    const removeMock = jest.fn();
    const eventStubRemove = { target: { classList: { remove: removeMock }, value: '' } };
    data.onChangeDate(setFieldValueMock)(eventStubRemove);

    await waitFor(() => {
      expect(removeMock).toBeCalled();
    });
  });
});
