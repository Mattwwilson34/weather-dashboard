import axios from 'axios';

const getLatLonFromZip = async (zipCode = 27703) => {
  try {
    return await axios.get(
      `http://localhost:3000/lat-long-from-zip?zipCode=${zipCode}`,
    );
  } catch (error) {
    throw new Error(error);
  }
};

export default getLatLonFromZip;
