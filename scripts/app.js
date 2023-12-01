import { weatherKey, mapKey } from "./keys";

fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${weatherKey}`);

