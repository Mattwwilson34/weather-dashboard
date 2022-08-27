const currentWeatherDataObj = {
  coord: {
    lon: -78.9,
    lat: 35.99,
  },
  weather: [
    {
      id: 802,
      main: 'Clouds',
      description: 'scattered clouds',
      icon: '03d',
    },
  ],
  base: 'stations',
  main: {
    temp: 81.34,
    feels_like: 86.59,
    temp_min: 77.09,
    temp_max: 83.98,
    pressure: 1021,
    humidity: 77,
  },
  visibility: 10000,
  wind: {
    speed: 0,
    deg: 0,
  },
  clouds: {
    all: 40,
  },
  dt: 1661608225,
  sys: {
    type: 2,
    id: 2040014,
    country: 'US',
    sunrise: 1661597021,
    sunset: 1661644259,
  },
  timezone: -14400,
  id: 4464368,
  name: 'Durham',
  cod: 200,
};

export default currentWeatherDataObj;
