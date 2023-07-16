// let d = new Date();
// let yearmod = d.getFullYear();
// let item = document.querySelector("#copyright-year");
// item.textContent = yearmod;

let lastmod = document.lastModified;
document.getElementById("last-updated").innerHTML = lastmod;
//console.log("just after the last mod code");


// const datefieldUK = document.querySelector("#header-date");
// const now = new Date();
// const dayofweek = now.getDay(); // for determining if we want to display reminder
// // alert(dayofweek); for debugging
// const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
// datefieldUK.innerHTML = `${fulldateUK}`;


// Related to the nav //
function togglemenu() {
    document.getElementById("primary-nav").classList.toggle("open");
    document.getElementById("hamburger-button").classList.toggle("open");
    console.log("in toggle menu function");
}

const x = document.getElementById('hamburger-button');
//console.log("just before onclick");
x.onclick = togglemenu;


// //***************Days since last visit for the footer *********************************
// // milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
// const msToDays = 84600000;

// let today = Date.now();
// let lastvisitdate= Number(localStorage.getItem("lastvisit-ls"));
// /* check if lastvisit-ls exists right at the start. If it does, run your script like normal. 
// If it doesn't set it to the current date and display some kind of message for a first visit. */

// if (lastvisitdate) {
//     const elapseddays = Math.round((today - lastvisitdate) / msToDays);
//     document.querySelector('.dayselapsed').textContent = elapseddays;
// } else {
//     document.querySelector('.dayselapsed').textContent = "Welcome, it's your first visit!";
// }

// localStorage.setItem("lastvisit-ls", today);


