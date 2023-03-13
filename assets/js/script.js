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
const getLocation = async (city) => {
   const response = await fetch(`${geoLocationApi}?q=${city}&limit=1&appid=${apiKey}`);
   const data = await response.json();
   return data;
}


const getWeatherData = async (lat, lon) => {
   const response = await fetch(`${weatherApi}?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`);
   const data = await response.json();
   return data;
}


const farenheitToCelcius = (temp) => {
   // rounded to 2 decimal places
   return ((temp - 32) * (5 / 9)).toFixed(2);
}


const mphToKph = (speed) => {
   //rounded to 2 decimal places
   return (speed * 1.609).toFixed(2);
}


const renderWeatherItems = (city, data) => {
   const currentDate = new Date(data.list[0].dt_txt);
   const currentWeatherIcon = data.list[0].weather[0].icon;


   //clear the weather container
   weatherContainer.innerHTML = '';


   // Create the main card
   const mainCard = `<div class="card weather-main-card">
                       <div class="card-body">
                           <h2 class="city-name">
                               <span>${city}</span>
                               <span>(${currentDate.toLocaleString().split(",")[0]})</span>
                               <img src="https://openweathermap.org/img/wn/${currentWeatherIcon}@2x.png" alt="weather" width="70px">
                           </h2>


                           <p class="city-temp my-1 fw-semibold">
                               Temperature: <span>${data.list[0].main.temp}&deg;F / ${farenheitToCelcius(data.list[0].main.temp)}&deg;C</span>
                           </p>


                           <p class="city-humidity my-1 fw-semibold">
                               Humidity: <span>${data.list[0].main.humidity}%</span>
                           </p>


                           <p class="city-wind my-1 fw-semibold">
                               Wind: <span>${data.list[0].wind.speed} MPH / ${mphToKph(data.list[0].wind.speed)} KPH</span>
                           </p>
                       </div>
                   </div>`;


   // Append the main card to the weather container
   weatherContainer.innerHTML = mainCard;


   weatherContainer.innerHTML += `<h2 class="m-3">5-Day Forecast:</h2>`;
   // Create the forecast cards
   const forecastCardContainer = `<div class="weather-cards mt-3"></div>`;
   weatherContainer.innerHTML += forecastCardContainer;


   // Append the forecast cards to the weather container
   data.list.forEach(forecast => {
       if (forecast.dt_txt.includes('12:00:00')) {
           const forecastDate = new Date(forecast.dt_txt);
           const forecastWeatherIcon = forecast.weather[0].icon;
           const forecastCard = `<div class="weather-card card bg-primary">
                                   <div class="card-body">
                                       <h5 class="weather-date">
                                           ${forecastDate.toLocaleString().split(",")[0]}
                                       </h5>
                                       <div class="weather-icon">
                                           <img src="https://openweathermap.org/img/wn/${forecastWeatherIcon}@2x.png" alt="weather" width="50px">
                                       </div>
                                       <p class="weather-temp my-2 fw-semibold">
                                           Temperature: <span>${forecast.main.temp}&deg;F</span>
                                       </p>


                                       <p class="weather-humidity my-2 fw-semibold">
                                           Humidity: <span>${forecast.main.humidity}%</span>
                                       </p>


                                       <p class="weather-wind my-2 fw-semibold">
                                           Wind: <span>${forecast.wind.speed} MPH</span>
                                       </p>
                                   </div>
                               </div>`;


           weatherContainer.querySelector('.weather-cards').innerHTML += forecastCard;
       }
   })
}


const setHistory = (city) => {


   if (history.includes(city)) {
       return;
   }


   history.push(city);
   localStorage.setItem('history', JSON.stringify(history));
   getHistory();
}


const getHistory = () => {
   if (localStorage.getItem('history')) {
       history = JSON.parse(localStorage.getItem('history'));
   }


   searchHistory.innerHTML = '';


   history.reverse().forEach(city => {
       const historyItem = `<div class="card py-2 text-center my-1">${city}</div>`;
       searchHistory.innerHTML += historyItem;
   });
}




// Event Listeners
searchForm.addEventListener('submit', searchSubmit);
searchHistory.addEventListener('click', (event) => {
   updateWeatherData(event.target.textContent);
});


// On page load
getHistory();