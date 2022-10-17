import formatTimeStamps from './format-weather-api-data.js';

const reduceWeatherTimeStampsToSingleDay = (
  weatherTimeStampsArray,
  desiredDayOfWeek,
) => {
  //
  // format timeStamp date/time from unix to data string
  const formattedWeatherData = formatTimeStamps(weatherTimeStampsArray);

  let singleDayForcast = [];

  // check and store desired day of week weather timeStamps
  formattedWeatherData.list.forEach((timeStamp) => {
    const timeStampDayOfWeek = timeStamp.dt.split(',')[0];

    if (timeStampDayOfWeek === desiredDayOfWeek) {
      singleDayForcast.push(timeStamp);
    } else {
      return;
    }
  });

  return singleDayForcast;
};

export default reduceWeatherTimeStampsToSingleDay;
