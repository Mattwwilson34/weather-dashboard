/* eslint-disable no-unused-vars */
import getWeatherDataFromZip from './modules/get-weather-data-from-zip.js';
import formatTimeStamps from './utils/format-weather-api-data.js';
import reduceWeatherTimeStamps from './utils/reduce-weather-timeStamps.js';
import getRandomZipCode from './utils/random-zipcode-generator.js';
import css from './styles/style.css';
/* eslint-disable no-unused-vars */

const SEED_ZIP_CODE = 27703;

const app = {
  async init() {
    //
    // Fetch API data
    await this.getData(SEED_ZIP_CODE);
    this.storeDomElements();
    this.populateData(this.reducedWeatherData);
    this.bindEventListeners();
  },

  bindEventListeners() {
    this.searchBtn.addEventListener('click', this.search.bind(this));
    this.randomBtn.addEventListener('click', this.randomWeather.bind(this));
  },

  async search() {
    //
    // store zipcode input value
    const zipCode = this.locationInput.value;

    // handle incorrect user input that would break API call
    if (isNaN(parseInt(zipCode)) || zipCode.length !== 5) {
      alert('Please enter a valid 5 digit zip code (ex: 19054).');
      this.locationInput.value = '';
      return;
    }

    await this.getData(zipCode);
    this.populateData(this.reducedWeatherData);
  },

  async randomWeather() {
    const zipCode = getRandomZipCode();
    await this.getData(zipCode);
    this.populateData(this.reducedWeatherData);
  },

  storeDomElements() {
    // DOM Elem
    this.location = document.querySelector('.location');
    this.locationInput = document.querySelector('.location-input > input');
    this.searchBtn = document.querySelector('.search-btn');
    this.randomBtn = document.querySelector('.random-btn');
    this.weatherCards = document.querySelectorAll('.weather-card');
    this.dayOfWeek = document.querySelectorAll('.weather-card > h3');
    this.weatherIcons = document.querySelectorAll('.weather-card > img');
    this.weatherDataDescriptions = document.querySelectorAll(
      '.weather-description',
    );
    this.weatherDataDivs = document.querySelectorAll('.weather-data');
    this.weatherTimeStamps = document.querySelectorAll('.time-stamp');

    this.iconBaseURL = 'http://openweathermap.org/img/wn/';
  },

  async getData(zipCode) {
    // Fetch API data
    this.weatherData = await getWeatherDataFromZip(zipCode);

    console.log(this.weatherData);
    const formatedWeatherData = formatTimeStamps(
      this.weatherData.forcastWeatherData.data,
    );
    this.reducedWeatherData = reduceWeatherTimeStamps(formatedWeatherData, 5);
    console.log(formatedWeatherData);
    console.log(this.reducedWeatherData);
  },

  populateData(reducedWeatherData) {
    //
    // Update location
    const { city, country, state } =
      this.weatherData.zipCodeData.data.location[0];
    this.location.textContent = `${city} ${state}, ${country}`;

    // Fill weather cards with API data
    this.weatherCards.forEach((card, i) => {
      //
      this.dayOfWeek[i].textContent = reducedWeatherData[i].dt.split(',')[0];

      const iconCode = reducedWeatherData[i].weather[0].icon;
      this.weatherIcons[i].src = `${this.iconBaseURL}${iconCode}@2x.png`;

      this.weatherDataDivs[i].textContent = Math.round(
        reducedWeatherData[i].main.temp,
      );

      this.weatherDataDescriptions[i].textContent =
        reducedWeatherData[i].weather[0].description;

      // format time
      const formatedTime = reducedWeatherData[i].dt.split(',')[2].split(':');

      this.weatherTimeStamps[
        i
      ].textContent = `${formatedTime[0]}:${formatedTime[2]}`;
    });
  },
};

setTimeout(() => {
  app.init();
}, 1000);
