function switch_day(day) {
  list_num = (Math.floor(new Date().getHours() / 3) - 1) + (8 * day);
  fetchWeatherData();
}

function switch_3hour(hour) {
  list_num = (Math.floor(new Date().getHours() / 3) - 1) + hour;
  fetchWeatherData();
}

const apiKey = 'b5f2bcad1a3f31d97a7c4f6c2ed1c67e';
const city = 'Tokyo,jp';
var list_num = Math.floor(new Date().getHours() / 3) - 1
const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast';

const APIURL_now = 'https://api.openweathermap.org/data/2.5/weather'
const URL_now = `${APIURL_now}?q=${city}&appid=${apiKey}`

fetch(URL_now)
.then(response => response.json())
.then((data) => {
    document.getElementById("name").innerHTML = data.name;
    document.getElementById("temp").innerHTML = (data.main.temp - 273.2).toPrecision(3) + '℃';
    document.getElementById("temp_max").innerHTML = (data.main.temp_max - 273.2).toPrecision(3) + '℃';
    document.getElementById("temp_min").innerHTML = (data.main.temp_min - 273.2).toPrecision(3) + '℃';
    document.getElementById("humidity").innerHTML = data.main.humidity + '%';
    displayWeatherImage(data.weather[0].main); 
    displayWeatherDesc(data.weather[0].icon, data.weather[0].description);//詳細天気
    document.getElementById("sunrise").innerHTML = (new Date(data.sys.sunrise * 1000)).toLocaleTimeString(); // 日の出
    document.getElementById("sunset").innerHTML = (new Date(data.sys.sunset * 1000)).toLocaleTimeString(); // 日の入り
    document.getElementById("speed").innerHTML = data.wind.speed + 'm/s';//風速
    convertWindToImage(data.wind.deg);//風向
    document.getElementById("pressure").innerHTML = data.main.pressure + 'hPa'; // 大気圧
    document.getElementById("clouds_amount").innerHTML = data.clouds.all + '%'; // 雲量
  });

function fetchWeatherData() {
  const time = Math.floor(Date.now() / 1000);
  const url = `${apiUrl}?q=${city}&appid=${apiKey}&dt=${time}`;

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      document.getElementById("name").innerHTML = data.city.name;
      document.getElementById("temp").innerHTML = (data.list[list_num].main.temp - 273.2).toPrecision(3) + '℃';
      document.getElementById("temp_max").innerHTML = (data.list[list_num].main.temp_max - 273.2).toPrecision(3) + '℃';
      document.getElementById("temp_min").innerHTML = (data.list[list_num].main.temp_min - 273.2).toPrecision(3) + '℃';
      document.getElementById("humidity").innerHTML = data.list[list_num].main.humidity + '%';
      displayWeatherImage(data.list[list_num].weather[0].main);
      displayWeatherDesc(data.list[list_num].weather[0].icon, data.list[list_num].weather[0].description); //詳細天気
      document.getElementById("sunrise").innerHTML = (new Date(data.city.sunrise * 1000)).toLocaleTimeString(); // 日の出
      document.getElementById("sunset").innerHTML = (new Date(data.city.sunset * 1000)).toLocaleTimeString(); // 日の入り
      document.getElementById("speed").innerHTML = data.list[list_num].wind.speed + 'm/s'; //風速
      convertWindToImage(data.list[list_num].wind.deg); //風向
      document.getElementById("pressure").innerHTML = data.list[list_num].main.pressure + 'hPa'; // 大気圧
      document.getElementById("clouds_amount").innerHTML = data.list[list_num].clouds.all + '%'; // 雲量
      console.log(Math.floor(Date.now() / 1000));
    })
};


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

// JavaScriptを使用して子要素の合計幅を計算し、必要に応じて親要素にスクロールを有効にする
document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.parent3');
  const children = container.children;
  let totalWidth = 0;
  for (let i = 0; i < children.length; i++) {
    totalWidth += children[i].offsetWidth;
  }
  if (totalWidth > container.offsetWidth) {
    container.style.overflowX = 'scroll';
  }
});