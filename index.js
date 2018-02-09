let currentTemp = document.querySelector("#currentTemp")
let currentDesc = document.querySelector("#currentDesc")
let currentHigh = document.querySelector("#currentHigh")
let currentLow = document.querySelector("#currentLow")
let currentLocation = document.querySelector("#currentLocation")
let currentHumidity = document.querySelector("#currentHumidity")
let currentIcon = document.querySelector("#currentIcon")


// current weather
fetch(
  "http://api.openweathermap.org/data/2.5/weather?zip=02780,us&units=imperial&APPID=38c7a3bf4046499d8be4a15128e0d64a",
  { mode: "cors" }
)
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    var iconCode = response.weather[0].icon;
    var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
    currentIcon.src = iconUrl
    console.log(response)
    currentTemp.innerHTML = response.main.temp + " degrees";
    currentDesc.innerHTML = response.weather[0].description;
    currentHigh.innerHTML = "High: " + response.main.temp_max;
    currentLow.innerHTML = "Low: " + response.main.temp_min;
    currentHumidity.innerHTML = "Humidity: " + response.main.humidity;
    currentLocation.innerHTML = response.name;
  })
  .catch(function(err) {
    console.log(err);
  });

// 5 day forcast
fetch(
  "http://api.openweathermap.org/data/2.5/forecast?zip=02780,us&units=imperial&APPID=38c7a3bf4046499d8be4a15128e0d64a",
  { mode: "cors" }
)
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    //console.log(response);
  })
  .catch(function(err) {
    console.log(err);
  });