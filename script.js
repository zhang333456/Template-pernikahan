// COVER OPEN
const openBtn = document.getElementById("openBtn");
const cover = document.getElementById("cover");
const mainContent = document.getElementById("mainContent");
const music = document.getElementById("bgMusic");

openBtn.addEventListener("click", () => {
  cover.style.display = "none";
  mainContent.classList.remove("hidden");
  music.play();
  createFallingFlowers();
});

// SCROLL ANIMATION
const images = document.querySelectorAll('.scroll-image');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
});
images.forEach(img => observer.observe(img));

// FALLING FLOWERS
function createFallingFlowers() {
  const flowersDiv = document.getElementById("flowers");
  const flowerFiles = ["flower1.png","flower2.png","flower3.png"];
  for(let i=0;i<20;i++){
    const img = document.createElement("img");
    img.src = flowerFiles[Math.floor(Math.random()*flowerFiles.length)];
    img.style.left = Math.random()*window.innerWidth + "px";
    img.style.animationDuration = 5 + Math.random()*5 + "s";
    flowersDiv.appendChild(img);
  }
}
