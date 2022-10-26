import { jest } from '@jest/globals';

import MOCK_CURRENT_WEATHER_API_DATA from '../../utils/mock-api-data/current-weather-data.js';

const mockGetCurrentWeatherData = jest.fn(async () => {
  return new Promise((resolve) => {
    resolve(MOCK_CURRENT_WEATHER_API_DATA);
  });
});

describe('get current weather data', () => {
  it('returns an object that contains weather data for given lat/lon', async () => {
    const data = await mockGetCurrentWeatherData();
    expect(data).toBeInstanceOf(Object);
    expect(data.weather).toBeInstanceOf(Array);
  });
});
