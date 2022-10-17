/* eslint-disable no-unused-vars */
import getWeatherDataFromZip from './modules/get-weather-data-from-zip.js';
import formatTimeStamps from './utils/format-weather-api-data.js';
import reduceWeatherTimeStamps from './utils/reduce-weather-timeStamps.js';
import getRandomZipCode from './utils/random-zipcode-generator.js';
import getMultiCityCurrentWeather from './utils/multi-city-current-weather.js';
import reduceWeatherTimeStampsToSingleDay from './utils/reduce-to-one-day-forecast.js';
import delay from './utils/delay.js';

// MOCK data import to reduce API calls
import MOCK_FORCAST_ZIPCODE_COMBINED_API_DATA from './utils/mock-api-data/forcast-zipcode-combined-data.js';
import MOCK_CURRENT_WEATHER_THREE_LOCATIONS from './utils/mock-api-data/current-weather-three-locations-data.js';

import css from './styles/style.css';
/* eslint-disable no-unused-vars */

const SEED_ZIP_CODE = 27703;

(async () => {
  await delay(2000);
  document.querySelector('.loading-header').classList.add('hidden');
  document.querySelector('.loading').classList.add('hidden');
  document.querySelector('main').classList.remove('hidden');
})();

const app = {
  async init() {
    //
    // Fetch API data
    //! currently using mock API data
    await this.getData(SEED_ZIP_CODE);

    //! currently using mock API data
    // this.multiCityData = await getMultiCityCurrentWeather(3);
    this.multiCityData = MOCK_CURRENT_WEATHER_THREE_LOCATIONS;

    this.storeDomElements();
    this.populateData(this.reducedWeatherData);
    this.setActiveWeatherCard();
    this.updateWeatherDetailsDisplay();
    this.populateCityWeatherSuggestions(this.multiCityData);
    this.bindEventListeners();
  },

  bindEventListeners() {
    this.searchBtn.addEventListener('click', this.search.bind(this));
    this.randomBtn.addEventListener('click', this.randomWeather.bind(this));
    this.weatherCards.forEach((card) => {
      card.addEventListener('click', this.focusWeatherCard.bind(this));
    });
  },

  focusWeatherCard(event) {
    let card = event.target;

    // if child element clicked on grab parent elem
    if (
      card.parentElement.classList.contains('weather-card-expandable-stats')
    ) {
      card = event.target.parentElement.parentElement;
    } else if (!card.classList.contains('weather-card')) {
      card = event.target.parentElement;
    }

    // if card already in focus
    if (card.classList.contains('weather-card-focus')) {
      return;
    }
    // remove focus from all cards and then add focus
    else {
      this.weatherCards.forEach((card) => {
        card.classList.remove('weather-card-focus');
        card.classList.remove('no-hover');
      });

      this.expandableStats.forEach((stat) => {
        stat.classList.add('hidden');
      });

      // Get all expandable stats dom elem
      const expandableStats = [];
      Array.from(card.children).forEach((child) => {
        if (!child.classList.contains('weather-card-expandable-stats')) return;
        expandableStats.push(child);
      });

      // toggle off hidden class
      expandableStats.forEach((stat) => {
        stat.classList.toggle('hidden');
      });

      // ?

      card.classList.toggle('weather-card-focus');
      card.classList.toggle('no-hover');
      this.setActiveWeatherCard();
      this.updateWeatherDetailsDisplay();
    }
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

  setActiveWeatherCard() {
    this.weatherCards.forEach((card) => {
      if (!card.classList.contains('weather-card-focus')) return;

      this.activeWeatherCard = card;
      this.activeDayOfWeek = card.children[0].textContent;
    });
  },

  storeDomElements() {
    // DOM Elem
    // weather card DOM elem
    this.location = document.querySelector('.location');
    this.locationInput = document.querySelector('.location-input > input');
    this.searchBtn = document.querySelector('.search-btn');
    this.randomBtn = document.querySelector('.random-btn');
    this.weatherCards = document.querySelectorAll('.weather-card');
    this.dayOfWeek = document.querySelectorAll('.weather-card > h3');
    this.weatherIcons = document.querySelectorAll('.weather-card-icon');
    this.weatherDataDescriptions = document.querySelectorAll(
      '.weather-description',
    );
    this.weatherDataDivs = document.querySelectorAll('.weather-data');
    this.expandableStats = document.querySelectorAll(
      '.weather-card-expandable-stats',
    );
    this.humidity = document.querySelectorAll('.humidity-span');
    this.wind = document.querySelectorAll('.wind-span');
    this.windDirection = document.querySelectorAll('.wind-direction-span');
    this.windGust = document.querySelectorAll('.wind-gust-span');

    this.iconBaseURL = 'http://openweathermap.org/img/wn/';

    // weather details DOM elem
    this.weatherCardAddDetails = document.querySelector(
      '.weather-card-add-details',
    );
    this.weatherCardAddDetailsHeaderDayOfWeek = document.querySelector(
      '.weather-deatils-header-day-of-week',
    );

    // other-city suggestion DOM elem
    this.otherCities = document.querySelectorAll('.other-cities');
    this.otherCityStates = document.querySelectorAll('.other-city-state');
    this.otherCityIcons = document.querySelectorAll('.other-city-icon');
    this.otherCityTemps = document.querySelectorAll('.other-city-temp');
    this.otherCityCities = document.querySelectorAll('.other-city-city');
    this.otherCityDescriptions = document.querySelectorAll(
      '.other-city-description',
    );
  },

  async getData(zipCode) {
    // Fetch API data
    this.weatherData = await getWeatherDataFromZip(zipCode);
    //! get mock api data
    // this.weatherData = MOCK_FORCAST_ZIPCODE_COMBINED_API_DATA;

    console.log(this.weatherData);
    // Use moment to format timeStamp from unix
    const formatedWeatherData = formatTimeStamps(
      this.weatherData.forcastWeatherData.data,
    );
    // Reduce number of time stamps to 1/day
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

      this.humidity[i].textContent = reducedWeatherData[i].main.humidity;

      this.wind[i].textContent = `${Math.round(
        reducedWeatherData[i].wind.speed,
      )} mph`;

      this.windDirection[i].textContent = this.cardinalDirectionFromDegrees(
        reducedWeatherData[i].wind.deg,
      );
      this.windGust[i].textContent = `up to ${Math.round(
        reducedWeatherData[i].wind.gust,
      )} mph`;
    });
  },

  populateCityWeatherSuggestions(multiCityData) {
    console.log(multiCityData);
    this.otherCities.forEach((city, i) => {
      this.otherCityStates[i].textContent = multiCityData[i].zipcodeData.state;
      this.otherCityCities[i].textContent = multiCityData[i].zipcodeData.city;

      // set temps
      this.otherCityTemps[i].textContent = Math.round(
        multiCityData[i].main.temp,
      );

      // set description
      this.otherCityDescriptions[i].textContent =
        multiCityData[i].weather[0].description;

      // set icon
      const iconCode = multiCityData[i].weather[0].icon;
      this.otherCityIcons[i].src = `${this.iconBaseURL}${iconCode}@2x.png`;
    });
  },

  updateWeatherDetailsDisplay() {
    const singleDayForcast = reduceWeatherTimeStampsToSingleDay(
      this.weatherData.forcastWeatherData.data,
      this.activeDayOfWeek,
    );

    this.weatherCardAddDetailsHeaderDayOfWeek.textContent =
      this.activeDayOfWeek;

    let barContainerArray = [];

    for (let index = 0; index < singleDayForcast.length; index++) {
      //
      // Bar containers
      const tempBarContainer = document.createElement('div');
      tempBarContainer.classList.add('temperature-bar-container');

      // Bar headers time
      const tempBarHeaderTime = document.createElement('h3');
      tempBarHeaderTime.classList.add('temp-bar-header-time');
      tempBarHeaderTime.textContent = `${
        singleDayForcast[index].dt.split(',')[2].split(':')[0]
      }`;

      // AM/PM
      const amPm = document.createElement('div');
      amPm.classList.add('tempBarAmPm');
      amPm.textContent = `${singleDayForcast[index].dt
        .split(',')[2]
        .split(':')[2]
        .split(' ')[1]
        .toUpperCase()}`;

      // Bar headers temp
      const tempBarHeader = document.createElement('h4');
      tempBarHeader.classList.add('temp-bar-header');
      tempBarHeader.textContent = `${Math.round(
        singleDayForcast[index].main.temp,
      )}`;

      // Bars
      const tempBar = document.createElement('div');
      tempBar.classList.add('temperature-bar');
      ``;
      tempBar.style.height = `${
        (singleDayForcast[index].main.temp / 150) * 100
      }%`;

      // Append
      tempBarContainer.append(tempBarHeaderTime, amPm, tempBarHeader, tempBar);
      barContainerArray.push(tempBarContainer);
    }

    this.weatherCardAddDetails.replaceChildren(...barContainerArray);
  },

  cardinalDirectionFromDegrees(degrees) {
    if (degrees === 0) return 'N';
    if (degrees > 0 && degrees < 90) return 'NE';
    if (degrees === 90) return 'E';
    if (degrees > 90 && degrees < 180) return 'SE';
    if (degrees === 180) return 'S';
    if (degrees > 180 && degrees < 270) return 'SW';
    if (degrees === 270) return 'W';
    if (degrees > 270 && degrees < 360) return 'NW';
  },
};

setTimeout(() => {
  app.init();
}, 1000);
