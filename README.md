# TOP-weather-app-2.1

An appolication used to gather weather data based on users current location or a desired location. Built with HTML, CSS, Vanilla JS, Webpack, Yarn.

## Project Focus:

- Use vanilla JS and the fetch API to hit [tomorrow.io](https://www.tomorrow.io/) endpoints and display this data to the user.
- Use ES6 await syntax for asynchronous functions and promise interactions.
- Use a functional programming approach to limit applicaiton side effects and improve testability.
- Use TDD principles for non-dom based logic including API calls.
- Use Github actions to create consisting testing and vetting conditions for all commits and pull requests.

## Project Status

This project is currently in development.

## Project Screen Shot(s)

#### Example:

[ PRETEND SCREEN SHOT IS HERE ]

[ PRETEND OTHER SCREEN SHOT IS HERE ]

## Installation and Setup Instructions

#### Example:

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Run Test Suite:

`npm test`

To Start Server:

`npm start`

To Visit App:

`localhost:3000/ideas`

## Reflection

- What was the context for this project? (ie: was this a side project? was this for Turing? was this for an experiment?)
- What did you set out to build?
- Why was this project challenging and therefore a really good learning experience?
- What were some unexpected obstacles?
- What tools did you use to implement this project?
  - This might seem obvious because you are IN this codebase, but to all other humans now is the time to talk about why you chose webpack instead of create react app, or D3, or vanilla JS instead of a framework etc. Brag about your choices and justify them here.

#### Example:

#### Issues:

- While attempting to set up continous integration testing on Airport wifi github.com was not registering my github action runs so I though there was a bug in my .yaml setup. Turns out it had something to do with my wifi connection at the airpot because when I eventually connected to a non airport wifi all the action had been run on every commit. As a result there were a lot of unnecessary commit in the project history.

This was a 3 week long project built during my third module at Turing School of Software and Design. Project goals included using technologies learned up until this point and familiarizing myself with documentation for new features.

Originally I wanted to build an application that allowed users to pull data from the Twitter API based on what they were interested in, such as 'most tagged users'. I started this process by using the `create-react-app` boilerplate, then adding `react-router-4.0` and `redux`.

One of the main challenges I ran into was Authentication. This lead me to spend a few days on a research spike into OAuth, Auth0, and two-factor authentication using Firebase or other third parties. Due to project time constraints, I had to table authentication and focus more on data visualization from parts of the API that weren't restricted to authenticated users.

At the end of the day, the technologies implemented in this project are React, React-Router 4.0, Redux, LoDash, D3, and a significant amount of VanillaJS, JSX, and CSS. I chose to use the `create-react-app` boilerplate to minimize initial setup and invest more time in diving into weird technological rabbit holes. In the next iteration I plan on handrolling a `webpack.config.js` file to more fully understand the build process.
