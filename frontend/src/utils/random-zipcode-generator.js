import zipcodeData from './zipcode-data/USCities.js';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomZipCode = () => {
  const randomIndex = getRandomIntInclusive(0, zipcodeData.length - 1);
  return zipcodeData[randomIndex].zip_code;
};

export default getRandomZipCode;
