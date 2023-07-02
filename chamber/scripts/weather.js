// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windspeed = document.querySelector('#windspeed');
const windchill = document.querySelector("#windchill");
let temp; //used for calculating windchill
let wind; //used for calculating windchill
let calc; //used for calculation windchill

const weatherurl = "https://api.openweathermap.org/data/2.5/weather?q=Leadville&units=imperial&appid=8f6afa3a62d9258fbdaeb86c6417ea2e";

async function apiFetch() {
    try {
      const response = await fetch(weatherurl);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // this is for testing the call
        displayResults(data);
        calcwindspeed();
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    temp = parseFloat(`${weatherData.main.temp.toFixed(0)}`); // to use for windchill calc
    // console.log("temp=", temp);  // Debug only
    // console.log("temp type is ", typeof temp);   // Debug only

    windspeed.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0)}</strong>`;
    wind = parseFloat(`${weatherData.wind.speed.toFixed(0)}`);  // to use for windchill calc
    // console.log("wind=", wind);  // Debug only
    // console.log("wind type is ", typeof wind);  // Debug only

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description.charAt(0).toUpperCase() + weatherData.weather[0].description.slice(1); //Also makes first letter uppercase
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

// Windchill calculations
function calcwindspeed() {
    //temp = 30;  // debug only
    //console.log("temp for testing= ", temp);  // debug only
    
    if (temp <= 50 && wind > 3.0) {
        calc = (35.74 + (0.6215*temp) - (35.75*(wind**0.16)) + (.4275*temp*(wind**0.16))).toFixed(1);
        windchill.textContent = calc;
    
    } else {
        windchill.textContent = "N/A";
        // Remove the degree sympbol and "F" if there is no windchill
        const units = document.getElementById("windchillunits");
        units.remove();
    }
}

apiFetch();




