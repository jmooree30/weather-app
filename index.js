let currentTemp = document.querySelector("#temp")
let currentDesc = document.querySelector("#description")

// current weather
fetch(
  "http://api.openweathermap.org/data/2.5/weather?zip=94040,us&units=imperial&APPID=38c7a3bf4046499d8be4a15128e0d64a",
  { mode: "cors" }
)
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    console.log(response);
    currentTemp.innerHTML = response.main.temp + " degrees";
    currentDesc.innerHTML = response.weather[0].description;
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
    console.log(response);
    //temperature.innerHTML = response.main.temp + " degrees";
    //description.innerHTML = response.weather[0].description;
  })
  .catch(function(err) {
    console.log(err);
  });