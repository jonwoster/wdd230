let d = new Date();
let yearmod = d.getFullYear();
let item = document.querySelector("#copyright-year")
item.textContent = yearmod;

let lastmod = document.lastModified;
document.getElementById("last-updated").innerHTML = lastmod;