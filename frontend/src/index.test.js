import { rest } from 'msw';
import { setupServer } from 'msw/node';
import getWeatherData from './modules/get-forcast-weather-data.js';

const MOCK_WEATHER_DATA = {
  dt: 1661396400,
  main: {
    temp: 77.18,
    feels_like: 77.88,
    temp_min: 77.18,
    temp_max: 78.17,
    pressure: 1019,
    sea_level: 1019,
    grnd_level: 1003,
    humidity: 70,
    temp_kf: -0.55,
  },
  weather: [
    {
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04n',
    },
  ],
  clouds: {
    all: 86,
  },
  wind: {
    speed: 2.24,
    deg: 171,
    gust: 2.8,
  },
  visibility: 10000,
  pop: 0,
  sys: {
    pod: 'n',
  },
  dt_txt: '2022-08-25 03:00:00',
};

const server = setupServer(
  rest.get('http://localhost:3000/forcast', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MOCK_WEATHER_DATA));
  }),

  // Fallback to prevent actual API call from going out
  rest.get('*', (req, res, ctx) => {
    console.error(`Please add request handler for ${req.url.toString()}`);
    return res(
      ctx.status(500),
      ctx.json({ error: 'Please add request handler' }),
    );
  }),
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('Backend open weather API call', () => {
  //
  it('returns an object', async () => {
    //
    const weatherData = await getWeatherData();
    expect(weatherData.data).toBeInstanceOf(Object);
  });

  it('returns a temperature value', async () => {
    const weatherData = await getWeatherData();
    expect(weatherData.data.main.temp).toBe(77.18);
  });

  it('handles failure', async () => {
    server.use(
      rest.get('http://localhost:3000/forcast', (req, res, ctx) => {
        return res(ctx.status(404));
      }),
    );

    await expect(getWeatherData()).rejects.toThrow(
      'AxiosError: Request failed with status code 404',
    );
  });
});
