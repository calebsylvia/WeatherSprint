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

let lat;
let lon;
navigator.geolocation.getCurrentPosition(success, errorFunct);

async function success(position){

    lon = position.coords.longitude;
    lat = position.coords.latitude;

    const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${weatherKey}`);
    const data = await promise.json();
    console.log(data);
            

    let currentDay = new Date();  //shoutout zach 

            let day1Day = new Date(currentDay.getTime() + 86400000).toLocaleDateString('default', { weekday: 'long'})
            let day2Day = new Date(currentDay.getTime() + 86400000 * 2).toLocaleDateString('default', { weekday: 'long'})
            let day3Day = new Date(currentDay.getTime() + 86400000 * 3).toLocaleDateString('default', { weekday: 'long'})
            let day4Day = new Date(currentDay.getTime() + 86400000 * 4).toLocaleDateString('default', { weekday: 'long'})
            let day5Day = new Date(currentDay.getTime() + 86400000 * 5).toLocaleDateString('default', { weekday: 'long'})


            day1.innerText = `${day1Day}`;
            day2.innerText = `${day2Day}`;
            day3.innerText = `${day3Day}`;
            day4.innerText = `${day4Day}`;
            day5.innerText = `${day5Day}`;

     async function highLow(){
        
        let day1max = [];
        let day1min = [];
        for(let i = 0; i > data.list.length; i++){
            if((data.list[i].getTime() + 86400000).toLocaleDateString('default', { weekday: 'long '}) === day1Day){
                day1max.push(data.list[i])
            }
        }
    }
}

async function errorFunct(error){
    alert(error.message);
}