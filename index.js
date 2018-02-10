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
let body = document.querySelector("body");

function dayAbbrv(day) {
  var d = new Date();
  var n = d.getDay();
  future = day + n;
  switch (future) {
    case 0:
    case 7:
      day = "Sun";
      break;
    case 1:
    case 8:
      day = "Mon";
      break;
    case 2:
    case 9:
      day = "Tue";
      break;
    case 3:
    case 10:
      day = "Wed";
      break;
    case 4:
    case 11:
      day = "Thur";
      break;
    case 5:
    case 12:
      day = "Fri";
      break;
    case 6:
      day = "Sat";
  }
  return day
}

// current weather
fetch(
  "https://api.openweathermap.org/data/2.5/weather?zip=02119,us&units=imperial&APPID=38c7a3bf4046499d8be4a15128e0d64a",
  { mode: "cors" }
)
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    let ts = Math.round(new Date().getTime() / 1000) + 86400;
    if (ts < response.sys.sunset) {
      body.style.backgroundImage = "url('assets/1.png')";
    } else {
      body.style.backgroundImage = "url('assets/2.jpg')";
    }
    let iconCode = response.weather[0].icon;
    let iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
    currentIcon.src = iconUrl;
    currentTemp.innerHTML = response.main.temp.toFixed(0) + " F";
    currentDesc.innerHTML = response.weather[0].description;
    currentHumidity.innerHTML = "Humidity: " + response.main.humidity;
    currentLocation.innerHTML = response.name;
  })
  .catch(function(err) {
    console.log(err);
  });

// 5 day forcast
fetch(
  "https://api.openweathermap.org/data/2.5/forecast?zip=02119,us&units=imperial&APPID=38c7a3bf4046499d8be4a15128e0d64a",
  { mode: "cors" }
)
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    // day 1
    document.querySelector("#oneDay").innerHTML = dayAbbrv(1);
    let iconOneCode = response.list[2].weather[0].icon;
    let iconOneUrl = "http://openweathermap.org/img/w/" + iconOneCode + ".png";
    oneTemp.innerHTML = response.list[2].main.temp.toFixed(0);
    oneIcon.src = iconOneUrl;
    oneDesc.innerHTML = response.list[2].weather[0].description;
    // day 2
    document.querySelector("#twoDay").innerHTML = dayAbbrv(2);
    let iconTwoCode = response.list[10].weather[0].icon;
    let iconTwoUrl = "http://openweathermap.org/img/w/" + iconTwoCode + ".png";
    twoTemp.innerHTML = response.list[10].main.temp.toFixed(0);
    twoIcon.src = iconTwoUrl;
    twoDesc.innerHTML = response.list[10].weather[0].description;
    // day 3
    document.querySelector("#threeDay").innerHTML = dayAbbrv(3);
    let iconThreeCode = response.list[18].weather[0].icon;
    let iconThreeUrl =
      "http://openweathermap.org/img/w/" + iconThreeCode + ".png";
    threeTemp.innerHTML = response.list[18].main.temp.toFixed(0);
    threeIcon.src = iconThreeUrl;
    threeDesc.innerHTML = response.list[18].weather[0].description;
    // day 4
    document.querySelector("#fourDay").innerHTML = dayAbbrv(4);
    let iconFourCode = response.list[26].weather[0].icon;
    let iconFourUrl =
      "http://openweathermap.org/img/w/" + iconFourCode + ".png";
    fourTemp.innerHTML = response.list[26].main.temp.toFixed(0);
    fourIcon.src = iconFourUrl;
    fourDesc.innerHTML = response.list[26].weather[0].description;
    // day 5
    document.querySelector("#fiveDay").innerHTML = dayAbbrv(5);
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
