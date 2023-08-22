import "./style.css";
import { showInfo } from "./dom";

const searchBox = document.getElementById("location");
const search = document.getElementById("search-btn");

async function getWeatherInfo(location) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=bc367a20a09f44d8a79125326232108&q=${location}`
  );

  const data = await response.json();
  console.log(data);
  showInfo(data);
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
