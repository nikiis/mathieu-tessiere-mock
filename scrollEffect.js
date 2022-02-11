window.addEventListener("DOMContentLoaded", scrollEffect);

// local variables
const scrollEffectWrapper = document.querySelector(".scrollEffectWrapper");
const variables = document.querySelector(":root");
const video = document.querySelector(".middleVideo video");
const videoText = document.querySelector(".middleVideo .text");

function scrollEffect() {
  // observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.addEventListener("scroll", moveSidePanes, true);
      } else {
        document.removeEventListener("scroll", moveSidePanes, true);
      }
    });
  });

  observer.observe(scrollEffectWrapper);

  function moveSidePanes() {
    // console.log("SCROLL TOP SCROLL EFFECT", video.getBoundingClientRect().top);

    // show text when video reaches certain scroll point
    showVideoText();

    let leftSideTranslate = window.scrollY * -1;
    let rightSideTranslate = window.scrollY;

    setVariable("--left-pane-translateX", leftSideTranslate, "px");
    setVariable("--right-pane-translateX", rightSideTranslate, "px");
  }
}

// Helper functions
function setVariable(variableName, variableValue, variableUnit) {
  variables.style.setProperty(variableName, `${variableValue}${variableUnit}`);
}

function showVideoText() {
  if (video.getBoundingClientRect().top <= 100) {
    videoText.style.opacity = 1;
  } else {
    videoText.style.opacity = 0;
  }
}
