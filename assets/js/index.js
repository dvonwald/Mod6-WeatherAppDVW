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
const searchBtn = document.getElementById('searchBtn');
// const searchInput = document.getElementById('searchBar').value;
// const prevSearch1 = document.getElementById()
//Variables for Current temp
const currentDay = document.getElementById('currentDay');
const searchedCity = document.getElementById('searchedcity');
const currentTemp = document.getElementById('temp0');
const currentWind = document.getElementById('wind0');
const currentHumid = document.getElementById('humid0');
const currentUV = document.getElementById('uv');
//Variables for 5 day forecast
const temp1 = document.getElementById('temp1');
const wind1 = document.getElementById('wind1');
const humid1 = document.getElementById('humid1');
const icon1 = document.getElementById('icon1');
const date1 = document.getElementById('date1');

const apiKey = '88ec2fe22393b0487b39e1ed6a862feb'

const today = new Date();



searchBtn.addEventListener('click', () => {
    const searchInput = document.getElementById('searchBar').value;
    console.log(searchInput);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            let cityLat = data.coord.lat;
            let cityLon = data.coord.lon;
            console.log(cityLat);
            console.log(cityLon)
            fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${cityLat}&lon=${cityLon}&units=imperial&appid=${apiKey}`)
                .then(response2 => {
                    return response2.json();
                })
                .then(data2 => {
                    console.log(data2);
                })
        })
});

initialize();

function initialize() {

}

