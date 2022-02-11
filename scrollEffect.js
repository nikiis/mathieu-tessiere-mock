// local variables
const scrollEffectWrapper = document.querySelector(".scrollEffectWrapper");
const leftSidePane = document.querySelector(".scrollEffectWrapper .leftSide");
const rightSidePane = document.querySelector(".scrollEffectWrapper .rightSide");

const variables = document.querySelector(":root");

// observer
const options = {
  threshold: 1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.addEventListener("scroll", moveSidePanes);
    }
  });
}, options);

observer.observe(scrollEffectWrapper);

function moveSidePanes() {
  let leftSideTranslate = window.scrollY * -1;
  let rightSideTranslate = window.scrollY;

  setVariable("--left-pane-translateX", leftSideTranslate, "px");
  setVariable("--right-pane-translateX", rightSideTranslate, "px");
}

// Helper functions
function setVariable(variableName, variableValue, variableUnit) {
  variables.style.setProperty(variableName, `${variableValue}${variableUnit}`);
}
