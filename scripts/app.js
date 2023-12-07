import { weatherKey, mapKey } from "./keys.js";


//Current Weather variables
let favBtn = document.getElementById("favBtn");
let cityName = document.getElementById("cityName");
let currentTemp = document.getElementById("currentTemp");
let highLow = document.getElementById("highLow");
let mainIcon = document.getElementById("mainIcon");
let searchInput = document.getElementById("searchInput");
let down = document.getElementById("down");
let snow = document.getElementById("snow");
let checkBtn = document.querySelector("#checkBtn");
let navPanel = document.querySelector("#nav-home");



//Current Weather extra variables
let precText = document.getElementById("precText");
let windText = document.getElementById("windText");
let humiText = document.getElementById("humiText");
let latText = document.getElementById("latText");
let lonText = document.getElementById("lonText");
let riseText = document.getElementById("riseText");
let setText = document.getElementById("setText");

// Display days variables
let day1 = document.getElementById("day1");
let day2 = document.getElementById("day2");
let day3 = document.getElementById("day3");
let day4 = document.getElementById("day4");
let day5 = document.getElementById("day5");

// Display Icons variables
let dayIcon1 = document.getElementById("dayIcon1");
let dayIcon2 = document.getElementById("dayIcon2");
let dayIcon3 = document.getElementById("dayIcon3");
let dayIcon4 = document.getElementById("dayIcon4");
let dayIcon5 = document.getElementById("dayIcon5");

//High and Low variables
let day1HL = document.getElementById("day1HL");
let day2HL = document.getElementById("day2HL");
let day3HL = document.getElementById("day3HL");
let day4HL = document.getElementById("day4HL");
let day5HL = document.getElementById("day5HL");

//Declaring lat and lon variables
let lat;
let lon;

//Mode function for the most frequent weather description
function mostFrequent(arr, n) 
{ 
	//Put the count for each value in a hash
	let count = new Map(); 
	for (var i = 0; i < n; i++) 
	{ 
		if(count.has(arr[i])) 
			count.set(arr[i], count.get(arr[i])+1) 
		else
			count.set(arr[i], 1) 
	} 

	// Finding which value has highest frequency
	let maxCount = 0, res = -1; 
	count.forEach((value,key) => { 
		
		if (maxCount < value) { 
			res = key; 
			maxCount = value; 
		} 

	}); 

	return res; 
} 

function iconChange(freq, icon){
    switch (freq) {
        case "clear sky":
          icon.src = "../assets/sun.png";
          icon.alt = "Clear Sky Icon";
          break;
        case "rain":
          icon.src = "../assets/rainy.png";
          icon.alt = "Rain Icon";
          break;
        case "few clouds":
          icon.src = "../assets/cloudy.png";
          icon.alt = "Few Clouds Icon";
          break;
        case "scattered clouds":
          icon.src = "../assets/cloud.png";
          icon.alt = "Scattered Clouds Icon";
          break;
        case "broken clouds":
          icon.src = "../assets/cloud.png";
          icon.alt = "Broken Clouds Icon";
          break;
        case "overcast clouds":
            icon.src = "../assets/cloud.png";
            icon.alt = "Overcast Clouds Icon";
            break;
        case "shower rain":
          icon.src = "../assets/rainy.png";
          icon.alt = "Shower Rain Icon";
          break;
        case "thunderstorm":
          icon.src = "../assets/storm.png";
          icon.alt = "Thunderstorm Icon";
          break;
        case "snow":
          icon.src = "../assets/snowflake.png";
          icon.alt = "Snow Icon";
          break;
        case "haze":
          icon.src = "../assets/haze.png";
          icon.alt = "Haze Icon";
          break;
        case "light rain":
          icon.src = "../assets/rainy.png";
          icon.alt = "Ligh Rain Icon";
          break;
        default:
          break;
    }
}


  $(".nav-link").click(function(){
      if ($(this).hasClass('active')){
          $(navPanel).toggleClass('active');
      }
  });

//Taking in enter keypress to send value into geocoding api to turn into coordinates
searchInput.addEventListener('keypress', function(e){
  if(e.key === 'Enter'){
    success(searchInput.value);
    e.preventDefault();
    searchInput.value = '';
    return false;
  }
});

favBtn.addEventListener('click', function(e){
  favBtn.classList.toggle('unFav');
  favBtn.classList.toggle('fav');
  favBtn.classList.toggle('fa-regular');
  favBtn.classList.toggle('fa-solid');
});

// Get user location with callback function as success and error function to alert user with what the error is
navigator.geolocation.getCurrentPosition(success, errorFunction);

