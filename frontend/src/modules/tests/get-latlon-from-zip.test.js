import { jest } from '@jest/globals';

import MOCK_ZIP_CODE_API_DATA from '../../utils/mock-api-data/zip-code-data.js';

const mockGetZipcodeData = jest.fn(async () => {
  return new Promise((resolve) => {
    resolve(MOCK_ZIP_CODE_API_DATA);
  });
});

describe('get current weather data', () => {
  it('returns an object that contains lat/lon data for given zipcode', async () => {
    const data = await mockGetZipcodeData();
    expect(data).toBeInstanceOf(Object);
    expect(data.location).toBeInstanceOf(Array);
  });
});
