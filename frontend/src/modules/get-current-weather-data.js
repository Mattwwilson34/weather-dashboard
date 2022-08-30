import axios from 'axios';

const getCurrentWeatherData = async (
  latitude = 40.171047,
  longitude = -74.82796,
) => {
  try {
    return await axios.get(
      `http://localhost:3000/current?lat=${latitude}&lon=${longitude}`,
    );
  } catch (error) {
    throw new Error(error);
  }
};

export default getCurrentWeatherData;
