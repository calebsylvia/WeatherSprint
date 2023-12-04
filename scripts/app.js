//import { weatherKey, mapKey } from "./keys";

//Current Weather variables
let favBtn = document.getElementById('favBtn');
let cityName = document.getElementById('cityName');
let currentTemp = document.getElementById('currentTemp');
let highLow = document.getElementById('highLow');
let mainIcon = document.getElementById('mainIcon');

//Current Weather extra variables
let precText = document.getElementById('precText');
let windText = document.getElementById('windText');
let humiText = document.getElementById('humiText');
let latText = document.getElementById('latText');
let lonText = document.getElementById('lonText');
let riseText = document.getElementById('riseText');
let setText = document.getElementById('setText');

// fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=${part}&appid=${weatherKey}`);


// Get user location
function userLocation() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(userPos);
    }else{
        console.log('Not supported');
    }
}

function userPos(position){
    latText.innerText = `Lat: ${Math.round(position.coords.latitude * 1000) / 1000}`;
    lonText.innerText = `Lon: ${Math.round(position.coords.longitude * 1000) / 1000}`;
}
window.onload = userLocation();

//Weather Function


navigator.geolocation.getCurrentPosition(weatherCall);

function weatherCall(position){
//fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&appid=${weatherKey}`)
   // .then

}
weatherCall();