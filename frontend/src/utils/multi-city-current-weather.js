import getCurrentWeatherData from '../modules/get-current-weather-data.js';
import getLatLonFromZip from '../modules/get-latlon-from-zip.js';
import getRandomZipCode from './random-zipcode-generator.js';
import delay from './delay.js';

const getMultiCityCurrentWeather = async (numberOfCities) => {
  const weatherPromises = [];
  const zipcodeData = [];

  for (let i = 0; i < numberOfCities; i++) {
    const zipcode = getRandomZipCode();
    const latLonData = await getLatLonFromZip(zipcode);
    const { latitude, longitude } = latLonData.data.location[0];
    zipcodeData.push(latLonData.data.location[0]);
    weatherPromises.push(getCurrentWeatherData(latitude, longitude));
    await delay(1000);
  }

  const ajaxWeatherData = await Promise.all(weatherPromises);
  const weatherData = [];
  ajaxWeatherData.forEach((ajaxRequest) => weatherData.push(ajaxRequest.data));

  weatherData.forEach((location, i) => {
    location.zipcodeData = zipcodeData[i];
  });

  return weatherData;
};

export default getMultiCityCurrentWeather;
