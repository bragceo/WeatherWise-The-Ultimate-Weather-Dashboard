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