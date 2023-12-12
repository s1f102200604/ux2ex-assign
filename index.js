const API_KEY_WEATHER = 'b5f2bcad1a3f31d97a7c4f6c2ed1c67e';
const URL = "https://api.openweathermap.org/data/2.5/weather?";

const CITY = 'q=Tokyo'; 

const url = URL + CITY + '&appid=' + API_KEY_WEATHER;

fetch(url)
.then(response => response.json())
.then((data) => {
    document.getElementById("name").innerHTML = 'City:' + data.name;
    document.getElementById("temp").innerHTML = 'Temperature:' + (data.main.temp - 273.2).toPrecision(3) + '℃';
    document.getElementById("temp_max").innerHTML = 'Maximum temperature:' + (data.main.temp_max - 273.2).toPrecision(3) + '℃';
    document.getElementById("temp_min").innerHTML = 'Lowest temperature:' + (data.main.temp_min - 273.2).toPrecision(3) + '℃';
    document.getElementById("humidity").innerHTML = 'Humidity:' + data.main.humidity + '%';
    displayWeatherImage(data.weather[0].main);
})

function displayWeatherImage(weatherDescription) {
    const weatherImageContainer = document.getElementById('weatherImage');
    const imgFolderPath = 'img/';
  
    // 天気に応じた画像ファイル名を取得
    const imageName = weatherDescription.toLowerCase().replace(' ', '_') + '.png';
    const imageUrl = imgFolderPath + imageName;
  
    // 画像を表示
    const weatherImage = document.createElement('img');
    weatherImage.src = imageUrl;
    weatherImage.alt = weatherDescription;
    weatherImageContainer.innerHTML = '';
    weatherImageContainer.appendChild(weatherImage);
  }