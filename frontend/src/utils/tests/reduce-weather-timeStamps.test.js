import reduceWeatherTimeStamps from '../reduce-weather-timeStamps.js';
import formatTimeStamps from '../format-weather-api-data.js';
import MOCK_FORCAST_WEATHER_API_DATA from '../mock-api-data/forcast-weather-data.js';

describe('reduceWeatherTimeStamps', () => {
  it('reduces timestamp array to from 8x/weekday to 1x/weekday', () => {
    const formatedData = formatTimeStamps(MOCK_FORCAST_WEATHER_API_DATA);
    const data = reduceWeatherTimeStamps(formatedData, 5);

    let dayOfTheWeekArray = [];
    data.forEach((timeStamp) => {
      const dayOfTheWeek = timeStamp.dt.split(',')[0];
      dayOfTheWeekArray.push(dayOfTheWeek);
    });

    // check if all the days of the week are different
    const allDaysDifferent = dayOfTheWeekArray.reduce((prev, cur) => {
      return prev !== cur;
    });

    expect(data).toBeInstanceOf(Array);
    expect(data.length).toBe(5);
    expect(allDaysDifferent).toBe(true);
  });
});
