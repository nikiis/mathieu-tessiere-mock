// remove loading screen after animation is over
setTimeout(() => {
  document.querySelector(".loadingScreen").style.display = "none";
  document.querySelector("main").style.display = "block";
}, 4300);

// picture grid
let options = {};

let pictureGrid = document.querySelector(".pictureGrid");
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    console.log(entry);
  });
});

observer.observe(pictureGrid);
