import { apiFetch } from "./fetch.mjs";

const weatherCurrent = document.querySelector('#weatherCurrent');
const weatherForecast = document.querySelector('#weatherForecast');
// Lima, Peru is located at -12.044943818207493 N latitude and -77.04384002525447 E longitude.
const lat = -12.042562348984829;
const lon = -77.04277112318785;
const units = 'metric';
const id = 'c6515b4c5bd745ac5745265f5a1f8511';
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${id}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${id}`;

// Current Weather content
const figure = document.createElement('figure');
const weatherIcon = document.createElement('img');
const captionDesc = document.createElement('figcaption');
figure.appendChild(weatherIcon);
figure.appendChild(captionDesc);
weatherCurrent.appendChild(figure);

const weatherData = await apiFetch(currentWeatherUrl);
displayCurrent(weatherData);

// Weather Forecast content
const forecastData = await apiFetch(forecastUrl);
const today = document.createElement('p');
const tomorrow = document.createElement('p');
const afterTom = document.createElement('p');
weatherForecast.appendChild(today);
weatherForecast.appendChild(tomorrow);
weatherForecast.appendChild(afterTom);
let day = forecastData.list;

const weekday = {
    weekday: 'long'
};

// Today
today.innerHTML = `Today: <strong>${day[0].main.temp}&deg;C</strong>`;

// Tomorrow
const tmwIndex = 6;
let day2 = new Date(day[tmwIndex].dt_txt);
day2 = day2.toLocaleDateString('en-US', weekday);
tomorrow.innerHTML = `${day2}: <strong>${day[tmwIndex].main.temp}&deg;C</strong>`;

// Day after tomorrow
const aftIndex = 14;
let day3 = new Date(day[aftIndex].dt_txt);
day3 = day3.toLocaleDateString('en-US', weekday);
afterTom.innerHTML = `${day3}: <strong>${day[aftIndex].main.temp}&deg;C</strong>`;

function displayCurrent(data) {
    // Get data
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    let temp = data.main

    // Hour config
    const hourFormat = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    };
    let sunrise = new Date(data.sys.sunrise * 1000);
    const sunriseHour = sunrise.toLocaleTimeString('en-US', hourFormat);
    let sunset = new Date(data.sys.sunset * 1000);
    const sunsetHour = sunset.toLocaleTimeString('en-US', hourFormat);
    
    // Add data to html
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', `${desc}`);
    captionDesc.innerHTML = `<strong>${temp.temp}&deg;C</strong>
        <br>${desc}
        <br>Feels like: ${temp.feels_like}
        <br>High: ${temp.temp_max}
        <br>Low: ${temp.temp_min}
        <br>Humidity: ${temp.humidity}%
        <br>Sunrise: ${sunriseHour}
        <br>Sunset: ${sunsetHour}`;
}
