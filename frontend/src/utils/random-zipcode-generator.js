import zipcodeData from './zipcode-data/USCities.js';
import getRandomIntInclusive from './random-number.js';

const getRandomZipCode = () => {
  const randomIndex = getRandomIntInclusive(0, zipcodeData.length - 1);
  return zipcodeData[randomIndex].zipcode;
};

export default getRandomZipCode;
