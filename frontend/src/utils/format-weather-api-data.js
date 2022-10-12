import moment from 'moment';

const formatTimeStamps = (weatherData) => {
  //
  // Deep copy API data
  const weatherDataClone = JSON.parse(JSON.stringify(weatherData));

  // Format weather time stamps
  weatherDataClone.list.forEach((timeStamp) => {
    timeStamp.dt = moment
      .unix(timeStamp.dt)
      .format('dddd, MMMM Do YYYY, h:mm:ss a');
  });

  // Format sunrise/set
  weatherDataClone.city.sunrise = moment
    .unix(weatherDataClone.city.sunrise)
    .format('h:mm:ss a');
  weatherDataClone.city.sunset = moment
    .unix(weatherDataClone.city.sunset)
    .format('h:mm:ss a');

  return weatherDataClone;
};

export default formatTimeStamps;
