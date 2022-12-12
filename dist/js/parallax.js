const parralax = document.getElementById("parallax");
const gapOne = document.querySelector(".gap-one");

window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    parralax.style.backgroundPositionY = offset * 0.7 + "px";
})