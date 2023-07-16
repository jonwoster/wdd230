
//***********  Current Weather ***************************************************** */
// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const humidity = document.querySelector('#humidity');

const weatherurl = "https://api.openweathermap.org/data/2.5/weather?zip=92008,us&units=imperial&appid=8f6afa3a62d9258fbdaeb86c6417ea2e";

async function apiCurrentFetch() {
    try {
      const response = await fetch(weatherurl);
      if (response.ok) {
        const data = await response.json();
        console.log("this is the current weather data ", data); // this is for testing the call
        displayCurrentWeather(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
function displayCurrentWeather(weatherData) {
    console.log("this is displayCurrentWeather");
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    humidity.innerHTML = `<strong>${weatherData.main.humidity.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description.charAt(0).toUpperCase() + weatherData.weather[0].description.slice(1); //Also makes first letter uppercase
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

/***********  3 day forecast *********************************** */
const forecasturl = "https://api.openweathermap.org/data/2.5/forecast?lat=33.1602&lon=-117.325&units=imperial&cnt=32&appid=8f6afa3a62d9258fbdaeb86c6417ea2e";

async function apiForecastFetch() {
    try {
      const response = await fetch(forecasturl);
      if (response.ok) {
        const data = await response.json();
        console.log("this is the forecast data: ", data); // this is for testing the call
        determineForecast(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}

function determineForecast(forecastData) {
    console.log("this is determineForecast");
    const upcomingtemps = new Map();
    let index = 0;

    for (item in forecastData.list) {
        
        // console.log("item= ", item);
        // console.log("date for the item = ", `${forecastData.list[item].dt_txt}`);
        let blockdate = `${forecastData.list[item].dt_txt}`;

        // Since we can only see forecasts for every 3 hours, we cannot know what the high and lows are for the forecast, 
        // since the high or low may be a time that we don't see. So, display that temps at 1:00 PM and 4:00 AM local
        // 2100 UTC will be 1300 Pacific time.
        // 1200 UTC will be 0400 Pacific time.
        if (blockdate.includes("21:00")) {
            let day = blockdate.slice(5,10);
            let string =day.concat(" 1:00 PM: ").concat(`${forecastData.list[item].main.temp.toFixed(0)}`);
            upcomingtemps.set(index, string);
            index = index + 1;
        }
        else if (blockdate.includes("12:00")) {
            let day = blockdate.slice(5,10);
            let string =day.concat(" 4:00 AM: ").concat(`${forecastData.list[item].main.temp.toFixed(0)}`);
            upcomingtemps.set(index, string);
            index = index + 1;
        }
    }

    // For temps on the same day, combine into one string
    console.log("size before the loop= ", upcomingtemps.size);
    for (let i = 0; i < (upcomingtemps.size -1); i++) {
        console.log("in for loop, i = ", i);
        console.log( "upcomingtemps.get(i)", upcomingtemps.get(i) );
        // if the date for current line and next line match, combine those onto one line
        if (  (upcomingtemps.get(i)).slice(0,5) == (upcomingtemps.get(i+1)).slice(0,5)  ) {
            let string = upcomingtemps.get(i).concat(", ").concat(upcomingtemps.get(i+1).slice(6));
            console.log( "upcomingtemps.get(i)).slice(0,5) =", upcomingtemps.get(i).slice(0,5) );
            console.log( "upcomingtemps.get(i+1)).slice(0,5) =", upcomingtemps.get(i+1).slice(0,5) );
            console.log("string = ", string);
            upcomingtemps.set(i, string);  //Update the map so that index i is the combined string
            console.log(" in if statement, upcomingtemps= ", upcomingtemps);
            upcomingtemps.set(i+1, "");  //If it has been combined, remove the value
        }
        console.log("size at end of the loop= ", upcomingtemps.size);
    }

    displayForecast(upcomingtemps);
}

function displayForecast(upcomingtemps) {
    //console.log("this is displayForecast");
    //console.log("this is upcoming temps", upcomingtemps);
    const forecast = document.querySelector('div.forecast'); // select the output container element

    for (let i = 0; i < 7; i++) {
        //console.log("in the for loop for displayForecast");
        // Create element
        let temptoadd= document.createElement('p');
        temptoadd.textContent = upcomingtemps.get(i);
  
        // Append the created elements
        forecast.appendChild(temptoadd);
   

    };  // end of for loop 

} // end of displayforecast function expression



/******  Call the functions ******************** */
apiCurrentFetch();
apiForecastFetch();