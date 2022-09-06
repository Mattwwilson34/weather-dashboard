import axios from 'axios';
import { API_KEY } from './global-env-variables.js';

const getForcastWeatherData = async (latitude = 35.9, longitude = 78.8) => {
  // set the openWeather endpoint as the target URL
  const openWeatherURL = 'https://api.openweathermap.org/data/2.5/forecast';

  // get your key from app.tomorrow.io/development/keys
  const apikey = API_KEY;

  // choose the unit system
  const units = 'imperial';

  //  pick number of timestamps
  const timeStamps = 40;

  try {
    const weatherData = await axios.get(
      `${openWeatherURL}?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=${units}&cnt=${timeStamps}`,
    );
    return weatherData.data;
  } catch (error) {
    console.error(error);
  }
};

export default getForcastWeatherData;
