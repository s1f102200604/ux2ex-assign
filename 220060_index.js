const apiKey = 'b5f2bcad1a3f31d97a7c4f6c2ed1c67e';
let lat = 35.681236;
let lon = 139.767125;
let currentLocation = '東京都';
let daily_num = 0;
let currentWeatherData;

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
  var selectedOption = document.getElementById('selectOptions').value;

  if (selectedOption === "prefecture1") {
    lat = 43.420962;
    lon = 142.781281;
    currentLocation = "北海道";
  } else if (selectedOption === "prefecture2") {
    lat = 40.699056;
    lon = 142.781281;
    currentLocation = "青森県";
  } else if (selectedOption === "prefecture3") {
    lat = 39.511756;
    lon = 142.781281;
    currentLocation = "岩手県";
  } else if (selectedOption === "prefecture4") {
    lat = 38.381565;
    lon = 142.781281;
    currentLocation = "宮城県";
  } else if (selectedOption === "prefecture5") {
    lat = 39.678886;
    lon = 142.781281;
    currentLocation = "秋田県";
  } else if (selectedOption === "prefecture6") {
    lat = 38.497668;
    lon = 142.781281;
    currentLocation = "山形県";
  } else if (selectedOption === "prefecture7") {
    lat = 37.418743;
    lon = 142.781281;
    currentLocation = "福島県";
  } else if (selectedOption === "prefecture8") {
    lat = 36.304975;
    lon = 142.781281;
    currentLocation = "茨城県";
  } else if (selectedOption === "prefecture9") {
    lat = 36.683168;
    lon = 142.781281;
    currentLocation = "栃木県";
  } else if (selectedOption === "prefecture10") {
    lat = 36.481484;
    lon = 142.781281;
    currentLocation = "群馬県";
  } else if (selectedOption === "prefecture11") {
    lat = 36.003615;
    lon = 142.781281;
    currentLocation = "埼玉県";
  } else if (selectedOption === "prefecture12") {
    lat = 35.473969;
    lon = 142.781281;
    currentLocation = "千葉県";
  } else if (selectedOption === "prefecture13") {
    lat = 35.686991;
    lon = 142.781281;
    currentLocation = "東京都";
  } else if (selectedOption === "prefecture14") {
    lat = 35.40362;
    lon = 142.781281;
    currentLocation = "神奈川県";
  } else if (selectedOption === "prefecture15") {
    lat = 37.368708;
    lon = 142.781281;
    currentLocation = "新潟県";
  } else if (selectedOption === "prefecture16") {
    lat = 36.607484;
    lon = 142.781281;
    currentLocation = "富山県";
  } else if (selectedOption === "prefecture17") {
    lat = 36.772391;
    lon = 142.781281;
    currentLocation = "石川県";
  } else if (selectedOption === "prefecture18") {
    lat = 35.81261;
    lon = 142.781281;
    currentLocation = "福井県";
  } else if (selectedOption === "prefecture19") {
    lat = 35.609615;
    lon = 142.781281;
    currentLocation = "山梨県";
  } else if (selectedOption === "prefecture20") {
    lat = 36.149935;
    lon = 142.781281;
    currentLocation = "長野県";
  } else if (selectedOption === "prefecture21") {
    lat = 35.778724;
    lon = 142.781281;
    currentLocation = "岐阜県";
  } else if (selectedOption === "prefecture22") {
    lat = 35.033282;
    lon = 142.781281;
    currentLocation = "静岡県";
  } else if (selectedOption === "prefecture23") {
    lat = 35.002511;
    lon = 142.781281;
    currentLocation = "愛知県";
  } else if (selectedOption === "prefecture24") {
    lat = 34.484291;
    lon = 142.781281;
    currentLocation = "三重県";
  } else if (selectedOption === "prefecture25") {
    lat = 35.22592;
    lon = 142.781281;
    currentLocation = "滋賀県";
  } else if (selectedOption === "prefecture26") {
    lat = 35.220152;
    lon = 142.781281;
    currentLocation = "京都府";
  } else if (selectedOption === "prefecture27") {
    lat = 34.598366;
    lon = 142.781281;
    currentLocation = "大阪府";
  } else if (selectedOption === "prefecture28") {
    lat = 35.068625;
    lon = 142.781281;
    currentLocation = "兵庫県";
  } else if (selectedOption === "prefecture29") {
    lat = 34.292803;
    lon = 142.781281;
    currentLocation = "奈良県";
  } else if (selectedOption === "prefecture30") {
    lat = 33.848677;
    lon = 142.781281;
    currentLocation = "和歌山県";
  } else if (selectedOption === "prefecture31") {
    lat = 35.391534;
    lon = 142.781281;
    currentLocation = "鳥取県";
  } else if (selectedOption === "prefecture32") {
    lat = 34.975087;
    lon = 142.781281;
    currentLocation = "島根県";
  } else if (selectedOption === "prefecture33") {
    lat = 34.861972;
    lon = 142.781281;
    currentLocation = "岡山県";
  } else if (selectedOption === "prefecture34") {
    lat = 34.588492;
    lon = 142.781281;
    currentLocation = "広島県";
  } else if (selectedOption === "prefecture35") {
    lat = 34.226281;
    lon = 142.781281;
    currentLocation = "山口県";
  } else if (selectedOption === "prefecture36") {
    lat = 33.915461;
    lon = 142.781281;
    currentLocation = "徳島県";
  } else if (selectedOption === "prefecture37") {
    lat = 34.21968;
    lon = 142.781281;
    currentLocation = "香川県";
  } else if (selectedOption === "prefecture38") {
    lat = 33.661193;
    lon = 142.781281;
    currentLocation = "愛媛県";
  } else if (selectedOption === "prefecture39") {
    lat = 33.507085;
    lon = 142.781281;
    currentLocation = "高知県";
  } else if (selectedOption === "prefecture40") {
    lat = 33.599679;
    lon = 142.781281;
    currentLocation = "福岡県";
  } else if (selectedOption === "prefecture41") {
    lat = 33.279436;
    lon = 142.781281;
    currentLocation = "佐賀県";
  } else if (selectedOption === "prefecture42") {
    lat = 32.955619;
    lon = 142.781281;
    currentLocation = "長崎県";
  } else if (selectedOption === "prefecture43") {
    lat = 32.58723;
    lon = 142.781281;
    currentLocation = "熊本県";
  } else if (selectedOption === "prefecture44") {
    lat = 33.203809;
    lon = 142.781281;
    currentLocation = "大分県";
  } else if (selectedOption === "prefecture45") {
    lat = 32.200128;
    lon = 142.781281;
    currentLocation = "宮崎県";
  } else if (selectedOption === "prefecture46") {
    lat = 31.355836;
    lon = 142.781281;
    currentLocation = "鹿児島県";
  } else if (selectedOption === "prefecture47") {
    lat = 26.477084;
    lon = 142.781281;
    currentLocation = "沖縄県";
  }
  getWeather();
}

