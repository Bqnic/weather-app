import getDayString from "./getDayString";

function showIcon(link, temp, tempSystem) {
  const info = document.querySelector(".info");

  const div = document.createElement("div");
  div.classList.add("icon-and-temp");
  const img = document.createElement("img");
  const icon = link.replace("//cdn.weatherapi.com", "../images");
  img.src = icon;
  img.alt = "icon";

  div.appendChild(img);
  div.appendChild(
    document.createElement("p")
  ).textContent = `${temp} ${tempSystem}`;

  info.appendChild(div);
}

function showLocationAndTime(name, country, time, condition) {
  const info = document.querySelector(".info");
  const locName = document.createElement("p");
  locName.textContent = name;
  locName.id = "location-name";

  const day = getDayString(time.split(" ")[0]);

  info.appendChild(document.createElement("p")).textContent = condition;
  info.appendChild(locName);
  info.appendChild(document.createElement("p")).textContent = country;
  info.appendChild(document.createElement("p")).textContent = `${day} ${
    time.split(" ")[1]
  }`;
}

function showOtherDetails(feelsLike, humidity, wind, tempSystem) {
  const sideinfo = document.querySelector(".sideinfo");

  const imagesDiv = document.createElement("div");
  const feelsLikeImg = document.createElement("img");
  feelsLikeImg.classList.add("icon");
  feelsLikeImg.src = "../images/thermometer.svg";
  feelsLikeImg.alt = "thermometer";

  const humidityImg = document.createElement("img");
  humidityImg.classList.add("icon");
  humidityImg.src = "../images/water-outline.svg";
  humidityImg.alt = "humidity-icon";

  const windImg = document.createElement("img");
  windImg.classList.add("icon");
  windImg.src = "../images/weather-windy.svg";
  windImg.alt = "windy";

  imagesDiv.appendChild(feelsLikeImg);
  imagesDiv.appendChild(humidityImg);
  imagesDiv.appendChild(windImg);

  const textDiv = document.createElement("div");
  textDiv.appendChild(document.createElement("p")).textContent = "Feels like";
  textDiv.appendChild(
    document.createElement("p")
  ).textContent = `${feelsLike} ${tempSystem}`;

  textDiv.appendChild(document.createElement("p")).textContent = "Humidity";
  textDiv.appendChild(document.createElement("p")).textContent = `${humidity}%`;

  textDiv.appendChild(document.createElement("p")).textContent = "Wind speed";
  let speedSystem;
  if (tempSystem === "°C") speedSystem = " kph";
  else speedSystem = " mph";
  textDiv.appendChild(document.createElement("p")).textContent =
    wind + speedSystem;

  sideinfo.appendChild(imagesDiv);
  sideinfo.appendChild(textDiv);
}

function cleanInterface() {
  const info = document.querySelector(".info");
  const sideinfo = document.querySelector(".sideinfo");
  const forecast = document.querySelector(".forecast");

  while (info.firstChild) info.removeChild(info.firstChild);
  while (sideinfo.firstChild) sideinfo.removeChild(sideinfo.firstChild);
  while (forecast.firstChild) forecast.removeChild(forecast.firstChild);
}

function showForecast(icon, maxtemp, mintemp, date, tempSystem) {
  const forecast = document.querySelector(".forecast");
  const container = document.createElement("div");
  const day = getDayString(date);

  container.appendChild(document.createElement("p")).textContent = day;

  container.appendChild(
    document.createElement("p")
  ).textContent = `${maxtemp} ${tempSystem}`;
  container.appendChild(
    document.createElement("p")
  ).textContent = `${mintemp} ${tempSystem}`;

  const img = document.createElement("img");
  img.src = icon.replace("//cdn.weatherapi.com", "../images");
  img.alt = "icon";
  container.appendChild(img);

  forecast.appendChild(container);
}

export function showInfo(data, tempSystem) {
  cleanInterface();
  showLocationAndTime(
    data.location.name,
    data.location.country,
    data.location.localtime,
    data.current.condition.text
  );
  showIcon(
    data.current.condition.icon,
    tempSystem === "°C" ? data.current.temp_c : data.current.temp_f,
    tempSystem
  );
  showOtherDetails(
    tempSystem === "°C" ? data.current.feelslike_c : data.current.feelslike_f,
    data.current.humidity,
    tempSystem === "°C" ? data.current.wind_kph : data.current.wind_mph,
    tempSystem
  );

  for (let i = 0; i < 3; i += 1) {
    showForecast(
      data.forecast.forecastday[i].day.condition.icon,
      tempSystem === "°C"
        ? data.forecast.forecastday[i].day.maxtemp_c
        : data.forecast.forecastday[i].day.maxtemp_f,
      tempSystem === "°C"
        ? data.forecast.forecastday[i].day.mintemp_c
        : data.forecast.forecastday[i].day.mintemp_f,
      data.forecast.forecastday[i].date,
      tempSystem
    );
  }

  document.getElementById("forecast-paragraph").classList.add("active");
}

export function placeholder() {}
