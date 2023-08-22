function showIcon(link, temp) {
  const info = document.querySelector(".info");

  const div = document.createElement("div");
  div.classList.add("icon-and-temp");
  const img = document.createElement("img");
  const icon = link.replace("//cdn.weatherapi.com", "../images");
  img.src = icon;
  img.alt = "icon";

  div.appendChild(img);
  div.appendChild(document.createElement("p")).textContent = `${temp} °C`;

  info.appendChild(div);
}

function showLocationAndTime(name, country) {
  const info = document.querySelector(".info");
  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes();

  info.appendChild(document.createElement("p")).textContent = name;
  info.appendChild(document.createElement("p")).textContent = country;
  info.appendChild(
    document.createElement("p")
  ).textContent = `Today, ${hours}:${minutes}`;
}

function showOtherDetails(feelsLike, humidity, wind) {
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
  ).textContent = `${feelsLike} °C`;

  textDiv.appendChild(document.createElement("p")).textContent = "Humidity";
  textDiv.appendChild(document.createElement("p")).textContent = `${humidity}%`;

  textDiv.appendChild(document.createElement("p")).textContent = "Wind speed";
  textDiv.appendChild(document.createElement("p")).textContent = `${wind} km/h`;

  sideinfo.appendChild(imagesDiv);
  sideinfo.appendChild(textDiv);
}
function cleanInterface() {
  const info = document.querySelector(".info");
  const sideinfo = document.querySelector(".sideinfo");
  while (info.firstChild) info.removeChild(info.firstChild);
  while (sideinfo.firstChild) sideinfo.removeChild(sideinfo.firstChild);
}

export function showInfo(data) {
  cleanInterface();
  showLocationAndTime(data.location.name, data.location.country);
  showIcon(data.current.condition.icon, data.current.temp_c);
  showOtherDetails(
    data.current.feelslike_c,
    data.current.humidity,
    data.current.wind_kph
  );
}

export function placeholder() {}
