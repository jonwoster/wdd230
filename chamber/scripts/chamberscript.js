let d = new Date();
let yearmod = d.getFullYear();
let item = document.querySelector("#copyright-year")
item.textContent = yearmod;

let lastmod = document.lastModified;
document.getElementById("last-updated").innerHTML = lastmod;


const datefieldUK = document.querySelector("#header-date");
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
datefieldUK.innerHTML = `${fulldateUK}`;



// Related to the nav //
function togglemenu() {
    document.getElementById("primary-nav").classList.toggle("open");
    document.getElementById("hamburger-button").classList.toggle("open");
}

const x = document.getElementById('hamburger-button');
x.onclick = togglemenu;