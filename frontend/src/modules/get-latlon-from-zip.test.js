test('test', () => {});

// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
// import getLatLonFromZip from './get-latlon-from-zip.js';
// import MOCK_ZIP_CODE_API_DATA from '../utils/mock-api-data/zip-code-data.js';

// const server = setupServer(
//   rest.get('http://localhost:3000/lat-long-from-zip', (req, res, ctx) => {
//     return res(ctx.status(200), ctx.json(MOCK_ZIP_CODE_API_DATA));
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
//   it('returns an array of zip code data objects', async () => {
//     const zipCodeData = await getLatLonFromZip();
//     expect(zipCodeData.data.location).toBeInstanceOf(Array);
//   });

//   it('zip code object contains valid zip code', async () => {
//     const zipCodeData = await getLatLonFromZip();
//     const zipCode = zipCodeData.data.location[0].zipCode;
//     expect(zipCode).toBe('10954');
//   });

//   it('handles failure', async () => {
//     server.use(
//       rest.get('http://localhost:3000/lat-long-from-zip', (req, res, ctx) => {
//         return res(ctx.status(404));
//       }),
//     );

//     await expect(getLatLonFromZip()).rejects.toThrow(
//       'AxiosError: Request failed with status code 404',
//     );
//   });
// });
