const totalSlides = 14;
const track = document.getElementById("sliderTrack");
const slider = document.getElementById("catalogSlider");
const indicator = document.getElementById("indicator");

let currentIndex = 0;
let autoTimer = null;

// CREATE SLIDES
for (let i = 1; i <= totalSlides; i++) {
    const slide = document.createElement("div");
    slide.className = "slide";
    slide.innerHTML = `
        <img
          src="../../assets/images/catalogs/${i}.png"
          alt="Catalog vietplywood ${i}"
          loading="lazy"
          width="1200"
          height="1400"
        />
      `;
    track.appendChild(slide);
}

function updateUI() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    slider.style.setProperty(
        "--bg-image",
        `url('../../assets/images/catalogs/${currentIndex + 1}.png')`
    );
    indicator.textContent = `${currentIndex + 1} / ${totalSlides}`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateUI();
    resetAuto();
}

function prevSlide() {
    currentIndex =
        (currentIndex - 1 + totalSlides) % totalSlides;
    updateUI();
    resetAuto();
}

function startAuto() {
    autoTimer = setInterval(nextSlide, 4500);
}

function resetAuto() {
    clearInterval(autoTimer);
    startAuto();
}

// INIT
updateUI();
startAuto();