//Callback function to run script to get all weather data
async function success(position){

  //If a search input is present and entered in we will geocode that value rather than using default geolocation coordinates
  if(searchInput.value){
    const searchProm = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchInput.value}&limit=1&appid=${weatherKey}`);
    const searchedCity = await searchProm.json();
    lat = searchedCity[0].lat;
    lon = searchedCity[0].lon;
  }else{
    //Setting lat and lon from geolocation position.coords
    lat = position.coords.latitude;
    lon = position.coords.longitude;
  }


    //Fetch API data from current weather
  const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${weatherKey}`);
  const data = await promise.json();
  console.log(data);

  //Displaying lat and lon on screen and rounding to the 3rd decimal place
  latText.innerText = `Lat: ${Math.round(lat * 1000) / 1000}`;
  lonText.innerText = `Lon: ${Math.round(lon * 1000) / 1000}`;

  
    //Setting most of the display data on screen with respective data
    currentTemp.innerText = `${Math.round(data.main.temp)}\u00B0F`;
    highLow.innerText = `H:${Math.round(
      data.main.temp_max
    )}\u00B0\nL:${Math.round(data.main.temp_min)}\u00B0`;
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
  

    //Grabbing description to set main icon image to corresponding weather
    switch (data.weather[0].description) {
        case "clear sky":
          mainIcon.src = "../assets/sun.png";
          mainIcon.alt = "Clear Sky Icon";
          break;
        case "rain":
          mainIcon.src = "../assets/rainy.png";
          mainIcon.alt = "Rain Icon";
          break;
        case "few clouds":
          mainIcon.src = "../assets/cloudy.png";
          mainIcon.alt = "Few Clouds Icon";
          break;
        case "scattered clouds":
          mainIcon.src = "../assets/cloud.png";
          mainIcon.alt = "Scattered Clouds Icon";
          break;
        case "overcast clouds":
          mainIcon.src = "../assets/cloud.png";
          mainIcon.alt = "Overcast Clouds Icon";
        case "broken clouds":
          mainIcon.src = "../assets/cloud.png";
          mainIcon.alt = "Broken Clouds Icon";
          break;
        case "shower rain":
          mainIcon.src = "../assets/rainy.png";
          mainIcon.alt = "Shower Rain Icon";
          break;
        case "thunderstorm":
          mainIcon.src = "../assets/storm.png";
          mainIcon.alt = "Thunderstorm Icon";
          break;
        case "snow":
          mainIcon.src = "../assets/snowflake.png";
          mainIcon.alt = "Snow Icon";
          break;
        case "haze":
          mainIcon.src = "../assets/haze.png";
          mainIcon.alt = "Haze Icon";
          break;
        case "light rain":
          mainIcon.src = "../assets/rainy.png";
          mainIcon.alt = "Light Rain Icon";
          break;
        default:
          break;
    }

    //Getting direction of wind from the degree and setting the speed to display on screen
    if (data.wind.deg >= 0 && data.wind.deg < 30) {
        windText.innerText = `East ${data.wind.speed} mph`;
      } else if (data.wind.deg >= 30 && data.wind.deg < 60) {
        windText.innerText = `North East ${data.wind.speed} mph`;
      } else if (data.wind.deg >= 60 && data.wind.deg < 120) {
        windText.innerText = `North ${data.wind.speed} mph`;
      } else if (data.wind.deg >= 120 && data.wind.deg < 150) {
        windText.innerText = `North West ${data.wind.speed} mph`;
      } else if (data.wind.deg >= 150 && data.wind.deg < 210) {
        windText.innerText = `West ${data.wind.speed} mph`;
      } else if (data.wind.deg >= 210 && data.wind.deg < 240) {
        windText.innerText = `South West ${data.wind.speed} mph`;
      } else if (data.wind.deg >= 240 && data.wind.deg < 300) {
        windText.innerText = `South ${data.wind.speed} mph`;
      } else if (data.wind.deg >= 300 && data.wind.deg < 330) {
        windText.innerText = `South East ${data.wind.speed} mph`;
      } else if (data.wind.deg >= 330 && data.wind.deg < 360) {
        windText.innerText = `East ${data.wind.speed} mph`;
      } else {
        windText.innerText = `${data.wind.speed} mph`;
      }
  


  //Checking if rain exists in the object and checking if it is by 1hr volume or 3hr volume and setting the measurement
    if (data.rain) {
        if (data.rain["1h"]) {
          precText.innerText = `${data.rain["1h"]}mm`;
        } else if (data.rain["3h"]) {
          precText.innerText = `${data.rain["3h"]}mm`;
        }
      } else {
        precText.innerText = "0.00mm";
      }

    if(data.snow){
      down.innerText = "Snow: ";
      snow.classList.remove("fa-umbrella");
      snow.classList.add("fa-snowflake");
      if(data.snow["1h"]){
        precText.innerText = `${data.snow["1h"]}mm`;
      } else if (data.snow["3h"]) {
        precText.innerText = `${data.snow["3h"]}mm`;
      }else {
      precText.innerText = "0.00mm";
    }
    }
  
 
//Getting accurate city location by reverse geolocation API
  async function getCity(){
    const promise = await fetch(
        `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${weatherKey}`
      );
      const data = await promise.json();
      console.log(data[0]);
      if(!data[0].state){
        cityName.innerText = `${data[0].name}, ${data[0].country}`;
      }else{
        cityName.innerText = `${data[0].name}, ${data[0].state}`;
      }
  }
  getCity();

  let map;

    async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
        center: { lat: lat, lng: lon },
        zoom: 12,
     });
    }

