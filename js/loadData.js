import * as icon from './icon.js'

if(localStorage.getItem('areaID') === null) {
//  output.innerHTML = 'data not found';
  firstTime.style.display ="grid";
} else {
//  output.innerHTML = localStorage.getItem('areaID');
  firstTime.style.display ="none";
  loading.style.display ="none";
  content.style.display = "block";

let areaID = localStorage.getItem('areaID');
let area = JSON.parse(areaID);
let prov = area.prov;
let kab = area.kab;
let kec = area.kec;
let API = area.API_URL;
kecKabText.innerHTML = `${kec}, ${kab}`;

fetch(`https://api.mininxd.my.id/bmkg/weather/${prov}/${kab}/${kec}`)
  .then(res => {
    return res.json();
  }).then(data => {
  console.log(data)
  temp.innerHTML = data.weatherNow.temperature;
  weather.innerHTML = data.weatherNow.weather;
  humidity.innerHTML = data.weatherNow.humidity;
  windSpeed.innerHTML = data.weatherNow.windSpeed;
  windDirection.innerHTML = data.weatherNow.windDirection;
  weatherIcon.style.transform = 'translateY(3px)'
  
for(var i=0; i < data.images.length; i++) {
  console.log(data.images[i])
  let img = document.createElement('img');
    img.src = data.images[i];
  images.append(img)
}


// Prakiraan Cuaca
let UA = navigator.userAgent; 
let regexp = /android|iphone|kindle|ipad/i; 
let mobile = regexp.test(UA); 
var j, k;
if(mobile == true) {
  k = 7;
} else {
  k = 10;
}
for(j=0; j < k; j++) {
let timeZ = data.dataWeather[j].time;
if(timeZ.includes("WIB")) {
  gmt.innerHTML = '+7'
  timeZone.innerHTML = 'Waktu Indonesia Barat'
} else if(timeZ.includes("WITA")) {
  gmt.innerHTML = '+8'
  timeZone.innerHTML = 'Waktu Indonesia Tengah'
} else if(timeZ.includes("WIT")) {
  gmt.innerHTML = '+9'
  timeZone.innerHTML = 'Waktu Indonesia Timur'
}
let time = data.dataWeather[j].time.replaceAll("WIB","").replaceAll("WITA","").replaceAll("WIT","");
let weather = data.dataWeather[j].weather;

let div = document.createElement('div');
let span = document.createElement('span');
let iconEl = document.createElement('div');

span.textContent = time;

 if (weather.includes('Cerah Berawan')) {
    iconEl.innerHTML = icon.CloudSunIconSmall();
  } 
  else if(weather.includes('Cerah')) {
    iconEl.innerHTML = icon.SunIconSmall();
  }
  else if(weather.includes('Berawan')) {
    iconEl.innerHTML = icon.CloudIconSmall();
  } 
  else if(weather.includes('Hujan')) {
    iconEl.innerHTML = icon.CloudRainIconSmall();
  } 
  else if(weather.includes('Gerimis')) {
    iconEl.innerHTML = icon.CloudDrizzleIconSmall();
  }


div.classList.add('prakiraanWrapper');

span.append(iconEl);
div.append(span);
prakiraan.append(div);

}

 if (data.weatherNow.weather.includes('Cerah Berawan')) {
    weatherIcon.innerHTML = icon.CloudSunIcon();
  } 
  else if(data.weatherNow.weather.includes('Cerah')) {
    weatherIcon.innerHTML = icon.SunIcon();
  }
  else if(data.weatherNow.weather.includes('Berawan')) {
    weatherIcon.innerHTML = icon.CloudIcon();
  } 
  else if(data.weatherNow.weather.includes('Hujan')) {
    weatherIcon.innerHTML = icon.CloudRainIcon();
  } 
  else if(data.weatherNow.weather.includes('Gerimis')) {
    weatherIcon.innerHTML = icon.CloudDrizzleIcon();
  }
  
  
  

jsonEl.value = JSON.stringify(data, null, 2)
apiUrl.textContent = API;

}).catch(e => {console.log(e)})

}
