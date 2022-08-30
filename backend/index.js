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
    const weatherData = await getCurrentWeatherData();
    res.send(weatherData);
  } catch (error) {
    throw new Error(error);
  }
});

app.get('/forcast', async (req, res) => {
  try {
    const weatherData = await getForcastWeatherData();
    res.send(weatherData);
  } catch (error) {
    throw new Error(error);
  }
});

app.get('/lat-long-from-zip', async (req, res) => {
  try {
    const zipCode = req.query.zipCode;
    const latLonData = await getLatLonFromZip(zipCode);
    res.send(latLonData);
  } catch (error) {
    throw new Error(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
