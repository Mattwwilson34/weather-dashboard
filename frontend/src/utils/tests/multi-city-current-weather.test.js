import { jest } from '@jest/globals';

import MOCK_CURRENT_WEATHER_THREE_LOCATIONS from '../mock-api-data/current-weather-three-locations-data.js';

const mockGetMultiCityCurrentWeather = jest.fn(async () => {
  return new Promise((resolve) => {
    resolve(MOCK_CURRENT_WEATHER_THREE_LOCATIONS);
  });
});

describe('Multi-city weather suggestion data', () => {
  it('Returns array of 3 objects with weather data', async () => {
    const data = await mockGetMultiCityCurrentWeather();
    expect(data).toBeInstanceOf(Array);
    expect(data.length).toBe(3);
    expect(data[0]).toBeInstanceOf(Object);
  });
});