function switch_day(newDateTime) {
  daily_num = newDateTime;
  updateSiteInfo();
}

function updateSiteInfo() {
  displayWeatherDesc(WeatherData.daily[daily_num].weather[0].icon, WeatherData.daily[daily_num].weather[0].description); //詳細天気
  document.getElementById("temp").innerHTML = Math.ceil(WeatherData.daily[daily_num].temp.day) + '℃';
  document.getElementById("humidity").innerHTML = WeatherData.daily[daily_num].humidity + '%';
  document.getElementById("temp_max").innerHTML = Math.ceil(WeatherData.daily[daily_num].temp.max) + '℃';
  document.getElementById("temp_min").innerHTML = Math.ceil(WeatherData.daily[daily_num].temp.min) + '℃';
  document.getElementById("pop").innerHTML = Math.ceil(WeatherData.daily[daily_num].pop) + '%';
  document.getElementById("speed").innerHTML = Math.ceil(WeatherData.daily[daily_num].wind_speed) + 'm/s'; //風速
  convertWindToImage(WeatherData.daily[daily_num].wind_deg); //風向
  document.getElementById("pressure").innerHTML = WeatherData.daily[daily_num].pressure + 'hPa'; // 大気圧
  document.getElementById("clouds_amount").innerHTML = WeatherData.daily[daily_num].clouds + '%'; // 雲量
  displayHourlyWeatherDesc(WeatherData.hourly[0].weather[0].icon, WeatherData.hourly[0].weather[0].description, 1);
  displayHourlyWeatherDesc(WeatherData.hourly[3].weather[0].icon, WeatherData.hourly[3].weather[0].description, 2);
  displayHourlyWeatherDesc(WeatherData.hourly[6].weather[0].icon, WeatherData.hourly[6].weather[0].description, 3);
  displayHourlyWeatherDesc(WeatherData.hourly[9].weather[0].icon, WeatherData.hourly[9].weather[0].description, 4);
  displayHourlyWeatherDesc(WeatherData.hourly[12].weather[0].icon, WeatherData.hourly[12].weather[0].description, 5);
  displayHourlyWeatherDesc(WeatherData.hourly[15].weather[0].icon, WeatherData.hourly[15].weather[0].description, 6);
  displayHourlyWeatherDesc(WeatherData.hourly[18].weather[0].icon, WeatherData.hourly[18].weather[0].description, 7);
  displayHourlyWeatherDesc(WeatherData.hourly[21].weather[0].icon, WeatherData.hourly[21].weather[0].description, 8);
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

function displayHourlyWeatherDesc(icon, desc, i) {
  let imageUrl = 'https://openweathermap.org/img/wn/' + icon + '@2x.png';
  let id = 'weather' + String(i)
  document.getElementById(id).innerHTML = desc + "<img src='" + imageUrl + "' alt='NoImage'>";
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
  document.getElementById('deg').innerHTML = "<img class='responsive-image' src='" + imageUrl + "' alt='NoImage'>";
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

  document.getElementById('btnDay1').textContent = day1.toLocaleDateString('ja-JP', {
    month: 'numeric',
    day: 'numeric',
    weekday: 'long',
  }).replace(/(\d+)\/(\d+) (.+)/, '$1 / $2 ($4)');
  document.getElementById('btnDay2').textContent = day2.toLocaleDateString('ja-JP', {
    month: 'numeric',
    day: 'numeric',
    weekday: 'long',
  }).replace(/(\d+)\/(\d+) (.+)/, '$1 / $2 ($4)');
  document.getElementById('btnDay3').textContent = day3.toLocaleDateString('ja-JP', {
    month: 'numeric',
    day: 'numeric',
    weekday: 'long',
  }).replace(/(\d+)\/(\d+) (.+)/, '$1 / $2 ($4)');
  document.getElementById('btnDay4').textContent = day4.toLocaleDateString('ja-JP', {
    month: 'numeric',
    day: 'numeric',
    weekday: 'long',
  }).replace(/(\d+)\/(\d+) (.+)/, '$1 / $2 ($4)');
  document.getElementById('btnDay5').textContent = day5.toLocaleDateString('ja-JP', {
    month: 'numeric',
    day: 'numeric',
    weekday: 'long',
  }).replace(/(\d+)\/(\d+) (.+)/, '$1 / $2 ($4)');
});