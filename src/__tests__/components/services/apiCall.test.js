import { waitFor } from '@testing-library/react';
import * as apiCall from '../../../services/apiCall';

describe('test apiCall functions', () => {
  afterEach(() => {
    jest.clearAllMocks();
    global.fetch.mockClear();
  });

  beforeAll(() => {
    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
  });

  afterAll(() => {
    global.fetch.mockClear();
    delete global.fetch;
  });

  it('doGetApiCall should call fetch', async () => {
    apiCall.doGetApiCall('https://test/get/url');
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith('https://test/get/url');
    });
  });

  it('doPostApiCall should call fetch', async () => {
    const expectedUrl = 'https://test/post/url';
    apiCall.doPostApiCall(expectedUrl, { foo: 'bar' });
    const expectedBody = { body: '{"foo":"bar"}', headers: { 'Content-Type': 'application/json;charset=utf-8' }, method: 'POST' };
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(expectedUrl, expectedBody);
    });
  });
  it('doDeleteApiCall should call fetch', async () => {
    const expectedUrl = 'https://test/delete/url';
    apiCall.doDeleteApiCall(expectedUrl);
    const expectedBody = { method: 'DELETE' };
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(expectedUrl, expectedBody);
    });
  });
  it('doPutApiCall should call fetch', async () => {
    const expectedUrl = 'https://test/put/url';
    apiCall.doPutApiCall(expectedUrl, { foo: 'bar' });
    const expectedBody = { body: '{"foo":"bar"}', headers: { 'Content-Type': 'application/json;charset=utf-8' }, method: 'PUT' };
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(expectedUrl, expectedBody);
    });
  });
});
