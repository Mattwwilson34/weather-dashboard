/* eslint-disable no-unused-vars */
import getCurrentWeatherData from './modules/get-current-weather-data.js';
import getLatLonFromZip from './modules/get-latlon-from-zip.js';
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
const weatherButton = document.getElementById('get-weather-btn');
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

// Conver Zip
const zipcodeButton = document.getElementById('convert-zip-code-btn');
zipcodeButton.addEventListener('click', async () => {
  const latLonData = await getLatLonFromZip();
  console.log(latLonData.data.location[0]);
});

// Grab zipcode form data
const zipCodeInput = document.getElementById('zip-code-input');
const zipCodeSubmitBtn = document.getElementById('zip-code-submit-btn');
zipCodeSubmitBtn.addEventListener('click', async () => {
  //
  const zipCode = zipCodeInput.value;
  const zipcodeLength = zipCode.length;

  // Validata input is a properly formatted zipcode
  if (Number.isNaN(parseInt(zipCode)) || zipcodeLength !== 5) {
    alert('Zipcode format must be 5 numbers and no letters ex: 19054');
    return;
  }

  // get lat lon from zip
  const latLonData = await getLatLonFromZip(zipCode);

  // destructure from data
  const { latitude, longitude } = latLonData.data.location[0];
});
