import getWeatherData from './modules/get-weather-data.js';
import moment from 'moment';
import css from './styles/style.css';

const body = document.querySelector('body');

// Added to prevent API call on app refresh
const weatherButton = document.querySelector('button');
weatherButton.addEventListener('click', async () => {
  const weatherData = await getWeatherData();
  const weatherDataList = weatherData.data.list;
  console.log(weatherDataList);

  weatherDataList.forEach((dataPoint) => {
    const weatherInfo = document.createElement('div');
    const time = moment
      .unix(dataPoint.dt)
      .utc()
      .format('dddd, MMMM Do YYYY, h:mm:ss a');
    weatherInfo.textContent = time;
    body.append(weatherInfo);
  });
});
