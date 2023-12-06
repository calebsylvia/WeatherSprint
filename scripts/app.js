import { weatherKey, mapKey } from "./keys.js";

//Current Weather variables
let favBtn = document.getElementById('favBtn');
let cityName = document.getElementById('cityName');
let currentTemp = document.getElementById('currentTemp');
let highLow = document.getElementById('highLow');
let mainIcon = document.getElementById('mainIcon');
let search = document.getElementById('search');

//Current Weather extra variables
let precText = document.getElementById('precText');
let windText = document.getElementById('windText');
let humiText = document.getElementById('humiText');
let latText = document.getElementById('latText');
let lonText = document.getElementById('lonText');
let riseText = document.getElementById('riseText');
let setText = document.getElementById('setText');



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
    highLow.innerText = `H:${Math.round(data.main.temp_max)}\u00B0\nL:${Math.round(data.main.temp_min)}\u00B0`;
    humiText.innerText = `${data.main.humidity}%`;
    
    const riseTime = data.sys.sunrise;
    const setTime = data.sys.sunset;

    const rise = new Date(riseTime * 1000);
    const set = new Date(setTime * 1000);

    let setHours = set.getHours();
    let setMinutes = "0" + set.getMinutes();
    let riseHours = rise.getHours();
    let riseMinutes = "0" + rise.getMinutes();

    riseText.innerText = `Sunrise: ${riseHours}:${riseMinutes.substr(-2)}`;
    setText.innerText = `Sunset: ${setHours}:${setMinutes.substr(-2)}`;
}
weatherCall();



navigator.geolocation.getCurrentPosition(mainIconChange);

async function mainIconChange(position){
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&appid=${weatherKey}`);
    const data = await promise.json();

    switch(data.weather[0].description){
        case 'clear sky':
            mainIcon.src = "../assets/sun.png";
            break;
        case 'rain':
            mainIcon.src = "../assets/rainy.png";
            break;
        case 'few clouds':
            mainIcon.src = "../assets/cloudy.png";
            break;
        case 'scattered clouds':
            mainIcon.src = "../assets/cloud.png";
            break;
        case 'broken clouds':
            mainIcon.src = "../assets/cloud.png";
            break;
        case 'shower rain':
            mainIcon.src = "../assets/rainy.png";
            break;
        case 'thunderstorm':
            mainIcon.src = "../assets/storm.png";
            break;
        case 'snow':
            mainIcon.src = "../assets/snowflake.png";
            break;
        case 'haze':
            mainIcon.src = "../assets/haze.png";
            break;
        case 'light rain':
            mainIcon.src = "../assets/rainy.png";
            break;
        default:
            break;
    };
}
mainIconChange();

navigator.geolocation.getCurrentPosition(getWind);

async function getWind(position){
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&appid=${weatherKey}`);
    const data = await promise.json();

    if(data.wind.deg >= 0 && data.wind.deg < 30){
        windText.innerText = `East ${data.wind.speed} mph`;
    }else if(data.wind.deg >= 30 && data.wind.deg < 60){
        windText.innerText = `North East ${data.wind.speed} mph`;
    }else if(data.wind.deg >= 60 && data.wind.deg < 120){
        windText.innerText = `North ${data.wind.speed} mph`;
    }else if(data.wind.deg >= 120 && data.wind.deg < 150){
        windText.innerText = `North West ${data.wind.speed} mph`;
    }else if(data.wind.deg >= 150 && data.wind.deg < 210){
        windText.innerText = `West ${data.wind.speed} mph`;
    }else if(data.wind.deg >= 210 && data.wind.deg < 240){
        windText.innerText = `South West ${data.wind.speed} mph`;
    }else if(data.wind.deg >= 240 && data.wind.deg < 300){
        windText.innerText = `South ${data.wind.speed} mph`;
    }else if(data.wind.deg >= 300 && data.wind.deg < 330){
        windText.innerText = `South East ${data.wind.speed} mph`;
    }else if(data.wind.deg >=330 && data.wind.deg < 360){
        windText.innerText = `East ${data.wind.speed} mph`;
    }else{
        windText.innerText = `${data.wind.speed} mph`;
    }
}

getWind();

navigator.geolocation.getCurrentPosition(getRain);

async function getRain(position){
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&appid=${weatherKey}`);
    const data = await promise.json();
    
    if(data.rain){

        if(data.rain['1h']){
            precText.innerText = `${data.rain['1h']}mm`;
        }else if(data.rain['3h']){
            precText.innerText = `${data.rain['3h']}mm`;
        }
    }else{
        precText.innerText = '0.00mm';
    }
}

getRain();

navigator.geolocation.getCurrentPosition(getCity);

async function getCity(position){
    const promise = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${weatherKey}`);
    const data = await promise.json();
    console.log(data[0]);
    cityName.innerText = `${data[0].name}, ${data[0].state}`;
}
getCity();