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
const UA = navigator.userAgent;
const isMobile = /android|iphone|kindle|ipad/i.test(UA);
let j;
const k = isMobile ? Math.min(7, data.dataWeather.length) : Math.min(10, data.dataWeather.length);

for(j=0; j < k; j++) {
let times = data.dataWeather[j].time;
if(times.includes("WIB")) {
  gmt.innerHTML = 'GMT +7 | '
  timeZone.innerHTML = 'Waktu Indonesia Barat'
} else if(times.includes("WITA")) {
  gmt.innerHTML = 'GMT +8 | '
  timeZone.innerHTML = 'Waktu Indonesia Tengah'
} else if(times.includes("WIT")) {
  gmt.innerHTML = 'GMT +9 | '
  timeZone.innerHTML = 'Waktu Indonesia Timur'
}



let weather = data.dataWeather[j].weather;

let div = document.createElement('div');
let span = document.createElement('span');
let iconEl = document.createElement('div');

let jam = times.replaceAll("WIB","").replaceAll("WITA","").replaceAll("WIT","");
span.textContent = jam;

 if (weather.includes('Cerah Berawan')) {
    iconEl.innerHTML = icon.CloudSunIconSmall();
  } 
  else if(weather.includes('Cerah')) {
    iconEl.innerHTML = icon.SunIconSmall();
  }
  else if(weather.includes('Berawan Tebal')) {
    iconEl.innerHTML = icon.HeavyCloudIconSmall();
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
  else if(weather.includes('Udara Kabur')) {
    iconEl.innerHTML = icon.CloudFogIconSmall();
  }
  else if(weather.includes('Berangin')) {
    iconEl.innerHTML = icon.WindIconSmall();
  }
  else if(weather.includes('Kabut')) {
    iconEl.innerHTML = icon.FogIconSmall();
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
  else if(data.weatherNow.weather.includes('Berawan Tebal')) {
    weatherIcon.innerHTML = icon.HeavyCloudIcon();
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
  else if(data.weatherNow.weather.includes('Udara Kabur')) {
    weatherIcon.innerHTML = icon.CloudFogIcon();
  }
  else if(data.weatherNow.weather.includes('Berangin')) {
    weatherIcon.innerHTML = icon.WindIcon();
  }
  else if(data.weatherNow.weather.includes('Kabut')) {
    weatherIcon.innerHTML = icon.FogIcon();
  }
  

  

jsonEl.value = JSON.stringify(data, null, 2)
apiUrl.textContent = API;

}).catch(e => {console.log(e)})

}
