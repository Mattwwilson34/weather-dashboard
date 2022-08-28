/* eslint-disable no-unused-vars */
import getCurrentWeatherData from './modules/get-current-weather-data.js';
import moment from 'moment';
import css from './styles/style.css';
/* eslint-disable no-unused-vars */

// Store html elements
const weatherImg = document.querySelector('.weather-card > img');
const temperatureH1 = document.querySelector('.temperature');
const locationH1 = document.querySelector('.location');
const weatherDetailDivs = document.querySelectorAll('.weather-detail-data');

// Store unicode symbols
const unicodeDegree = '\u{00B0}';
const unicodePercent = `\u{0025}`;
const hectopascal = `hPa`;
const kilometer = `km`;

// Weather image base url
const weatherImgURL = `http://openweathermap.org/img/wn/`;

// Added to prevent API call on app refresh
const weatherButton = document.querySelector('button');
weatherButton.addEventListener('click', async () => {
  //
  // Get weather Data
  const weatherAPIResponse = await getCurrentWeatherData();
  const weatherData = weatherAPIResponse.data;
  console.log(weatherData);

  // Destructure weather data
  const {
    main: { temp, pressure, humidity },
    wind: { speed },
    name,
  } = weatherData;

  // Set weather Image
  weatherImg.src = `${weatherImgURL}${weatherData.weather[0].icon}@2x.png`;

  // Set temp and location
  temperatureH1.textContent = `${Math.round(temp)}${unicodeDegree}`;
  locationH1.textContent = name;

  // Set weather details
  weatherDetailDivs[0].textContent = `${speed}${kilometer}`;
  weatherDetailDivs[1].textContent = `${pressure}${hectopascal}`;
  weatherDetailDivs[2].textContent = `${humidity}${unicodePercent}`;
});
