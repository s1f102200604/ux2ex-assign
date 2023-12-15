const API_KEY_WEATHER = 'b5f2bcad1a3f31d97a7c4f6c2ed1c67e';
const URL = "https://api.openweathermap.org/data/2.5/weather?";

const CITY = 'q=Tokyo'; 

const url = URL + CITY + '&appid=' + API_KEY_WEATHER;

fetch(url)
.then(response => response.json())
.then((data) => {
    document.getElementById("name").innerHTML = data.name;
    document.getElementById("temp").innerHTML = (data.main.temp - 273.2).toPrecision(3) + '℃';
    document.getElementById("temp_max").innerHTML = (data.main.temp_max - 273.2).toPrecision(3) + '℃';
    document.getElementById("temp_min").innerHTML = (data.main.temp_min - 273.2).toPrecision(3) + '℃';
    document.getElementById("humidity").innerHTML = data.main.humidity + '%';
    displayWeatherImage(data.weather[0].main); 
    document.getElementById("description").innerHTML = data.weather[0].description;//詳細天気
    document.getElementById("sunrise").innerHTML = (new Date(data.sys.sunrise * 1000)).toLocaleTimeString(); // 日の出
    document.getElementById("sunset").innerHTML = (new Date(data.sys.sunset * 1000)).toLocaleTimeString(); // 日の入り
    document.getElementById("speed").innerHTML = data.wind.speed + 'm/s';//風速
    document.getElementById("deg").innerHTML = convertWindDirection(data.wind.deg);//風向
    document.getElementById("pressure").innerHTML = data.main.pressure + 'hPa'; // 大気圧
    document.getElementById("clouds_amount").innerHTML = data.clouds.all + '%'; // 雲量
  });

  function displayWeatherImage(weatherMain) {
    const weatherImageContainer = document.getElementById('weatherImage');
    const weatherImage = document.createElement('img');
    const parentWidth = weatherImageContainer.parentElement.offsetWidth;
    weatherImage.src = 'img/' + weatherMain.toLowerCase() + '.png';
    weatherImage.style.width = parentWidth + 'px';
    weatherImage.alt = weatherMain;
    weatherImageContainer.innerHTML = '';
    weatherImageContainer.appendChild(weatherImage);
  }

  function convertWindDirection(degrees) {
    var directions = ["北", "北北東", "北東", "東北東", "東", "東南東", "南東", "南南東", "南", "南南西", "南西", "西南西", "西", "西北西", "北西", "北北西"];
    var index = Math.round((degrees % 360) / 22.5);
    return directions[(index + 16) % 16];
  }