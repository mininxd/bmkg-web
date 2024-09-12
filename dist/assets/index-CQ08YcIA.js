(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const t of a.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&i(t)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();fetch("https://api.mininxd.my.id/bmkg/area/prov").then(o=>o.json()).then(o=>{loading.style.display="none",login.style.display="block",infoData.innerHTML="Data akan tersimpan dalam cache browser, tekan reset data untuk mengubah lokasi";for(var n=0;n<o.length;n++){const r=document.createElement("option");r.value=o[n],r.text=o[n],inputProv.appendChild(r)}}).catch(o=>{loading.style.display="none",login.style.display="block",infoData.innerHTML='Gagal mengambil data provinsi <a id="refresh">refresh</a>',infoData.classList.add("danger"),console.error(o)});inputProv.addEventListener("input",async function(){inputKab.disabled=!0,inputKec.disabled=!0;const o=inputProv.value;try{const r=await f(o);inputKab.options.length=0;const i=document.createElement("option");i.value="pilih kabupaten",i.text="Pilih Kabupaten",i.selected=!0,i.disabled=!0,inputKab.appendChild(i);for(var n=0;n<r.length;n++){const e=document.createElement("option");e.value=r[n],e.text=r[n],inputKab.appendChild(e)}inputKab.disabled=!1}catch(r){console.error(`Error fetching kabupaten: ${r.message}`)}});inputKab.addEventListener("input",async function(){inputKec.disabled=!0;const o=inputKab.value,n=inputProv.value;try{const i=await k(n,o);inputKec.options.length=0;const e=document.createElement("option");e.value="pilih kecamatan",e.text="Pilih Kecamatan",e.selected=!0,e.disabled=!0,inputKec.appendChild(e);for(var r=0;r<i.length;r++){const a=document.createElement("option");a.value=i[r],a.text=i[r],inputKec.appendChild(a)}inputKec.disabled=!1}catch(i){console.error(`Error fetching kecamatan: ${i.message}`)}});inputKec.addEventListener("change",function(){submitLokasi.disabled=!1,submitLokasi.innerHTML="simpan dan jalankan"});submitLokasi.addEventListener("click",function(){localStorage.setItem("areaID",`{
    "prov":"${inputProv.value}",
    "kab":"${inputKab.value}",
    "kec":"${inputKec.value}",
    "API_URL":"https://api.mininxd.my.id/bmkg/weather/${inputProv.value}/${inputKab.value}/${inputKec.value}"
  }`),window.location.reload()});async function f(o){try{return await(await fetch(`https://api.mininxd.my.id/bmkg/area/${o}`)).json()}catch(n){throw console.error(`Error fetching kabupaten: ${n.message}`),n}}async function k(o,n){try{return await(await fetch(`https://api.mininxd.my.id/bmkg/area/${o}/${n}`)).json()}catch(r){throw console.error(`Error fetching kecamatan: ${r.message}`),r}}function M(){return`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="M20 12h2" />
      <path d="m19.07 4.93-1.41 1.41" />
      <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" />
      <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" />
    </svg>
  `}function L(){return`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="M20 12h2" />
      <path d="m19.07 4.93-1.41 1.41" />
      <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" />
      <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" />
    </svg>
  `}function b(){return`
    <svg
 xmlns="http://www.w3.org/2000/svg"
  width="64" 
  height="64" 
 viewBox="0 0 24 24"
 fill="none"
 stroke="currentColor"
 strokeWidth="2"
 strokeLinecap="round"
 strokeLinejoin="round"
    >
 <circle cx="12" cy="12" r="4" />
 <path d="M12 2v2" />
 <path d="M12 20v2" />
 <path d="m4.93 4.93 1.41 1.41" />
 <path d="m17.66 17.66 1.41 1.41" />
 <path d="M2 12h2" />
 <path d="M20 12h2" />
 <path d="m6.34 17.66-1.41 1.41" />
 <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  `}function y(){return`
    <svg
 xmlns="http://www.w3.org/2000/svg"
  width="32" 
  height="32" 
 viewBox="0 0 24 24"
 fill="none"
 stroke="currentColor"
 strokeWidth="2"
 strokeLinecap="round"
 strokeLinejoin="round"
    >
 <circle cx="12" cy="12" r="4" />
 <path d="M12 2v2" />
 <path d="M12 20v2" />
 <path d="m4.93 4.93 1.41 1.41" />
 <path d="m17.66 17.66 1.41 1.41" />
 <path d="M2 12h2" />
 <path d="M20 12h2" />
 <path d="m6.34 17.66-1.41 1.41" />
 <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  `}function x(){return`
    <svg

 xmlns="http://www.w3.org/2000/svg"
  width="64" 
  height="64" 
 viewBox="0 0 24 24"
 fill="none"
 stroke="currentColor"
 strokeWidth="2"
 strokeLinecap="round"
 strokeLinejoin="round"
    >
 <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  `}function I(){return`
    <svg

 xmlns="http://www.w3.org/2000/svg"
  width="32" 
  height="32" 
 viewBox="0 0 24 24"
 fill="none"
 stroke="currentColor"
 strokeWidth="2"
 strokeLinecap="round"
 strokeLinejoin="round"
    >
 <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  `}function H(){return`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M16 17H7" />
      <path d="M17 21H9" />
    </svg>
  `}function T(){return`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M16 17H7" />
      <path d="M17 21H9" />
    </svg>
  `}function C(){return`
    <svg

 xmlns="http://www.w3.org/2000/svg"
  width="64" 
  height="64" 
 viewBox="0 0 24 24"
 fill="none"
 stroke="currentColor"
 strokeWidth="2"
 strokeLinecap="round"
 strokeLinejoin="round"
    >
 <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
 <path d="M16 14v6" />
 <path d="M8 14v6" />
 <path d="M12 16v6" />
    </svg>
  `}function K(){return`
    <svg

 xmlns="http://www.w3.org/2000/svg"
  width="32" 
  height="32" 
 viewBox="0 0 24 24"
 fill="none"
 stroke="currentColor"
 strokeWidth="2"
 strokeLinecap="round"
 strokeLinejoin="round"
    >
 <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
 <path d="M16 14v6" />
 <path d="M8 14v6" />
 <path d="M12 16v6" />
    </svg>
  `}function W(){return`
    <svg

 xmlns="http://www.w3.org/2000/svg"
  width="64" 
  height="64" 
 viewBox="0 0 24 24"
 fill="none"
 stroke="currentColor"
 strokeWidth="2"
 strokeLinecap="round"
 strokeLinejoin="round"
    >
 <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
 <path d="M8 19v1" />
 <path d="M8 14v1" />
 <path d="M16 19v1" />
 <path d="M16 14v1" />
 <path d="M12 21v1" />
 <path d="M12 16v1" />
    </svg>
  `}function E(){return`
    <svg

 xmlns="http://www.w3.org/2000/svg"
  width="32" 
  height="32" 
 viewBox="0 0 24 24"
 fill="none"
 stroke="currentColor"
 strokeWidth="2"
 strokeLinecap="round"
 strokeLinejoin="round"
    >
 <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
 <path d="M8 19v1" />
 <path d="M8 14v1" />
 <path d="M16 19v1" />
 <path d="M16 14v1" />
 <path d="M12 21v1" />
 <path d="M12 16v1" />
    </svg>
  `}if(localStorage.getItem("areaID")===null)firstTime.style.display="grid";else{firstTime.style.display="none",loading.style.display="none",content.style.display="block";let o=localStorage.getItem("areaID"),n=JSON.parse(o),r=n.prov,i=n.kab,e=n.kec,a=n.API_URL;kecKabText.innerHTML=`${e}, ${i}`,fetch(`https://api.mininxd.my.id/bmkg/weather/${r}/${i}/${e}`).then(t=>t.json()).then(t=>{console.log(t),temp.innerHTML=t.weatherNow.temperature,weather.innerHTML=t.weatherNow.weather,humidity.innerHTML=t.weatherNow.humidity,windSpeed.innerHTML=t.weatherNow.windSpeed,windDirection.innerHTML=t.weatherNow.windDirection,weatherIcon.style.transform="translateY(3px)";for(var h=0;h<t.images.length;h++){console.log(t.images[h]);let s=document.createElement("img");s.src=t.images[h],images.append(s)}const w=navigator.userAgent,g=/android|iphone|kindle|ipad/i.test(w);let c;const m=Math.min(g?7:10,t.dataWeather.length);for(c=0;c<m;c++){let s=t.dataWeather[c].time;s.includes("WIB")?(gmt.innerHTML="GMT +7",timeZone.innerHTML="Waktu Indonesia Barat"):s.includes("WITA")?(gmt.innerHTML="GMT +8",timeZone.innerHTML="Waktu Indonesia Tengah"):s.includes("WIT")&&(gmt.innerHTML="GMT +9",timeZone.innerHTML="Waktu Indonesia Timur");let d=t.dataWeather[c].weather,p=document.createElement("div"),u=document.createElement("span"),l=document.createElement("div"),v=s.replaceAll("WIB","").replaceAll("WITA","").replaceAll("WIT","");u.textContent=v,d.includes("Cerah Berawan")?l.innerHTML=L():d.includes("Cerah")?l.innerHTML=y():d.includes("Berawan")?l.innerHTML=I():d.includes("Hujan")?l.innerHTML=K():d.includes("Gerimis")?l.innerHTML=E():d.includes("Udara Kabur")&&(l.innerHTML=T()),p.classList.add("prakiraanWrapper"),u.append(l),p.append(u),prakiraan.append(p)}t.weatherNow.weather.includes("Cerah Berawan")?weatherIcon.innerHTML=M():t.weatherNow.weather.includes("Cerah")?weatherIcon.innerHTML=b():t.weatherNow.weather.includes("Berawan")?weatherIcon.innerHTML=x():t.weatherNow.weather.includes("Hujan")?weatherIcon.innerHTML=C():t.weatherNow.weather.includes("Gerimis")?weatherIcon.innerHTML=W():t.weatherNow.weather.includes("Udara Kabur")&&(weatherIcon.innerHTML=H()),jsonEl.value=JSON.stringify(t,null,2),apiUrl.textContent=a}).catch(t=>{console.log(t)})}donate.addEventListener("click",function(){window.open("https://saweria.co/mininxd")});github.addEventListener("click",function(){window.open("https://github.com/ka-shifuka/BMKG-scraper")});reset.addEventListener("click",function(){localStorage.removeItem("areaID"),window.location.reload()});let j=navigator.userAgent,B=/android|iphone|kindle|ipad/i,S=B.test(j);S==!1&&content.classList.add("desktop");
