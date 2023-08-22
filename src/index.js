import "./style.css";
import { showInfo } from "./dom";

const searchBox = document.getElementById("location");
const search = document.getElementById("search-btn");
let currentData;

let tempSystem = "°C";

const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");

celsius.addEventListener("click", () => {
  if (tempSystem === "°F") {
    tempSystem = "°C";
    celsius.classList.add("active");
    fahrenheit.classList.remove("active");

    if (currentData) {
      showInfo(currentData, tempSystem);
    }
  }
});

fahrenheit.addEventListener("click", () => {
  if (tempSystem === "°C") {
    tempSystem = "°F";
    fahrenheit.classList.add("active");
    celsius.classList.remove("active");

    if (currentData) {
      showInfo(currentData, tempSystem);
    }
  }
});

async function getWeatherInfo(location) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=bc367a20a09f44d8a79125326232108&q=${location}`
  );

  const data = await response.json();
  currentData = data;
  console.log(data);
  showInfo(currentData, tempSystem);
}

search.addEventListener("click", () => {
  if (searchBox.value.trimStart() !== "") getWeatherInfo(searchBox.value);
});

searchBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") getWeatherInfo(searchBox.value);
});

// TODO:
// - upon clicking search send input info to fetch api
// - show the info
// - button to change from celsius to fahrenheit
// - design

// info:
// - data.current.condition.text - for image
