const imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

const options = {
    rootMargin: "0px",
    threshold: 0.75,
  };

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    }, options);

    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } 
else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
}

//***************Days since last visit for the footer *********************************
// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 84600000;

let today = Date.now();
let lastvisitdate= Number(localStorage.getItem("lastvisit-ls"));

const elapseddays = Math.round((today - lastvisitdate) / msToDays);

document.querySelector('.dayselapsed').textContent = elapseddays;

localStorage.setItem("lastvisit-ls", today);