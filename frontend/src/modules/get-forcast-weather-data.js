import axios from 'axios';

const getForcastWeatherData = async () => {
  try {
    return await axios.get('http://localhost:3000/forcast');
  } catch (error) {
    throw new Error(error);
  }
};

export default getForcastWeatherData;
