const apiKey = 'b5f2bcad1a3f31d97a7c4f6c2ed1c67e';
let lat = 35.681236; 
let lon = 139.767125; 
let currentLocation = 'Tokyo'; 
let list_num = 0;
let currentWeatherData;
const googleapikey = 'AIzaSyDRmb1gRM0pb0-VHN8cSSUPE7s10cY4y-U';


function getWeather() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&lang=ja&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then((data) => {
            currentDate = new Date();
            WeatherData = data;
            updateSiteInfo();
        });
}

function changeLocation() {
  const locationInput = document.getElementById('cityInput').value;
  const geo_apiKey = 'AIzaSyDRmb1gRM0pb0-VHN8cSSUPE7s10cY4y-U';
  const geocodingApiUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURI(locationInput) + '&key=' + geo_apiKey ;

  fetch(geocodingApiUrl)
    .then(response => response.json())
    .then((data) => {
      lat = data.results[0].geometry.location.lat;
      lon = data.results[0].geometry.location.lng;
      updateSiteInfo();
    });
  }


function switch_day(newDateTime) {
  list_num = newDateTime;
  updateSiteInfo();
}

function updateSiteInfo() {
  document.getElementById("name").innerHTML = currentLocation;
  document.getElementById("temp").innerHTML = (WeatherData.daily[list_num].temp.day).toPrecision(3) + '℃';
  document.getElementById("temp_max").innerHTML = (WeatherData.daily[list_num].temp.max).toPrecision(3) + '℃';
  document.getElementById("temp_min").innerHTML = (WeatherData.daily[list_num].temp.min).toPrecision(3) + '℃';
  document.getElementById("humidity").innerHTML = WeatherData.daily[list_num].humidity + '%';
  displayWeatherImage(WeatherData.daily[list_num].weather[0].main);
  displayWeatherDesc(WeatherData.daily[list_num].weather[0].icon, WeatherData.daily[list_num].weather[0].description); //詳細天気
  document.getElementById("sunrise").innerHTML = (new Date(WeatherData.daily[list_num].sunrise * 1000)).toLocaleTimeString(); // 日の出
  document.getElementById("sunset").innerHTML = (new Date(WeatherData.daily[list_num].sunset * 1000)).toLocaleTimeString(); // 日の入り
  document.getElementById("speed").innerHTML = WeatherData.daily[list_num].wind_speed + 'm/s'; //風速
  convertWindToImage(WeatherData.daily[list_num].wind_deg); //風向
  document.getElementById("pressure").innerHTML = WeatherData.daily[list_num].pressure + 'hPa'; // 大気圧
  document.getElementById("clouds_amount").innerHTML = WeatherData.daily[list_num].clouds + '%'; // 雲量
}

// 初期化時に現在の天気を取得
getWeather();

function displayWeatherDesc(icon, desc) {
  let imageUrl = 'https://openweathermap.org/img/wn/' + icon + '@2x.png';
  document.getElementById('description').innerHTML = desc + "<img src='" + imageUrl + "' alt='NoImage'>";
}

function displayWeatherImage(weatherMain) {
  let imageUrl = '220060_weather_img/' + weatherMain + '.png';
  document.getElementById('weatherImage').innerHTML = "<img src='" + imageUrl + "' alt='NoImage'>";
}

function convertWindToImage(degrees) {
  let arrowImages = [
    "arrow-n.png", "arrow-nne.png", "arrow-ne.png", "arrow-ene.png",
    "arrow-e.png", "arrow-ese.png", "arrow-se.png", "arrow-sse.png",
    "arrow-s.png", "arrow-ssw.png", "arrow-sw.png", "arrow-wsw.png",
    "arrow-w.png", "arrow-wnw.png", "arrow-nw.png", "arrow-nnw.png"
  ];
  let index = Math.round((degrees % 360) / 22.5);
  let imageUrl = '220060_deg_img/' + arrowImages[(index + 16) % 16];
  document.getElementById('deg').innerHTML = "<img src='" + imageUrl + "' alt='NoImage'>";
}

document.addEventListener('DOMContentLoaded', function () {

  const day1 = new Date();
  const day2 = new Date();
  day2.setDate(day1.getDate() + 1)
  const day3 = new Date();
  day3.setDate(day1.getDate() + 2)
  const day4 = new Date();
  day4.setDate(day1.getDate() + 3)
  const day5 = new Date();
  day5.setDate(day1.getDate() + 4)

  document.getElementById('btnDay1').textContent = day1.toLocaleDateString('ja-JP', {year: 'numeric', month: 'numeric', day: 'numeric', weekday: 'long',}).replace(/(\d+)\/(\d+)\/(\d+) (.+)/, '$1 / $2 ($4)');
  document.getElementById('btnDay2').textContent = day2.toLocaleDateString('ja-JP', {year: 'numeric', month: 'numeric', day: 'numeric', weekday: 'long',}).replace(/(\d+)\/(\d+)\/(\d+) (.+)/, '$1 / $2 ($4)');
  document.getElementById('btnDay3').textContent = day3.toLocaleDateString('ja-JP', {year: 'numeric', month: 'numeric', day: 'numeric', weekday: 'long',}).replace(/(\d+)\/(\d+)\/(\d+) (.+)/, '$1 / $2 ($4)');
  document.getElementById('btnDay4').textContent = day4.toLocaleDateString('ja-JP', {year: 'numeric', month: 'numeric', day: 'numeric', weekday: 'long',}).replace(/(\d+)\/(\d+)\/(\d+) (.+)/, '$1 / $2 ($4)');
  document.getElementById('btnDay5').textContent = day5.toLocaleDateString('ja-JP', {year: 'numeric', month: 'numeric', day: 'numeric', weekday: 'long',}).replace(/(\d+)\/(\d+)\/(\d+) (.+)/, '$1 / $2 ($4)');
});