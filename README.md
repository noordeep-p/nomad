# Nomad

Nomad is a travel app that allows travellers to share their itineraries and visited places with others around the world by posting them as a collection of Geo-points on a map with reviews and ratings. Travellers can also reach out and chat with other travellers or meetup with them through the "Travel buddy" feature, allowing like-minded travellers to make connections.

## Description

- Users can see a list of the available maps and view individual maps
- A map can contain many points
- Each point can have: a title, description, and image
- Only authenticated users can create maps and modify maps (add, edit, remove points)
- Users can favorite a map
- Users have a profile
- Users can chat with people that accept their buddy request
- Users have a meetup feature where they that can request to chat and meetup with others called “find a travel buddy”

## App Features Demo

**_Click on the screenshots to see the app demo on youtube_**

---

- Virtual Itineraries Feature Demo Video

[![Nomad Virtual Itineraries Demo](http://img.youtube.com/vi/T5WFGQWtRPo/0.jpg)](https://www.youtube.com/watch?v=T5WFGQWtRPo&ab_channel=NoordeepP. "Nomad Virtual Itineraries Demo")

- Chat Feature Demo Video

[![Nomad Chat Demo](http://img.youtube.com/vi/ks9lEPx_sRM/0.jpg)](https://www.youtube.com/watch?v=ks9lEPx_sRM&ab_channel=NoordeepP. "Nomad Chat Demo")

## Dependencies

- node: ^10.x,
- npm: ^5.x,
- material-ui: ^^4.11.2,
- chalk: ^2.4.2,
- react-google-maps/api: ^2.7.0,
- axios: ^0.22.0,
- dotenv: ^2.0.0,
- express: ^4.17.1,
- react: ^17.0.2,
- react-router-dom: ^5.3.0,
- timeago-react: ^3.0.4
- jsonwebtoken: ^8.5.1,
- mongoose: ^6.1.10,
- socket.io: ^4.0.1
- cors: ^2.8.5,
- bcrypt: ^5.0.1

## Dev Dependencies

- nodemon: ^2.0.10
- eslint: ^8.8.0,
- prettier: ^2.5.1

**_This app requires Google Maps and Places API keys as well as the Rapid Restaurants/ Attractions API keys. The current keys in the project are restricted and will not work on other hosts._**

## Getting Started

Client

1. Install dependencies with npm i
2. update env.local and both the REACT_APP_GOOGLE_MAP_API_KEY & REACT_APP_RAPID_API_TRAVEL_API_KEY
3. npm start to start App

Server

1. Install dependencies with npm i
2. update env.local with CONNECTION_URL, ACCESS_TOKEN_SECRET and PORT
3. npm run dev to start server
