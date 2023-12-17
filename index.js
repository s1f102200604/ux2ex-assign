const apiKey = 'b5f2bcad1a3f31d97a7c4f6c2ed1c67e';
const city = 'Tokyo,jp';
const day = 0
const hour = 0
const time = Math.floor(Date.now() / 1000) + ((-3 + hour + day) * 60 * 60);
const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast';


const url = `${apiUrl}?q=${city}&appid=${apiKey}&dt=${time}`;

fetch(url)
  .then(response => response.json())
  .then((data) => {
    document.getElementById("name").innerHTML = data.city.name;
    document.getElementById("temp").innerHTML = (data.list[0].main.temp - 273.2).toPrecision(3) + '℃';
    document.getElementById("temp_max").innerHTML = (data.list[0].main.temp_max - 273.2).toPrecision(3) + '℃';
    document.getElementById("temp_min").innerHTML = (data.list[0].main.temp_min - 273.2).toPrecision(3) + '℃';
    document.getElementById("humidity").innerHTML = data.list[0].main.humidity + '%';
    displayWeatherImage(data.list[0].weather[0].main);
    displayWeatherDesc(data.list[0].weather[0].icon, data.list[0].weather[0].description); //詳細天気
    document.getElementById("sunrise").innerHTML = (new Date(data.city.sunrise * 1000)).toLocaleTimeString(); // 日の出
    document.getElementById("sunset").innerHTML = (new Date(data.city.sunset * 1000)).toLocaleTimeString(); // 日の入り
    document.getElementById("speed").innerHTML = data.list[0].wind.speed + 'm/s'; //風速
    convertWindToImage(data.list[0].wind.deg); //風向
    document.getElementById("pressure").innerHTML = data.list[0].main.pressure + 'hPa'; // 大気圧
    document.getElementById("clouds_amount").innerHTML = data.list[0].clouds.all + '%'; // 雲量
    console.log(Math.floor(Date.now() / 1000));
});


function displayWeatherDesc(icon, desc) {
  var imageUrl = 'https://openweathermap.org/img/wn/' + icon + '@2x.png';
  document.getElementById('description').innerHTML = desc + "<img src='" + imageUrl + "' alt='NoImage'>";
}

function displayWeatherImage(weatherMain) {
  var imageUrl = 'weather_img/' + weatherMain + '.png';
  document.getElementById('weatherImage').innerHTML = "<img src='" + imageUrl + "' alt='NoImage'>";
}

// 風向を度数から画像に変換する関数
function convertWindToImage(degrees) {
  var arrowImages = [
    "arrow-n.png", "arrow-nne.png", "arrow-ne.png", "arrow-ene.png",
    "arrow-e.png", "arrow-ese.png", "arrow-se.png", "arrow-sse.png",
    "arrow-s.png", "arrow-ssw.png", "arrow-sw.png", "arrow-wsw.png",
    "arrow-w.png", "arrow-wnw.png", "arrow-nw.png", "arrow-nnw.png"
  ];
  var index = Math.round((degrees % 360) / 22.5);
  var imageUrl = 'deg_img/' + arrowImages[(index + 16) % 16];
  document.getElementById('deg').innerHTML = "<img src='" + imageUrl + "' alt='NoImage'>";
}

function switch_day(day) {
  const after_time = day * 24 ;
}

function switch_3hour(hour) {
  const after_hour = hour;
}