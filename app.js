const home = document.getElementById("goto-home");
const report = document.getElementById("show-report");
const btn = document.querySelector(".btn");
const fetchbtn = document.querySelector("#fetch-btn");
const details = document.querySelector(".details");
const completeReport = document.querySelector(".reports");
home.addEventListener("click", displayHome);
report.addEventListener("click", displayReport);
fetchbtn.addEventListener("click", displayReport);
function displayHome() {
  btn.style.display = "flex";
  details.style.display = "block";
  completeReport.style.display = "none";
  report.style.borderColor = "transparent";
  home.style.borderColor = "#707070";
}
function displayReport() {
  btn.style.display = "none";
  details.style.display = "none";
  completeReport.style.display = "flex";
  report.style.borderColor = "#707070";
  home.style.borderColor = "transparent";
  fetchData();
}

// GET DEATILES FROM API
const confirmedTotal = document.querySelector("#confirmed .total");
const confirmedUpdate = document.querySelector("#confirmed .update");

const activeTotal = document.querySelector("#active .total");

const recoveredTotal = document.querySelector("#recovered .total");
const recoveredUpdate = document.querySelector("#recovered .update");

const decreasedTotal = document.querySelector("#decreased .total");
const decreasedUpdate = document.querySelector("#decreased .update");
let x,
  y = {};
const apiKey = "https://corona.lmao.ninja/v2/countries/India";
async function getDetails() {
  const response = await fetch(apiKey);
  const data = await response.json();
  displaydata(data);
}
displaydata=(data)=>{
  confirmedTotal.innerHTML = data.cases;
  confirmedUpdate.innerHTML = "+"+data.todayCases;
  activeTotal.innerHTML = data.active;
  recoveredTotal.innerHTML = data.recovered;
  recoveredUpdate.innerHTML = "+"+data.todayRecovered;
  decreasedTotal.innerHTML = data.deaths;
  decreasedUpdate.innerHTML = "+"+data.todayDeaths;
}
function fetchData(){
  var API_KEY="https://corona.lmao.ninja/v2/countries/India";
  fetch(API_KEY).then(function(response){
    const data = response.json();
    // console.log(data);
    return data;
  }).then(function(data){
    displaydata(data);
  })
}
fetchData();