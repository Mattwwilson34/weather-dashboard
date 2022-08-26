import axios from 'axios';

const getCurrentWeatherData = async () => {
  try {
    return await axios.get('http://localhost:3000/current');
  } catch (error) {
    throw new Error(error);
  }
};

export default getCurrentWeatherData;
