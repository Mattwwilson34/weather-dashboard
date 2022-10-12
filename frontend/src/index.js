/* eslint-disable no-unused-vars */
import getWeatherDataFromZip from './modules/get-weather-data-from-zip.js';
import formatTimeStamps from './utils/format-weather-api-data.js';
import reduceWeatherTimeStamps from './utils/reduce-weather-timeStamps.js';
import moment from 'moment';
import css from './styles/style.css';
/* eslint-disable no-unused-vars */

const SEED_ZIP_CODE = 27703;

// DOM Elem
const weatherCards = document.querySelectorAll('.weather-card');
const dayOfWeek = document.querySelectorAll('.weather-card > h3');
const weatherIcons = document.querySelectorAll('.weather-card > img');
const weatherDataDescriptions = document.querySelectorAll(
  '.weather-description',
);
const weatherDataDivs = document.querySelectorAll('.weather-data');
const weatherTimeStamps = document.querySelectorAll('.time-stamp');

const iconBaseURL = 'http://openweathermap.org/img/wn/';

const app = {
  async init() {
    const weatherData = await getWeatherDataFromZip(SEED_ZIP_CODE);
    const formatedWeatherData = formatTimeStamps(weatherData.data);
    const reducedWeatherData = reduceWeatherTimeStamps(formatedWeatherData, 5);
    console.log(formatedWeatherData);
    console.log(reducedWeatherData);

    weatherCards.forEach((card, i) => {
      //
      dayOfWeek[i].textContent = reducedWeatherData[i].dt.split(',')[0];

      const iconCode = reducedWeatherData[i].weather[0].icon;
      weatherIcons[i].src = `${iconBaseURL}${iconCode}@2x.png`;

      weatherDataDivs[i].textContent = Math.round(
        reducedWeatherData[i].main.temp,
      );

      weatherDataDescriptions[i].textContent =
        reducedWeatherData[i].weather[0].description;

      weatherTimeStamps[i].textContent = reducedWeatherData[i].dt.split(',')[2];
    });
  },
};

setTimeout(() => {
  app.init();
}, 1000);
