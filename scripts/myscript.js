
const d = new Date();
const yearvalue = d.getFullYear();
document.querySelector("#copyright-year").innerHTML = yearvalue;

let lastmod = document.lastModified;
document.getElementById("last-updated").innerHTML = lastmod;