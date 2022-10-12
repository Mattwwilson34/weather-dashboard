import getForcastWeatherData from './get-forcast-weather-data.js';
import getLatLonFromZip from './get-latlon-from-zip.js';

const getWeatherDataFromZip = async (zipcode = 27703) => {
  try {
    const zipCodeData = await getLatLonFromZip(zipcode);
    const { latitude, longitude } = zipCodeData.data.location[0];
    const forcastWeatherData = await getForcastWeatherData(latitude, longitude);

    return { forcastWeatherData: forcastWeatherData, zipCodeData: zipCodeData };
  } catch (error) {
    throw new Error(error);
  }
};

export default getWeatherDataFromZip;
