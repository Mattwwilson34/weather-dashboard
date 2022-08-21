import axios from 'axios';

const getData = async () => {
  try {
    const weatherData = await axios.get('http://localhost:3000/');
    console.log(weatherData);
  } catch (error) {
    console.error(error);
  }
};

// Added to prevent API call on app refresh
const weatherButton = document.querySelector('button');
weatherButton.addEventListener('click', () => {
  getData();
});
