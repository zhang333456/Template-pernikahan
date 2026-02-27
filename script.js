const openBtn = document.getElementById("openBtn");
const cover = document.getElementById("cover");
const mainContent = document.getElementById("mainContent");
const music = document.getElementById("bgMusic");

openBtn.addEventListener("click", function() {
  cover.style.display = "none";
  mainContent.classList.remove("hidden");
  music.play();
});
