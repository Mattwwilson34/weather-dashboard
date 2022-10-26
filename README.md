# TOP-weather-app-2.1

An application used to gather weather data via a seeded zipcode, user chosen zipcode, or a random US location. Built with HTML, CSS, Vanilla JS, Webpack, Yarn.

## Project Focus:

- Use vanilla JS and [Axios](https://www.npmjs.com/package/axios) to hit multiple API end points including:
  - [OpenWeather current forcast](https://openweathermap.org/current) for weather at that exact time.
  - [OpenWeather 5 Day / 3 Hour Forecast](https://openweathermap.org/api/hourly-forecast) for a 5 day forcast and up to 8 timepoints per day.
  - [TheZipCodes](https://www.thezipcodes.com/) which takes a zip code and returns latitude / longtitude data.
- Use ES6 await syntax for asynchronous functions and promise interactions.
- Use a functional programming approach to limit application side effects and improve testability.
- Use TDD principles for non-dom based logic including API calls.
- Use Github actions to create consisting testing and vetting conditions for all commits and pull requests.

## Project Status

Complete

## Project Screen Shot(s)

![ezgif com-gif-maker (10)](https://user-images.githubusercontent.com/49503056/198144731-72dbde93-85c4-41ab-8a86-1d23e502a41e.gif)

## Installation and Setup Instructions

#### Example:

Clone down this repository. You will need `node` and `yarn` installed globally on your machine.

Installation:

`yarn install`

To Run Test Suite:

`yarn test`

To Run linter:

`yarn lint`

To Start Back-end Server:

`yarn start backend-server`

To Start Front-end Server:

`yarn start-frontend-server`

To Visit App:

1. Make sure both the `front-end` and `back-end` servers are running.
2. Open the `index.html` file in your browser of choice.

## Reflection

### What was the context for this project? (ie: was this a side project? was this for Turing? was this for an experiment?)

- The context of this project was to review and practice my javascript, HTML, and CSS skills. The goal was to avoid frame-works and stick to vanilla JS.

### What did you set out to build?

- I set out to build a weather dashboard allowing users to enter a zip code and see a week-long forecast for that particular location with hourly details of each day's forecast.

### Why was this project challenging and therefore a really good learning experience?

- This project was challenging because it required multiple API calls in a row to receive the data I wanted to show my user. The project also required that I build a backend server so that I could leverage a .env file to protect my API keys. Making sure that all these moving parts worked together and proper error handling and user communication was a great learning experience.

### What were some unexpected obstacles?

1. In the past, I have had a good deal of difficulty figuring out the best way to test API calls with Jest. I found a video by Leigh Halliday that used the NPM package, Mock Service Worker (MSW), for API testing. The MSW package worked fantastically, but two weeks into the project, the MSW team released an update that broke my testing suite. Despite a multi-day effort to solve the bug, I ultimately decided to remove MSW from my application and created my own custom promise based Jest mocks that mimicked the functionlty of my API calls and returned identical data.

2. While attempting to set up continous integration testing on Airport wifi github.com was not registering my github action runs so I though there was a bug in my .yaml setup. Turns out it had something to do with my wifi connection at the airpot because when I eventually connected to a non airport wifi all the actions had in fact been run on every commit. As a result I wasted a good number of hours troubleshooting this perceived bug and there were a lot of unnecessary commits cluttering the project history.

### What tools did you use to implement this project?

- The tools I used in this project inlcude:

  1. `Vanilla JS` - I avoided frame works to improve my baseline JS skills and understanding.

  2. `ESLINT` - To help keep my code clean, organized, and held to an industry standard.

  3. `JEST` - This is currently my most comfortable testing environment.

  4. `AXIOS` - I did not have experience with this popular library so I wanted to expand my technical tool box to include this API interface in addition to `Fetch`

  5. `Webpack` - I chose this as my module bundler in order to allow me to better organize my code and due to my familiarity with the project.

  6. `Moment` - For API data unix date formatting

  7. `Express` / `dotenv` / `cors` / `morgan` - used to create a backend server that my frontend functions can hit to retrieve data. By housing my API call on the backend I can protect my API keys with a dotenv file.
