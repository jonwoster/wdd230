
const d = new Date();
const year = d.getFullYear();
document.querySelector("#copyright-year").textContent = year;

let lastmod = document.lastModified;
document.getElementById("last-updated").innerHTML = lastmod;