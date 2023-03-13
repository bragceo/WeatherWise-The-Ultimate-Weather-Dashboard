// Description: This file contains the main JavaScript code for the weather app

// API Endpoints
const geoLocationApi = 'http://api.openweathermap.org/geo/1.0/direct';
const weatherApi = 'https://api.openweathermap.org/data/2.5/forecast';
const apiKey = '408b7a452523faf2abdff368d1b97a5d';


// DOM Elements
const searchForm = document.querySelector('#search-city');
const searchInput = document.querySelector('#city');
const weatherContainer = document.querySelector('.right-pane');
const searchHistory = document.querySelector('.search-history');

//Weather search history
let history = [];


// Functions
const searchSubmit = (event) => {
    event.preventDefault();
    let city = searchInput.value;
    updateWeatherData(city);
}
const updateWeatherData = async (city) => {
    // Get the city's coordinates
    let locationData = await getLocation(city);
    // Get the weather data
    let weatherData = await getWeatherData(locationData[0].lat, locationData[0].lon);
    // Render the weather data
    renderWeatherItems(locationData[0].name, weatherData);
    // Set the search history
    setHistory(locationData[0].name);
}