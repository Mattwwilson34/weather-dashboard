import formatTimeStamps from '../format-weather-api-data.js';
import MOCK_FORCAST_WEATHER_API_DATA from '../mock-api-data/forcast-weather-data.js';

describe('Weather API data is properly formated', () => {
  it('return formated API data object', () => {
    const data = MOCK_FORCAST_WEATHER_API_DATA;
    const formatedData = formatTimeStamps(data);
    const dayOfTheWeek = formatedData.list[0].dt.split(',')[0];

    expect(dayOfTheWeek).toBe('Saturday');
  });
});
