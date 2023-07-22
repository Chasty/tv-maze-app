<div align="center">
  <h1>TV App Challenge</h1>
  <p>This project is a solution for how to solve a challenging tv series app following best practices.</p>

</div>



## ⬇️ How to get started
  - `git clone git@github.com:Chasty/tv-maze-app.git`
  - `cd tv-maze-app`
  - `yarn install`

## 🏃‍♀️ Running the app

  - `yarn start`
  - `Press a if you want to run the app on android`
  - `Press i if you want to run the app on ios`

## 📱 Preview



https://github.com/Chasty/tv-maze-app/assets/18494040/3a16ea4f-8c03-4d20-a6e7-414ec6c37d9c



## 💻 Tech Stack
  - React Native
  - Expo Router V2
  - Expo Image

## 🧭 Navigation Structure

```bash title="File System"
app/
  _layout.tsx # Stack
  [...missing].tsx
  [id].tsx # route screen for details of a serie
  +html.tsx # for web
  episode-details.tsx # route screen for  details of a episode
  index.ts # route screen and initial screen for showing series/shows
  modal.tsx # route for a modal to show the PIN authentication
```

## 📁 Project Structure

- [`app`](./app) - The navigation structure with all the the screens on the app.
- [`components`](./components) - The reusable components by the app
- [`constants`](./constants) - Constants for the app
- [`hooks`](./hooks) - Exposed hooks for fetching series and seasons
- [`models`](./models) - Models according to what the api services respond.
- [`services`](./services) - Network abstraction layer to interact with api endpoints
- [`utils`](./services) - Utility functions for mutating and transforming data

