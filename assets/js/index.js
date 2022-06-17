// Fetch weather api data from https://openweathermap.org/api
//Be able to search for a city on the left side with an input and a search button
//search button needs a event listener to kick off the API call
// input for city needs to be the filter
// also on the left side I need a recent searches buttons
// I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index -- pulled from the API
// insomnia to test what keys i get back from the API, make a list of relevant keys 
// UV index color based color that indicates whether the conditions are favorable, moderate, or severe 
    // if then statements for coloring 
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

// past searches need to be dynamically created and clickable to show data again

//past searches are saved in localstoage

// moment.js to incorporate current date and next days

// search for a city 
// 
// use the geocoding API to input city and return lat, long coordinates
// pass those values into the API call URL
// pull value from text input and insert into https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}  

//pull lat and long from above api call and insert them into 

//Information I need from the API:
// City Name
// Current Temp, Wind, Humidity, UV Index
// Following 5 days Date, Weather Icon, Temp, Wind, Humidity

//Variables for Search Panel
const searchBtn = document.getElementById('searchBtn')
const searchInput = document.getElementById()
const prevSearch1 = document.getElementById()
//Variables for Current temp
const currentTemp = document.getElementById('temp0')
const currentWind = document.getElementById('wind0')
const currentHumid = document.getElementById('humid0')
const currentUV = document.getElementById('uv')
//Variables for 5 day forecast
const temp1 = document.getElementById('temp1')
const wind1 = document.getElementById('wind1')
const humid1 = document.getElementById('humid1')
const icon1 = document.getElementById('icon1')
const date1 = document.getElementById('date1')



searchBtn.addEventListener('click', () => {
    alert();
});

