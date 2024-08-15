if(localStorage.getItem('areaID') === null) {
  output.innerHTML = 'data not found';
  firstTime.style.display ="grid";
} else {
  output.innerHTML = localStorage.getItem('areaID');
  firstTime.style.display ="none";
  loading.style.display ="none";
  content.style.display = "block";
}
