import axios from 'axios';
import { ZIPCODES_API_KEY } from './global-env-variables.js';

const getLatLonFromZip = async (zipCode = 19054) => {
  //
  const baseURL = 'https://thezipcodes.com/api/v1/search?';
  const countryCode = 'US';
  const url = `${baseURL}zipCode=${zipCode}&countryCode=${countryCode}&apiKey=${ZIPCODES_API_KEY}`;

  try {
    const latLonData = await axios.get(url);
    return latLonData.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default getLatLonFromZip;
