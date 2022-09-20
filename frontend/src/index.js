/* eslint-disable no-unused-vars */
import getWeatherDataFromZip from './modules/get-weather-data-from-zip.js';
import moment from 'moment';
import css from './styles/style.css';
/* eslint-disable no-unused-vars */

const SEED_ZIP_CODE = 27703;

const app = {
  async init() {
    const weatherData = await getWeatherDataFromZip(SEED_ZIP_CODE);
    console.log(weatherData);
  },
};

app.init();
