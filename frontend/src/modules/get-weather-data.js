import axios from 'axios';

const getWeatherData = async () => {
  try {
    return await axios.get('http://localhost:3000/');
  } catch (error) {
    throw new Error(error);
  }
};

export default getWeatherData;
