import './areaData.js'
import './loadData.js'
/*
let prov = 'jawaTengah';
let kab = 'kabKudus';
let kec = 'mejobo';

var url = `https://api.mininxd.my.id/bmkg/weather/${prov}/${kab}/${kec}`

fetch(url).then(res => {
  return res.json()
}).then(data => {
  output.innerHTML = JSON.stringify(data);
}).catch(e => {console.log(e)})

*/
donate.addEventListener("click", function() {
  window.open("https://saweria.co/mininxd");
})
github.addEventListener("click", function() {
  window.open("https://github.com/ka-shifuka/BMKG-scraper");
})
reset.addEventListener("click", function()  {
  localStorage.removeItem('areaID')
  window.location.reload();
})