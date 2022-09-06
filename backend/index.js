import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import getCurrentWeatherData from './get-current-weather-data.js';
import getForcastWeatherData from './get-forcast-weather-data.js';
import getLatLonFromZip from './get-latlon-from-zip.js';

const port = 3000;
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/current', async (req, res) => {
  try {
    //
    // get lat + lon from url params
    const latitude = req.query.lat;
    const longitude = req.query.lon;

    // get OpenWeather API data
    const weatherData = await getCurrentWeatherData(latitude, longitude);

    // send data to front-end
    res.send(weatherData);
    //
  } catch (error) {
    throw new Error(error);
  }
});

app.get('/forcast', async (req, res) => {
  try {
    //
    // get lat + lon from url params
    const latitude = req.query.lat;
    const longitude = req.query.lon;

    // get OpenWeather API data
    const weatherData = await getForcastWeatherData(latitude, longitude);

    // send data to front-end
    res.send(weatherData);
    //
  } catch (error) {
    throw new Error(error);
  }
});

app.get('/lat-long-from-zip', async (req, res) => {
  try {
    //
    // get zip code from url params
    const zipCode = req.query.zipCode;

    // get zipcode data from API
    const latLonData = await getLatLonFromZip(zipCode);

    // send data to front-end
    res.send(latLonData);
    //
  } catch (error) {
    throw new Error(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
