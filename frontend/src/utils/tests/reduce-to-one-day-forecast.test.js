import reduceWeatherTimeStampsToSingleDay from '../reduce-to-one-day-forecast.js';
import MOCK_FORCAST_WEATHER_API_DATA from '../mock-api-data/forcast-weather-data.js';

describe('reduceWeatherTimeStampsToSingleDay', () => {
  it('returns a forecast array for only one day of the week.', () => {
    const data = reduceWeatherTimeStampsToSingleDay(
      MOCK_FORCAST_WEATHER_API_DATA,
      'Monday',
    );

    let dayOfTheWeekArray = [];
    data.forEach((timeStamp) => {
      const dayOfTheWeek = timeStamp.dt.split(',')[0];
      dayOfTheWeekArray.push(dayOfTheWeek);
    });

    const allDaysSame = dayOfTheWeekArray.every((day) => day === 'Monday');

    expect(data).toBeInstanceOf(Array);
    expect(data.length).toBe(8);
    expect(allDaysSame).toBeTruthy();
  });
});
