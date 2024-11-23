const track = document.querySelector(".center_slide_row");
const items = document.querySelectorAll(".c_slide");
let index = 2; 

updateMiddleClass();

function updateMiddleClass() {
  items.forEach((item, i) => {
    item.classList.remove("active");
    if (i === index) {
      item.classList.add("active");
    }
  });
}

function slideCarousel(direction) {
  if (direction === "next") {
    index = (index + 1) % items.length;
    track.appendChild(track.firstElementChild); 
  } else {
    index = (index - 1 + items.length) % items.length; 
    track.insertBefore(track.lastElementChild, track.firstElementChild); 
  }
  updateMiddleClass();
}

function adjustForMobile() {
  if (window.innerWidth <= 768) {
    index = 1;
  } else {
    index = 2;
  }
  updateMiddleClass();
}

setInterval(() => slideCarousel("next"), 3000);
window.addEventListener("resize", adjustForMobile);
adjustForMobile(); 

if (window.innerWidth <= 768) {
    index = 1; 
    updateMiddleClass();
    track.style.transform = 'translateX(-5%)'; 
  }



/////////////////////////////////// for section 3

const slides1 = document.querySelectorAll(".slider-container1 > div");
const bannerCount = document.querySelectorAll(".banner_count span");
let currentIndex1 = 0;
let isSliding1 = false;

function updateSlider1() {
    if (isSliding1) return;
    isSliding1 = true;

    bannerCount.forEach((dot) => dot.classList.remove("active"));
    bannerCount[currentIndex1].classList.add("active");

    const offset1 = -currentIndex1 * 100; 
    slides1.forEach((slide) => {
        slide.style.transition = "transform 0.5s ease-in-out";
        slide.style.transform = `translateX(${offset1}%)`;
    });

    slides1[currentIndex1].addEventListener("transitionend", () => {
        isSliding1 = false;

        if (currentIndex1 === slides1.length - 1) {
            slides1.forEach((slide) => {
                slide.style.transition = "none";
                slide.style.transform = translateX(0);
            });
            currentIndex1 = 0; 
        }
    });
}

function autoSlide1() {
    if (isSliding1) return;
    currentIndex1 = (currentIndex1 + 1) % slides1.length;
    updateSlider1();
}

function initSlider1() {
    setInterval(autoSlide1, 5000);
}

initSlider1();

