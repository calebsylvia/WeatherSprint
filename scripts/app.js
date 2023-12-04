import { weatherKey, mapKey } from "./keys.js";

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
//This was set up to ensure we are able to load rest of data for weather
function userPos(position){
    latText.innerText = `Lat: ${Math.round(position.coords.latitude * 1000) / 1000}`;
    lonText.innerText = `Lon: ${Math.round(position.coords.longitude * 1000) / 1000}`;
}
window.onload = userLocation();

//Weather Function


navigator.geolocation.getCurrentPosition(weatherCall);

async function weatherCall(position){
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&appid=${weatherKey}`);
    const data = await promise.json();

    console.log(data);
    currentTemp.innerText = `${Math.round(data.main.temp)}\u00B0F`;
    cityName.innerText = data.name; 
    highLow.innerText = `H:${Math.round(data.main.temp_max)}\u00B0\nL:${Math.round(data.main.temp_min)}\u00B0`;
    
}
weatherCall();

// navigator.geolocation.getCurrentPosition(mapCall);

// async function mapCall(position){
//     const promise = await
// }