let currentTemp = document.querySelector("#currentTemp");
let currentDesc = document.querySelector("#currentDesc");
let currentLocation = document.querySelector("#currentLocation");
let currentHumidity = document.querySelector("#currentHumidity");
let currentIcon = document.querySelector("#currentIcon");
let oneIcon = document.querySelector("#oneIcon");
let oneTemp = document.querySelector("#oneTemp");
let oneDesc = document.querySelector("#oneDesc");
let twoIcon = document.querySelector("#twoIcon");
let twoTemp = document.querySelector("#twoTemp");
let twoDesc = document.querySelector("#twoDesc");
let threeIcon = document.querySelector("#threeIcon");
let threeTemp = document.querySelector("#threeTemp");
let threeDesc = document.querySelector("#threeDesc");
let fourIcon = document.querySelector("#fourIcon");
let fourTemp = document.querySelector("#fourTemp");
let fourDesc = document.querySelector("#fourDesc");
let fiveIcon = document.querySelector("#fiveIcon");
let fiveTemp = document.querySelector("#fiveTemp");
let fiveDesc = document.querySelector("#fiveDesc");

// current weather
fetch(
  "https://api.openweathermap.org/data/2.5/weather?zip=02780,us&units=imperial&APPID=38c7a3bf4046499d8be4a15128e0d64a",
  { mode: "cors" }
)
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    let iconCode = response.weather[0].icon;
    let iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
    currentIcon.src = iconUrl;
    currentTemp.innerHTML = response.main.temp.toFixed(0) + " degrees";
    currentDesc.innerHTML = response.weather[0].description;
    currentHumidity.innerHTML = "Humidity: " + response.main.humidity;
    currentLocation.innerHTML = response.name;
  })
  .catch(function(err) {
    console.log(err);
  });

// 5 day forcast
fetch(
  "https://api.openweathermap.org/data/2.5/forecast?zip=02780,us&units=imperial&APPID=38c7a3bf4046499d8be4a15128e0d64a",
  { mode: "cors" }
)
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    console.log(response);
    // day 1
    let iconOneCode = response.list[2].weather[0].icon;
    let iconOneUrl = "http://openweathermap.org/img/w/" + iconOneCode + ".png";
    oneTemp.innerHTML = response.list[2].main.temp.toFixed(0) + " degrees";
    oneIcon.src = iconOneUrl;
    oneDesc.innerHTML = response.list[2].weather[0].description;
    // day 2
    let iconTwoCode = response.list[10].weather[0].icon;
    let iconTwoUrl = "http://openweathermap.org/img/w/" + iconTwoCode + ".png";
    twoTemp.innerHTML = response.list[10].main.temp.toFixed(0) + " degrees";
    twoIcon.src = iconTwoUrl;
    twoDesc.innerHTML = response.list[10].weather[0].description;
    // day 3
    let iconThreeCode = response.list[18].weather[0].icon;
    let iconThreeUrl =
      "http://openweathermap.org/img/w/" + iconThreeCode + ".png";
    threeTemp.innerHTML = response.list[18].main.temp.toFixed(0) + " degrees";
    threeIcon.src = iconThreeUrl;
    threeDesc.innerHTML = response.list[18].weather[0].description;
    // day 4
    let iconFourCode = response.list[26].weather[0].icon;
    let iconFourUrl =
      "http://openweathermap.org/img/w/" + iconFourCode + ".png";
    fourTemp.innerHTML = response.list[26].main.temp.toFixed(0) + " degrees";
    fourIcon.src = iconFourUrl;
    fourDesc.innerHTML = response.list[26].weather[0].description;
    // day 5
    let iconFiveCode = response.list[34].weather[0].icon;
    let iconFiveUrl =
      "http://openweathermap.org/img/w/" + iconFiveCode + ".png";
    fiveTemp.innerHTML = response.list[34].main.temp.toFixed(0) + " degrees";
    fiveIcon.src = iconFiveUrl;
    fiveDesc.innerHTML = response.list[34].weather[0].description;
  })
  .catch(function(err) {
    console.log(err);
  });
