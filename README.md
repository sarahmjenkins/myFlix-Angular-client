# MyFlixAngularClient

## Project Description
This project uses Angular to build the client side for a movie app based on the existing REST API and database from my [movie-api](https://github.com/sarahmjenkins/movie_api) project. It allows users to create an account or login, view movies and their details, add movies to their favorites, and edit their user information.

## Key Features

- A welcome view allowing users to register or log in
- A view of all movies once a user is logged in
- Buttons on each movie card allowing users to
  - View a movie synopsis
  - View information on the director
  - View information on the genre
- A user information view
- An edit user information view

## Required Tools

This project can run locally using Angular, Node.js, and an npm package.

## Running the Project

1. Ensure Angular and Node.js are installed.

2. Clone project from GitHub using command line:
  - HTTPS: `$ git clone https://github.com/sarahmjenkins/myFlix-Angular-client.git`
  - SSH: `$ git clone git@github.com:sarahmjenkins/myFlix-Angular-client.git`

3. Install dependencies:
  `$ npm install `

4. Run locally and navigate to `http://localhost:4200`
  `$ ng serve`

## Project Dependencies

    "@angular/animations": "^15.0.0",
    "@angular/cdk": "^15.0.0",
    "@angular/common": "^15.0.0",
    "@angular/compiler": "^15.0.0",
    "@angular/core": "^15.0.0",
    "@angular/forms": "^15.0.0",
    "@angular/material": "^15.0.0",
    "@angular/platform-browser": "^15.0.0",
    "@angular/platform-browser-dynamic": "^15.0.0",
    "@angular/router": "^15.0.0",
    "rxjs": "~7.5.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.12.0"

## Developer Dependencies

    "@angular-devkit/build-angular": "^15.0.1",
    "@angular/cli": "~15.0.1",
    "@angular/compiler-cli": "^15.0.0",
    "@types/jasmine": "~4.3.0",
    "angular-cli-ghpages": "^1.0.5",
    "jasmine-core": "~4.5.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.1.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.0.0",
    "typedoc": "^0.23.23",
    "typescript": "~4.8.2"

## Deployed Site

[MyFlixAngularClient](https://sarahmjenkins.github.io/myFlix-Angular-client/welcome)