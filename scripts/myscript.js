let d = new Date();
let yearvalue = d.getFullYear();
let x = document.getElementById("copyright-message");
x.querySelector("#copyright-year").innerHTML = "yearvalue";

let lastmod = document.lastModified;
document.getElementById("last-updated").innerHTML = lastmod;