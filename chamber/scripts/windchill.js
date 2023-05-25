
const temp = document.querySelector("#tempvalue");
const tempval = parseFloat(temp.innerHTML);

const speed = document.querySelector("#speedvalue");
const speedval = parseFloat(speed.innerHTML);

const chill = document.querySelector("#chillvalue");

if (tempval <= 50 && speedval > 3.0) {
    const calc = (35.74 + (0.6215*tempval) - (35.75*(speedval**0.16)) + (.4275*tempval*(speedval**0.16))).toFixed(1);
    chill.textContent = calc;

} else {
    chill.textContent = "N/A";
}
