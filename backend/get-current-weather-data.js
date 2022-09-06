import axios from 'axios';
import { API_KEY } from './global-env-variables.js';

const getCurrentWeatherData = async (
  latitude = 40.171047,
  longitude = -74.82796,
) => {
  // set the openWeather endpoint as the target URL
  const openWeatherURL = 'https://api.openweathermap.org/data/2.5/weather';

  // get your key from app.tomorrow.io/development/keys
  const apikey = API_KEY;

  // choose the unit system
  const units = 'imperial';

  try {
    const weatherData = await axios.get(
      `${openWeatherURL}?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=${units}`,
    );
    return weatherData.data;
  } catch (error) {
    console.error(error);
  }
};

export default getCurrentWeatherData;
