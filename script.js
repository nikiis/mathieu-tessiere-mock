// remove loading screen after animation is over
setTimeout(() => {
  document.querySelector(".loadingScreen").style.display = "none";
  document.querySelector("main").style.display = "block";
}, 4300);

// picture grid

let pictureGrid = document.querySelector(".pictureGrid");
let mainPicture = document.querySelector(".pictureGrid .mainImage");
const sideImages = document.querySelectorAll(".sideImage");

let options = {
  // root: pictureGrid,
  threshold: 1,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.addEventListener("scroll", triggerScroll);
    }
  });
}, options);

observer.observe(pictureGrid);

const variables = document.querySelector(":root");

// get number of columns within grid
const gridComputedStyle = window.getComputedStyle(pictureGrid);
const gridColumnCount = gridComputedStyle
  .getPropertyValue("grid-template-columns")
  .split(" ").length;

let isSideImagesHidden = false;

// trigger scroll event when picture grid is intersecting
function triggerScroll() {
  const initialGridSpace = (pictureGrid.clientWidth / gridColumnCount) * 2 - 80;

  if (window.scrollY === 0) {
    variables.style.setProperty("--main-picture-grid-space", "2fr");
    variables.style.setProperty("--side-picture-grid-space", "1fr");
  }

  if (window.scrollY !== 0 && !isSideImagesHidden) {
    newGridSpace = initialGridSpace + window.scrollY * 3;

    if (newGridSpace > initialGridSpace) {
      // expand main picture
      variables.style.setProperty(
        "--main-picture-grid-space",
        `calc(${newGridSpace}px)`
      );

      // decrease grid space for side pictures
    }
  }

  // need to reset grid layout when user is at main image

  if (mainPicture.offsetTop - window.scrollY <= 50 && !isSideImagesHidden) {
    isSideImagesHidden = true;
    sideImages.forEach((image) => {
      image.style.display = "none";
    });

    document.querySelector(".mainImage img").style.width = "100vw";
  }

  if (mainPicture.offsetTop - window.scrollY >= 50 && isSideImagesHidden) {
    isSideImagesHidden = false;

    sideImages.forEach((image) => {
      image.style.display = "block";
    });

    document.querySelector(".mainImage img").style.width = "100%";
  }
}