initMap();  

async function forecastCall(){
    const forePromise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${weatherKey}`);
    const foreData = await forePromise.json();
    console.log(foreData);

    let currentDay = new Date();  //Shoutout zach 

    //Set next 5 day dates 
            let day1Day = new Date(currentDay.getTime() + 86400000)
            let day2Day = new Date(currentDay.getTime() + 86400000 * 2)
            let day3Day = new Date(currentDay.getTime() + 86400000 * 3)
            let day4Day = new Date(currentDay.getTime() + 86400000 * 4)
            let day5Day = new Date(currentDay.getTime() + 86400000 * 5)

        //Displaying day of the week on each card for the 5 day forecast
            day1.innerText = `${day1Day.toLocaleDateString('default', { weekday: 'long'})}`;
            day2.innerText = `${day2Day.toLocaleDateString('default', { weekday: 'long'})}`;
            day3.innerText = `${day3Day.toLocaleDateString('default', { weekday: 'long'})}`;
            day4.innerText = `${day4Day.toLocaleDateString('default', { weekday: 'long'})}`;
            day5.innerText = `${day5Day.toLocaleDateString('default', { weekday: 'long'})}`;
        

        //Array for temp_max of each day
        let day1max = [];
        let day2max = [];
        let day3max = [];
        let day4max = [];
        let day5max = [];

        //Array for temp_min of each day
        let day1min = [];
        let day2min = [];
        let day3min = [];
        let day4min = [];
        let day5min = [];

        //Array for descriptions of each day
        let day1desc = [];
        let day2desc = [];
        let day3desc = [];
        let day4desc = [];
        let day5desc = [];
        

        //Grabbing all max and min values and adding them to corresponding array for each day
        for(let i = 0; i < foreData.list.length; i++){
            let d = new Date(foreData.list[i].dt * 1000);
            if(d.toLocaleDateString('default') === day1Day.toLocaleDateString('default')){
                day1max.push(foreData.list[i].main.temp_max)
                day1min.push(foreData.list[i].main.temp_min)
                day1desc.push(foreData.list[i].weather[0].description)
            }else if(d.toLocaleDateString('default') === day2Day.toLocaleDateString('default')){
                day2max.push(foreData.list[i].main.temp_max)
                day2min.push(foreData.list[i].main.temp_min)
                day2desc.push(foreData.list[i].weather[0].description)
            }else if(d.toLocaleDateString('default') === day3Day.toLocaleDateString('default')){
                day3max.push(foreData.list[i].main.temp_max)
                day3min.push(foreData.list[i].main.temp_min)
                day3desc.push(foreData.list[i].weather[0].description)
            }else if(d.toLocaleDateString('default') === day4Day.toLocaleDateString('default')){
                day4max.push(foreData.list[i].main.temp_max)
                day4min.push(foreData.list[i].main.temp_min)
                day4desc.push(foreData.list[i].weather[0].description)
            }else if(d.toLocaleDateString('default') === day5Day.toLocaleDateString('default')){
                day5max.push(foreData.list[i].main.temp_max)
                day5min.push(foreData.list[i].main.temp_min)
                day5desc.push(foreData.list[i].weather[0].description)
            }
        }

        //Displaying each days highest and lowest temps using Math.max and Math.min
        day1HL.innerHTML = `H: ${Math.floor(Math.max(...day1max))}\u00B0 <br>L: ${Math.floor(Math.min(...day1min))}\u00B0`
        day2HL.innerHTML = `H: ${Math.floor(Math.max(...day2max))}\u00B0 <br>L: ${Math.floor(Math.min(...day2min))}\u00B0`
        day3HL.innerHTML = `H: ${Math.floor(Math.max(...day3max))}\u00B0 <br>L: ${Math.floor(Math.min(...day3min))}\u00B0`
        day4HL.innerHTML = `H: ${Math.floor(Math.max(...day4max))}\u00B0 <br>L: ${Math.floor(Math.min(...day4min))}\u00B0`
        day5HL.innerHTML = `H: ${Math.floor(Math.max(...day5max))}\u00B0 <br>L: ${Math.floor(Math.min(...day5min))}\u00B0`

        let day1Freq = mostFrequent(day1desc, day1desc.length);
        let day2Freq = mostFrequent(day2desc, day2desc.length);
        let day3Freq = mostFrequent(day3desc, day3desc.length);
        let day4Freq = mostFrequent(day4desc, day4desc.length);
        let day5Freq = mostFrequent(day5desc, day5desc.length);

        console.log(day1Freq);
        console.log(day2Freq);
        console.log(day3Freq);
        console.log(day4Freq);
        console.log(day5Freq);


        iconChange(day1Freq, dayIcon1);
        iconChange(day2Freq, dayIcon2);
        iconChange(day3Freq, dayIcon3);
        iconChange(day4Freq, dayIcon4);
        iconChange(day5Freq, dayIcon5);
}
forecastCall();
}

//Error function if something errors out it will display to user what the error is
async function errorFunction(error){
    alert(error.message);
}

