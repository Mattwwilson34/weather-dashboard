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
console.log(weatherCards);

const app = {
  async init() {
    const weatherData = await getWeatherDataFromZip(SEED_ZIP_CODE);
    const formatedWeatherData = formatTimeStamps(weatherData.data);
    console.log(formatedWeatherData);
    const reducedWeatherData = reduceWeatherTimeStamps(formatedWeatherData, 5);
    console.log(reducedWeatherData);
  },
};

setTimeout(() => {
  app.init();
}, 1000);
