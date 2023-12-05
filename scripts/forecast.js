import { weatherKey } from "./keys.js";

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


// navigator.geolocation.getCurrentPosition(forecastCall);

// async function forecastCall(position){
//     const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&appid=${weatherKey}`);
//     const data = await promise.json();
//     console.log(data);
//     // day1.innerText = data.
// }

// forecastCall();