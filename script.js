// remove loading screen after animation is over
setTimeout(() => {
  document.querySelector(".loadingScreen").style.display = "none";
  document.querySelector("main").style.display = "block";
}, 4300);
