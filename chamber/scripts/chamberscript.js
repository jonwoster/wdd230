let d = new Date();
let yearmod = d.getFullYear();
let item = document.querySelector("#copyright-year");
item.textContent = yearmod;

let lastmod = document.lastModified;
document.getElementById("last-updated").innerHTML = lastmod;


const datefieldUK = document.querySelector("#header-date");
const now = new Date();
const dayofweek = now.getDay(); // for determining if we want to display reminder
// alert(dayofweek); for debugging
const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
datefieldUK.innerHTML = `${fulldateUK}`;



// Related to the nav //
function togglemenu() {
    document.getElementById("primary-nav").classList.toggle("open");
    document.getElementById("hamburger-button").classList.toggle("open");
}

const x = document.getElementById('hamburger-button');
x.onclick = togglemenu;

//Use JavaScript to display a banner on Mondays or Tuesdays only at the very top of the page that says 
//🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m." Make sure your design matches your schema for the site.
if(dayofweek == 1 || dayofweek == 2) {
    // create variable that holds reference to header
    const header = document.querySelector('header');
    // create div element to hold the reminder, use mtgreminder as the variable
    const mtgreminder = document.createElement('div');
    header.appendChild(mtgreminder);
    // create span that will hold the reminder
    const remindertext = document.createElement('span');
    // Set text of the span
    remindertext.textContent = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
    // make the remindertext span a child of the div for the reminder
    mtgreminder.appendChild(remindertext);

    // Set styling for the reminder
    mtgreminder.style.color = "white";
    mtgreminder.style.backgroundColor = "#0490fb";
    mtgreminder.style.fontSize = ".9rem";
    mtgreminder.style.justifyContent = "center";
    mtgreminder.style.margin = "auto";
    mtgreminder.style.gridRow = "1";
	mtgreminder.style.gridColumn = "1/5";
}

//***************Days since last visit for the footer *********************************
// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 84600000;

let today = Date.now();
let lastvisitdate= Number(localStorage.getItem("lastvisit-ls"));
/* check if lastvisit-ls exists right at the start. If it does, run your script like normal. 
If it doesn't set it to the current date and display some kind of message for a first visit. */

if (lastvisitdate) {
    const elapseddays = Math.round((today - lastvisitdate) / msToDays);
    document.querySelector('.dayselapsed').textContent = elapseddays;
} else {
    document.querySelector('.dayselapsed').textContent = "Welcome, it's your first visit!";
}

localStorage.setItem("lastvisit-ls", today);

//*************** Related to the form ************************************************

// const submittime = document.querySelector('#time');

// function grabtime() {
//     submittime.value = new Date();
//     console.log("submit time= ", submittime.value);  // for debug only
// }

// document.querySelector('.submitBtn').addEventListener('submit', grabtime());

