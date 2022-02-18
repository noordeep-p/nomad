# Nomad

Nomad is a travel app that allows travellers to share their itenaries and visited places with others around the world by posting them as a collection of Geo-points on a map with reviews and ratings. Travellers can also reach out and chat with other travellers or meetup with them through the "Travel buddy" feature, allowing like-minded travellers to make connections. 

## Description

-users can see a list of the available maps and view individual maps
-a map can contain many points
-each point can have: a title, description, and image
-only authenticated users can create maps and modify maps (add, edit, remove points)
-users can favourite a map
-users have a profile
-users can chat with people that accept their buddy request
-users have a meetup feature where they that can request to chat and meetup with others called “find a travel buddy”

## Getting Started

Client
1. install dependencies
2. update env.local with REACT_APP_GOOGLE_MAP_API_KEY, REACT_APP_RAPID_API_TRAVEL_API_KEY
3. npm start

Server
1. install dependencies
2. update env.local with CONNECTION_URL, ACCESS_TOKEN_SECRET and PORT
3. npm run dev