import axios from 'axios';

const getLatLonFromZip = async () => {
  try {
    return await axios.get('http://localhost:3000/lat-long-from-zip');
  } catch (error) {
    throw new Error(error);
  }
};

export default getLatLonFromZip;
