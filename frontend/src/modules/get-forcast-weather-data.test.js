test('test', () => {});

// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
// import getForcastWeatherData from './get-forcast-weather-data.js';
// import MOCK_FORCAST_WEATHER_API_DATA from '../utils/mock-api-data/forcast-weather-data.js';

// const server = setupServer(
//   rest.get('http://localhost:3000/forcast', (req, res, ctx) => {
//     return res(ctx.status(200), ctx.json(MOCK_FORCAST_WEATHER_API_DATA));
//   }),

//   // Fallback to prevent actual API call from going out
//   rest.get('*', (req, res, ctx) => {
//     console.error(`Please add request handler for ${req.url.toString()}`);
//     return res(
//       ctx.status(500),
//       ctx.json({ error: 'Please add request handler' }),
//     );
//   }),
// );

// beforeAll(() => server.listen());
// afterAll(() => server.close());
// afterEach(() => server.resetHandlers());

// describe('Front-end forcast weather API call', () => {
//   //
//   it('returns an array of weather data objects', async () => {
//     const weatherData = await getForcastWeatherData();
//     expect(weatherData.data.list).toBeInstanceOf(Array);
//   });

//   it('weather data objects contain a temperature value', async () => {
//     const weatherData = await getForcastWeatherData();
//     const temp = weatherData.data.list[0].main.temp;
//     expect(temp).toBe(90.77);
//   });

//   it('handles failure', async () => {
//     server.use(
//       rest.get('http://localhost:3000/forcast', (req, res, ctx) => {
//         return res(ctx.status(404));
//       }),
//     );

//     await expect(getForcastWeatherData()).rejects.toThrow(
//       'AxiosError: Request failed with status code 404',
//     );
//   });
// });
