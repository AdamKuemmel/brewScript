// const parallax = document.getElementById("parallax");

// window.addEventListener("scroll", function () {
//   let offset = window.pageYOffset;
//   parallax.style.backgroundPositionY = offset * 0.6 + "px";
//   console.log(parallax);
// });

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

window.addEventListener("scroll", function () {
  let hideAK = document.querySelector(".logoBox");
  hideAK.classList.toggle("hiddenLogo", window.scrollY > 0);
});
window.addEventListener("scroll", function () {
  let hideAK = document.getElementById("navSleep");
  hideAK.classList.toggle("hiddenLogo", window.scrollY > 0);
});
