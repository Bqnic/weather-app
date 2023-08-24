import getDayString from "./getDayString";

function showIcon(link, temp, tempSystem) {
  const info = document.querySelector(".info");

  const div = document.createElement("div");
  div.classList.add("icon-and-temp");
  const img = document.createElement("img");
  const icon = link.replace("//cdn.weatherapi.com", "images");
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
  feelsLikeImg.src = "images/thermometer.svg";
  feelsLikeImg.alt = "thermometer";

  const humidityImg = document.createElement("img");
  humidityImg.classList.add("icon");
  humidityImg.src = "images/water-outline.svg";
  humidityImg.alt = "humidity-icon";

  const windImg = document.createElement("img");
  windImg.classList.add("icon");
  windImg.src = "images/weather-windy.svg";
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

function cleanMainInterface() {
  const info = document.querySelector(".info");
  const sideinfo = document.querySelector(".sideinfo");

  while (info.firstChild) info.removeChild(info.firstChild);
  while (sideinfo.firstChild) sideinfo.removeChild(sideinfo.firstChild);
}

function cleanForecastInterface() {
  const forecast = document.querySelector(".forecast");
  while (forecast.firstChild) forecast.removeChild(forecast.firstChild);
}

function showForecast(icon, maxtemp, mintemp, date, tempSystem) {
  const forecast = document.querySelector(".forecast");
  const container = document.createElement("div");
  container.classList.add("day-forecast-div");
  const day = getDayString(date);

  container.appendChild(document.createElement("p")).textContent = day;

  container.appendChild(
    document.createElement("p")
  ).textContent = `${maxtemp} ${tempSystem}`;
  container.appendChild(
    document.createElement("p")
  ).textContent = `${mintemp} ${tempSystem}`;

  const img = document.createElement("img");
  img.src = icon.replace("//cdn.weatherapi.com", "images");
  img.alt = "icon";
  container.appendChild(img);

  forecast.appendChild(container);
}

function calculateNext12Hours(
  hour,
  forecastToday,
  forecastTomorrow,
  tempSystem
) {
  const forecast = document.querySelector(".forecast");

  let count = 0;
  for (let i = Number(hour); i < 24 && count < 12; i += 1, count += 1) {
    const container = document.createElement("div");
    container.classList.add("hour-forecast-div");

    container.appendChild(document.createElement("p")).textContent = `${i}:00`;

    container.appendChild(document.createElement("p")).textContent = `${
      tempSystem === "°C" ? forecastToday[i].temp_c : forecastToday[i].temp_f
    } ${tempSystem}`;

    const img = document.createElement("img");
    img.src = forecastToday[i].condition.icon.replace(
      "//cdn.weatherapi.com",
      "images"
    );
    img.alt = "icon";
    container.appendChild(img);
    forecast.appendChild(container);
  }

  if (count < 12) {
    for (let i = 0; count < 12; i += 1, count += 1) {
      const container = document.createElement("div");
      container.classList.add("hour-forecast-div");

      container.appendChild(
        document.createElement("p")
      ).textContent = `${i}:00`;

      container.appendChild(document.createElement("p")).textContent = `${
        tempSystem === "°C"
          ? forecastTomorrow[i].temp_c
          : forecastTomorrow[i].temp_f
      } ${tempSystem}`;

      const img = document.createElement("img");
      img.src = forecastTomorrow[i].condition.icon.replace(
        "//cdn.weatherapi.com",
        "images"
      );
      img.alt = "icon";
      container.appendChild(img);
      forecast.appendChild(container);
    }
  }
}

export function showForecastInfo(data, tempSystem, activeForecast) {
  cleanForecastInterface();

  if (activeForecast === "day") {
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
  } else {
    calculateNext12Hours(
      data.location.localtime.split(" ")[1].split(":")[0],
      data.forecast.forecastday[0].hour,
      data.forecast.forecastday[1].hour,
      tempSystem
    );
  }

  document
    .querySelectorAll(".forecast-paragraph")
    .forEach((p) => p.classList.add("active"));
}

export function showInfo(data, tempSystem, activeForecast) {
  cleanMainInterface();

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
  showForecastInfo(data, tempSystem, activeForecast);
}
