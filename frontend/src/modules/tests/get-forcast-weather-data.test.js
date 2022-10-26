import { jest } from '@jest/globals';

import MOCK_FORCAST_WEATHER_API_DATA from '../../utils/mock-api-data/forcast-weather-data.js';

const mockGetForcastWeatherData = jest.fn(async () => {
  return new Promise((resolve) => {
    resolve(MOCK_FORCAST_WEATHER_API_DATA);
  });
});

describe('get current weather data', () => {
  it('returns an array of objects that contains weather data for given lat/lon', async () => {
    const data = await mockGetForcastWeatherData();
    expect(data).toBeInstanceOf(Object);
    expect(data.list).toBeInstanceOf(Array);
    expect(data.list.length).toBe(40);
    expect(data.list[0].weather).toBeInstanceOf(Array);
  });
});
