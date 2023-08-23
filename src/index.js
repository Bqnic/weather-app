import "./style.css";
import { showForecastInfo, showInfo } from "./dom";

const searchBox = document.getElementById("location");
const search = document.getElementById("search-btn");
let currentData;
let activeForecast = "day";
let tempSystem = "°C";

// system for converting between celsius and fahrenheit
const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");

celsius.classList.add("active");

celsius.addEventListener("click", () => {
  if (tempSystem === "°F") {
    tempSystem = "°C";
    celsius.classList.add("active");
    fahrenheit.classList.remove("active");

    if (currentData) {
      showInfo(currentData, tempSystem, activeForecast);
    }
  }
});

fahrenheit.addEventListener("click", () => {
  if (tempSystem === "°C") {
    tempSystem = "°F";
    fahrenheit.classList.add("active");
    celsius.classList.remove("active");

    if (currentData) {
      showInfo(currentData, tempSystem, activeForecast);
    }
  }
});

// system for switching between day and hour forecast
const dayForecast = document.getElementById("day-forecast-paragraph");
const hourForecast = document.getElementById("hour-forecast-paragraph");

dayForecast.classList.add("clicked");

dayForecast.addEventListener("click", () => {
  dayForecast.classList.add("clicked");
  hourForecast.classList.remove("clicked");
  activeForecast = "day";
  showForecastInfo(currentData, tempSystem, activeForecast);
});

hourForecast.addEventListener("click", () => {
  hourForecast.classList.add("clicked");
  dayForecast.classList.remove("clicked");
  activeForecast = "hour";
  showForecastInfo(currentData, tempSystem, activeForecast);
});

// system for fetching API data
async function getWeatherInfo(location) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=bc367a20a09f44d8a79125326232108&days=3&q=${location}`
  );

  const data = await response.json();

  currentData = data;
  console.log(data);
  showInfo(currentData, tempSystem, activeForecast);
}

search.addEventListener("click", () => {
  if (searchBox.value.trimStart() !== "") getWeatherInfo(searchBox.value);
});

searchBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") getWeatherInfo(searchBox.value);
});

// TODO:
// error handling
// change background if it's day or night
// design for bigger sizes
// add footer
