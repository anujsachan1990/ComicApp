# ComicApp

## Demo

![Demo](demo/app.gif)

## prerequisite
- Node v10.16.3
- NPM V6.11.3


## Technology Stack
- React JS 
- React Native
- Expo
- YARN / NPM for package Dependencies
- ES6 

## Setup

- git clone https://github.com/anujsachan1990/ComicApp.git
- cd comicApp
- yarn install or npm install
- yarn ios or npm run ios

## Other Commands

- npm run test (run Test Cases)
- npm run lint (for checking code quality rules)
- npm run eject (for ejecting App)
 

## Features & other Highlights

- Scalable Architecture
- React latest features: (Hooks, Memo)
- Localization 
- API Interceptor
- Eslint (Airbnb rules)
- Husky to check code quality before pushing to Repoistory


## Scalable Frontend Architecture

Scalable folder structure


```
├── App.js
├── README.md
├── app.json
├── assets
│   ├── icon.png
│   └── splash.png
├── babel.config.js
├── node_modules
├── package-lock.json
├── package.json
├── src
│   ├── assets
│   ├── components
│   │   ├── Card
│   │   │   └── Card.js
│   │   ├── MainActivityIndicator
│   │   │   └── MainActivityIndicator.js
│   │   └── MainContainer
│   │       └── MainContainer.js
│   ├── lang
│   │   └── en-us.js
│   ├── screens
│   │   ├── Details
│   │   │   └── DetailsScreen.js
│   │   └── Search
│   │       └── SearchScreen.js
│   ├── services
│   │   └── apiURL.js
│   ├── styles
│   │   └── theme.js
│   └── utilities
│       └── index.js
└── yarn.lock
```


