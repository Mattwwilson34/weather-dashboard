test('test', () => {});

// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
// import getCurrentWeatherData from './get-current-weather-data.js';
// import MOCK_FORCAST_CURRENT_API_DATA from '../utils/mock-api-data/current-weather-data.js';

// const server = setupServer(
//   rest.get('http://localhost:3000/current', (req, res, ctx) => {
//     return res(ctx.status(200), ctx.json(MOCK_FORCAST_CURRENT_API_DATA));
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

// describe('Front-end current weather API call', () => {
//   //
//   it('returns a weather data object', async () => {
//     const weatherData = await getCurrentWeatherData();
//     expect(weatherData.data).toBeInstanceOf(Object);
//   });

//   it('weather data objects contain a temperature value', async () => {
//     const weatherData = await getCurrentWeatherData();
//     const {
//       main: { temp },
//     } = weatherData.data;
//     expect(temp).toBe(81.34);
//   });

//   it('handles failure', async () => {
//     server.use(
//       rest.get('http://localhost:3000/current', (req, res, ctx) => {
//         return res(ctx.status(404));
//       }),
//     );

//     await expect(getCurrentWeatherData()).rejects.toThrow(
//       'AxiosError: Request failed with status code 404',
//     );
//   });
// });
