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
const historyBtns = document.getElementById('historyButtons')
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

// const fiveTemps = document.querySelectorAll('#temp1', '#temp2', '#temp3', '#temp4', '#temp5');
// console.log(fiveTemps)
// fiveTemps.forEach(append)
// function append () { 
//     textContent = 
// };

const apiKey = '88ec2fe22393b0487b39e1ed6a862feb'

const today = new Date();

var storedSearches = [];


searchBtn.addEventListener('click', () => {
    const searchInput = document.getElementById('searchBar').value;
    console.log(searchInput);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            searchedCity.textContent = searchInput.toUpperCase()
            storeCity(searchInput);
            // localStorage.setItem('recentSearch', JSON.stringify(storedSearches))
            let cityLat = data.coord.lat;
            let cityLon = data.coord.lon;
            console.log(cityLat);
            console.log(cityLon);
            fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${cityLat}&lon=${cityLon}&units=imperial&appid=${apiKey}`)
                .then(response2 => {
                    return response2.json();
                })
                .then(data2 => {
                    console.log(data2);
                    console.log(data2.current.temp);
                    console.log(data2.current.wind_speed);
                    console.log(data2.current.humidity);
                    console.log(data2.current.uvi);
                    currentTemp.textContent = data2.current.temp;
                    currentWind.textContent = data2.current.wind_speed;
                    currentHumid.textContent = data2.current.humidity;
                    currentUV.textContent = data2.current.humidity;
                    console.log(data2.daily[1].dew_point)
                    // console.log()
                })
        })
});

initialize();

function initialize() {
    fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=39.7392&lon=-104.9847&units=imperial&appid=${apiKey}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data)
            currentTemp.textContent = data.current.temp;
            currentWind.textContent = data.current.wind_speed;
            currentHumid.textContent = data.current.humidity;
            currentUV.textContent = data.current.humidity;
        })
}

// Append current weather data
function appendCurrent () {
    currentTemp.textContent = data2.current.temp;
    currentWind.textContent = data2.current.wind_speed;
    currentHumid.textContent = data2.current.humidity;
    currentUV.textContent = data2.current.humidity;
}

//Append 5-Day Forecast
function appendFiveDay () {

}


//put searched city in localstorage
function storeCity(searchInput) {
    storedSearches.push(searchInput);
    localStorage.setItem('recentSearch', JSON.stringify(storedSearches));
}

//render past search buttons
// function renderHistory() {
//     JSON.parse(localStorage.getItem('recentSearch'));
//     console.log(localStorage.getItem('recentSearch'))
//     var recentArray = localStorage.getItem('recentSearch')
//     recentArray.forEach(element => {
//         historyBtns.append()
//     });
// }
// renderHistory();