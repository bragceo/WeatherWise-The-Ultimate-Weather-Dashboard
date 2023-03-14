# 06 Server-Side APIs: Weather Dashboard

## Description 

The WeatherWise application allows users to search for the current weather and 5-day weather forecast for any city in the world using the OpenWeatherMap API. Users can enter a city name in the search box, and the application will fetch the city's latitude and longitude using the OpenWeatherMap Geolocation API, then use that data to fetch the city's weather data using the OpenWeatherMap Weather API. The application will then display the weather data for the searched city on the screen, including the current temperature, humidity, wind speed, and a 5-day forecast. Additionally, the application keeps a history of past searches, which can be accessed and searched again by the user.

## How Does the Code Work

HTML

The head tag contains the metadata for the document, including the character encoding, viewport settings, and the document title.

Inside the head tag, there are three link tags and one script tag. The first link tag references the Bootstrap CSS stylesheet from a content delivery network (CDN), which is used to style the page. The second link tag references a custom stylesheet called style.css, which contains additional styles for the page. The third link tag references the OpenWeatherMap API icon CSS stylesheet, which is used to display weather icons. 

The script tag references the main.js file, which contains the JavaScript code for the application.

The body tag contains the visible content of the page. It is divided into two main sections: the app-head section, which displays the WeatherWise logo and title, and the app-body section, which contains the main content of the application.

The app-body section is further divided into two main sections: the left-pane section, which contains the search box and search history, and the right-pane section, which displays the weather data for the searched city.

The left-pane section contains a form element with the id search-city, which contains an input field for the user to enter a city name, and a search button. 

Below the search box, there is a div element with the class search-history, which displays the search history for the user.

The right-pane section initially contains no content, but is updated dynamically by the JavaScript code when the user searches for a city's weather data.

Javascript

First, the code defines several constants and variables that will be used throughout the application. These include API endpoints, DOM elements, and data structures to store the search history.

The code defines several functions that are used to handle various parts of the application's functionality. These include functions to submit the search form, get the location data for a searched city using the OpenWeatherMap Geolocation API, get the weather data for a location using the OpenWeatherMap Weather API, and render the weather data on the page.

The searchSubmit function is called when the user submits the search form. It prevents the default form submission behavior, gets the user's input from the search input field, and calls the updateWeatherData function with the input city name as an argument.

The updateWeatherData function is an asynchronous function that gets the location data for the searched city using the getLocation function, gets the weather data for the location using the getWeatherData function, and renders the weather data on the page using the renderWeatherItems function. It also updates the search history using the setHistory function.

The getLocation and getWeatherData functions are asynchronous functions that use fetch to make API calls to the OpenWeatherMap API endpoints and return the resulting data as JSON.
The renderWeatherItems function takes the location name and weather data as arguments and generates the HTML code to display the weather data for the location. It first generates the main card that displays the current weather data for the location, and then generates five forecast cards that display the weather data for the next five days.

The setHistory and getHistory functions handle the search history functionality of the application. The setHistory function updates the search history with the searched city's name, while the getHistory function retrieves the search history from local storage and displays it on the screen.

Finally, the code sets up event listeners for the search form submission and search history clicks, and calls the getHistory function to retrieve and display the search history when the page is first loaded.

## Important Notes and Thanks.

I have verified and confirmed that the weather details are accurate as pulled from https://openweathermap.org/. However, I further wanted to compare the forecasts with other weather apps and noticed that following: Regarding the forecast, if you compare the forecast info from  https://weather.com/ and https://openweathermap.org/ you'll notice that there is difference between their forecast. As such, I noted that forecast varies from different providers. 

I want to give a special thanks to my tutor Erik Hoverstein and several helpful tutorials, including: https://www.youtube.com/watch?v=KqZGuzrY9D4 and this course https://www.udemy.com/course/build-a-weather-app-with-ajax-using-open-weather-map-api/

## Example of Functionality

https://user-images.githubusercontent.com/119948453/224979137-4ccef56b-8a3b-4c25-9780-5297ee23ff48.mov

<img width="1429" alt="Screen Shot 2023-03-13 at 8 01 59 PM" src="https://user-images.githubusercontent.com/119948453/224979290-8fbc2fb4-648c-4bef-bd66-0ee29ee49bd5.png">

## Your Task

Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

Use the [5 Day Weather Forecast](https://openweathermap.org/forecast5) to retrieve weather data for cities. The base URL should look like the following: `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`. After registering for a new API key, you may need to wait up to 2 hours for that API key to activate.

**Hint**: Using the 5 Day Weather Forecast API, you'll notice that you will need to pass in coordinates instead of just a city name. Using the OpenWeatherMap APIs, how could we retrieve geographical coordinates given a city name?

You will use `localStorage` to store any persistent data. For more information on how to work with the OpenWeather API, refer to the [Full-Stack Blog on how to use API keys](https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys).

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```

## Mock-Up

The following image shows the web application's appearance and functionality:

![The weather app includes a search option, a list of cities, and a five-day forecast and current weather conditions for Atlanta.](./Assets/06-server-side-apis-homework-demo.png)

## Grading Requirements

> **Note**: If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:
>
> * A repository that has no code
>
> * A repository that includes a unique name but nothing else
>
> * A repository that includes only a README file but nothing else
>
> * A repository that only includes starter code

This Challenge is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria plus the following:

    * Uses the OpenWeather API to retrieve weather data.

    * Uses `localStorage` to store persistent data.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository that contains application code.

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application resembles the mock-up functionality provided in the Challenge instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality readme file with description, screenshot, and link to deployed application.

## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a readme describing the project.

- - -
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
