const carousel = document.querySelectorAll(".carousel-item");
const cover = document.querySelectorAll(".cover");
const up = document.querySelector(".up");

setInterval(() => {
  carousel.forEach((caro) => {
    if (caro.classList.contains("active")) {
      setTimeout(() => {
        cover.forEach((cov) => {
          cov.style.opacity = 1;
        });
      }, 1000);
    }
  });
}, 800);

window.addEventListener("scroll", () => {
  if (scrollY <= 350) {
    up.style.visibility = "hidden";
  } else {
    up.style.visibility = "visible";
  }
});
