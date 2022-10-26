import { jest } from '@jest/globals';

import MOCK_FORCAST_WEATHER_API_DATA from '../../utils/mock-api-data/forcast-weather-data.js';

import MOCK_ZIP_CODE_API_DATA from '../../utils/mock-api-data/zip-code-data.js';

const mockGetZipcodeData = jest.fn(async () => {
  return new Promise((resolve) => {
    resolve(MOCK_ZIP_CODE_API_DATA);
  });
});

const mockGetForcastWeatherDataFromZip = jest.fn(async () => {
  return new Promise((resolve) => {
    resolve(MOCK_FORCAST_WEATHER_API_DATA);
  });
});

describe('get current weather data', () => {
  it('returns an array of objects that contains weather data for given a zipcode', async () => {
    const zipcodeData = await mockGetZipcodeData();
    if (
      'latitude' in zipcodeData.location[0] &&
      'longitude' in zipcodeData.location[0]
    ) {
      const data = await mockGetForcastWeatherDataFromZip();
      expect(data).toBeInstanceOf(Object);
      expect(data.list).toBeInstanceOf(Array);
      expect(data.list.length).toBe(40);
      expect(data.list[0].weather).toBeInstanceOf(Array);
    } else {
      throw new Error('zipcode API call failed to return lat/lon values');
    }
  });
});
