(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const e of a.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&i(e)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();fetch("https://api.mininxd.my.id/bmkg/area/prov").then(o=>o.json()).then(o=>{loading.style.display="none",login.style.display="block",infoData.innerHTML="Data akan tersimpan dalam cache browser, tekan reset data untuk mengubah lokasi";for(var n=0;n<o.length;n++){const r=document.createElement("option");r.value=o[n],r.text=o[n],inputProv.appendChild(r)}}).catch(o=>{loading.style.display="none",login.style.display="block",infoData.innerHTML='Gagal mengambil data provinsi <a id="refresh">refresh</a>',infoData.classList.add("danger"),console.error(o)});inputProv.addEventListener("input",async function(){inputKab.disabled=!0,inputKec.disabled=!0;const o=inputProv.value;try{const r=await C(o);inputKab.options.length=0;const i=document.createElement("option");i.value="pilih kabupaten",i.text="Pilih Kabupaten",i.selected=!0,i.disabled=!0,inputKab.appendChild(i);for(var n=0;n<r.length;n++){const t=document.createElement("option");t.value=r[n],t.text=r[n],inputKab.appendChild(t)}inputKab.disabled=!1}catch(r){console.error(`Error fetching kabupaten: ${r.message}`)}});inputKab.addEventListener("input",async function(){inputKec.disabled=!0;const o=inputKab.value,n=inputProv.value;try{const i=await W(n,o);inputKec.options.length=0;const t=document.createElement("option");t.value="pilih kecamatan",t.text="Pilih Kecamatan",t.selected=!0,t.disabled=!0,inputKec.appendChild(t);for(var r=0;r<i.length;r++){const a=document.createElement("option");a.value=i[r],a.text=i[r],inputKec.appendChild(a)}inputKec.disabled=!1}catch(i){console.error(`Error fetching kecamatan: ${i.message}`)}});inputKec.addEventListener("change",function(){submitLokasi.disabled=!1,submitLokasi.innerHTML="simpan dan jalankan"});submitLokasi.addEventListener("click",function(){localStorage.setItem("areaID",`{
    "prov":"${inputProv.value}",
    "kab":"${inputKab.value}",
    "kec":"${inputKec.value}",
    "API_URL":"https://api.mininxd.my.id/bmkg/weather/${inputProv.value}/${inputKab.value}/${inputKec.value}"
  }`),window.location.reload()});async function C(o){try{return await(await fetch(`https://api.mininxd.my.id/bmkg/area/${o}`)).json()}catch(n){throw console.error(`Error fetching kabupaten: ${n.message}`),n}}async function W(o,n){try{return await(await fetch(`https://api.mininxd.my.id/bmkg/area/${o}/${n}`)).json()}catch(r){throw console.error(`Error fetching kecamatan: ${r.message}`),r}}function g(){return`
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
  `}function B(){return`
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
  `}function v(){return`
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
  `}function j(){return`
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
  `}function $(){return`
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
 <path d="M12 3v1" />
 <path d="M12 20v1" />
 <path d="M3 12h1" />
 <path d="M20 12h1" />
 <path d="m18.364 5.636-.707.707" />
 <path d="m6.343 17.657-.707.707" />
 <path d="m5.636 5.636.707.707" />
 <path d="m17.657 17.657.707.707" />
    </svg>
  `}function m(){return`
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
 <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  `}function f(){return`
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
  `}function A(){return`
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
  `}function k(){return`
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
 <path d="M16 14v6" />
 <path d="M8 14v6" />
 <path d="M12 16v6" />
    </svg>
  `}function M(){return`
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
  `}function S(){return`
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
  `}function N(){return`
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
 <path d="M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z" />
 <path d="M10.1 9A6 6 0 0 1 16 4a4.24 4.24 0 0 0 6 6 6 6 0 0 1-3 5.197" />
    </svg>
  `}function P(){return`
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
 <path d="M10.083 9A6.002 6.002 0 0 1 16 4a4.243 4.243 0 0 0 6 6c0 2.22-1.206 4.16-3 5.197" />
 <path d="M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24" />
 <path d="M11 20v2" />
 <path d="M7 19v2" />
    </svg>
  `}function L(){return`
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
      <path d="M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      <path d="M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5" />
    </svg>`}function D(){return`
    <svg
 xmlns="http://www.w3.org/2000/svg"
  width="30" 
  height="30" 
 viewBox="0 0 24 24"
 fill="none"
 stroke="currentColor"
 strokeWidth="2"
 strokeLinecap="round"
 strokeLinejoin="round"
    >
      <path d="M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      <path d="M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5" />
    </svg>`}function H(){return`  <svg
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
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  `}function O(){return`  <svg
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
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  `}function x(){return`  <svg
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
    <path d="M20 10H5" />
    <path d="M25 14H8" />
    <path d="M20 18H5" />
    </svg>
  `}function Z(){return`  <svg
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
    <path d="M20 10H5" />
    <path d="M25 14H8" />
    <path d="M20 18H5" />
   </svg>
  `}var w=document.getElementById("iconList");w?(w.classList.add("grid"),w.innerHTML=`
${g()}
${v()}
${$()}
${m()}
${f()}
${k()}
${M()}
${N()}
${P()}
${L()}
${H()}
${x()}
`):console.log("");if(localStorage.getItem("areaID")===null)firstTime.style.display="grid";else{firstTime.style.display="none",loading.style.display="none",content.style.display="block";let o=localStorage.getItem("areaID"),n=JSON.parse(o),r=n.prov,i=n.kab,t=n.kec,a=n.API_URL;kecKabText.innerHTML=`${t}, ${i}`,fetch(`https://api.mininxd.my.id/bmkg/weather/${r}/${i}/${t}`).then(e=>e.json()).then(e=>{console.log(e),temp.innerHTML=e.weatherNow.temperature,weather.innerHTML=e.weatherNow.weather,humidity.innerHTML=e.weatherNow.humidity,windSpeed.innerHTML=e.weatherNow.windSpeed,windDirection.innerHTML=e.weatherNow.windDirection,weatherIcon.style.transform="translateY(3px)";for(var c=0;c<e.images.length;c++){console.log(e.images[c]);let d=document.createElement("img");d.src=e.images[c],images.append(d)}const b=navigator.userAgent,I=/android|iphone|kindle|ipad/i.test(b);let h;const y=Math.min(I?7:10,e.dataWeather.length);for(h=0;h<y;h++){let d=e.dataWeather[h].time;d.includes("WIB")?(gmt.innerHTML="GMT +7 | ",timeZone.innerHTML="Waktu Indonesia Barat"):d.includes("WITA")?(gmt.innerHTML="GMT +8 | ",timeZone.innerHTML="Waktu Indonesia Tengah"):d.includes("WIT")&&(gmt.innerHTML="GMT +9 | ",timeZone.innerHTML="Waktu Indonesia Timur");let l=e.dataWeather[h].weather,u=document.createElement("div"),p=document.createElement("span"),s=document.createElement("div"),T=d.replaceAll("WIB","").replaceAll("WITA","").replaceAll("WIT","");p.textContent=T,l.includes("Cerah Berawan")?s.innerHTML=B():l.includes("Cerah")?s.innerHTML=j():l.includes("Berawan Tebal")?s.innerHTML=D():l.includes("Berawan")?s.innerHTML=K():l.includes("Hujan")?s.innerHTML=E():l.includes("Gerimis")?s.innerHTML=S():l.includes("Udara Kabur")?s.innerHTML=A():l.includes("Berangin")?s.innerHTML=O():l.includes("Kabut")&&(s.innerHTML=Z()),u.classList.add("prakiraanWrapper"),p.append(s),u.append(p),prakiraan.append(u)}e.weatherNow.weather.includes("Cerah Berawan")?weatherIcon.innerHTML=g():e.weatherNow.weather.includes("Cerah")?weatherIcon.innerHTML=v():e.weatherNow.weather.includes("Berawan Tebal")?weatherIcon.innerHTML=L():e.weatherNow.weather.includes("Berawan")?weatherIcon.innerHTML=m():e.weatherNow.weather.includes("Hujan")?weatherIcon.innerHTML=k():e.weatherNow.weather.includes("Gerimis")?weatherIcon.innerHTML=M():e.weatherNow.weather.includes("Udara Kabur")?weatherIcon.innerHTML=f():e.weatherNow.weather.includes("Berangin")?weatherIcon.innerHTML=H():e.weatherNow.weather.includes("Kabut")&&(weatherIcon.innerHTML=x()),jsonEl.value=JSON.stringify(e,null,2),apiUrl.textContent=a}).catch(e=>{console.log(e)})}donate.addEventListener("click",function(){window.open("https://saweria.co/mininxd")});github.addEventListener("click",function(){window.open("https://github.com/ka-shifuka/BMKG-scraper")});reset.addEventListener("click",function(){localStorage.removeItem("areaID"),window.location.reload()});let G=navigator.userAgent,U=/android|iphone|kindle|ipad/i,F=U.test(G);F==!1&&content.classList.add("desktop");
