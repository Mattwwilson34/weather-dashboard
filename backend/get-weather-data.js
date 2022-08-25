import axios from 'axios';
import { API_KEY } from './global-env-variables.js';

const getWeatherData = async () => {
  // set the openWeather endpoint as the target URL
  const openWeatherURL = 'https://api.openweathermap.org/data/2.5/forecast';

  // get your key from app.tomorrow.io/development/keys
  const apikey = API_KEY;

  // pick the location, as a latlong pair
  let lat = 35.994;
  let lon = -78.898;

  // choose the unit system
  const units = 'imperial';

  //  pick number of timestamps
  const timeStamps = 40;

  try {
    const weatherData = await axios.get(
      `${openWeatherURL}?lat=${lat}&lon=${lon}&appid=${apikey}&units=${units}&cnt=${timeStamps}`,
    );
    return weatherData.data;
  } catch (error) {
    console.error(error);
  }
};

export default getWeatherData;
