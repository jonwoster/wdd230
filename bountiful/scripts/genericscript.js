
let lastmod = document.lastModified;
document.getElementById("last-updated").innerHTML = lastmod;
//console.log("just after the last mod code");

// Related to the nav //
function togglemenu() {
    document.getElementById("primary-nav").classList.toggle("open");
    document.getElementById("hamburger-button").classList.toggle("open");
    console.log("in toggle menu function");
}

const x = document.getElementById('hamburger-button');
//console.log("just before onclick");
x.onclick = togglemenu;

// update the drinks ordered card
//localStorage.removeItem("fresh-drinkcounter-ls");  //for testing like its a new customer
// First get the count from local storage
let drinksordered= localStorage.getItem("fresh-drinkcounter-ls");

// grab the object for showing the results
let drinkinfovar = document.querySelector("#drinkcount");
//console.log("index page drinksordered after getItem= ", drinksordered);  //Debug only
// If they have ordered drinks before based upon local storage, then show the count
if (drinksordered) {
    drinksordered = "Welcome back! So far you have odered " + drinksordered + " Fresh drinks. You're on a roll, let's keep it going!"
} else {
    drinksordered = "No drinks ordered so far, but we are ready when you are!"
}
drinkinfovar.textContent = drinksordered;





