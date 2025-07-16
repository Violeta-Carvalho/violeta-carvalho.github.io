// Hero Slideshow

const heroSlides = document.querySelectorAll(".slide");
let heroCurrentSlide = 0;

function updateDots() {
  const dots = dotsContainer.querySelectorAll("button");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === heroCurrentSlide);
  });
}

// Atualiza bolinhas ao mostrar slide
function showSlide(index) {
  heroSlides.forEach((s, i) => s.classList.toggle("active", i === index));
  updateDots();
}

function nextSlide() {
  heroCurrentSlide = (heroCurrentSlide + 1) % heroSlides.length;
  showSlide(heroCurrentSlide);
}

// Auto-slide
setInterval(nextSlide, 7000);

const dotsContainer = document.querySelector(".slideshow-dots");

// Cria as bolinhas conforme número de slides
heroSlides.forEach((_, i) => {
  const dot = document.createElement("button");
  dot.addEventListener("click", () => {
    heroCurrentSlide = i;
    showSlide(heroCurrentSlide);
    updateDots();
  });
  dotsContainer.appendChild(dot);
});

showSlide(heroCurrentSlide);

// ToggleMenu
function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  const overlay = document.getElementById("overlay");
  const toggleButton = document.getElementById("toggleButton");
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
  toggleButton.classList.toggle("fa-bars");
  toggleButton.classList.toggle("fa-xmark");
}

// GoToSection
function goToSection(section) {
  toggleMenu();
  const target = document.querySelector(section);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

// Nosso Time Slideshow
const teamSlides = document.querySelectorAll(".team-slide");
const teamPrevBtn = document.getElementById("prev-team-slide");
const teamNextBtn = document.getElementById("next-team-slide");
const doctorPic = document.getElementById("doctorPic");
let teamCurrentSlide = 0;
const teamImages = [
  "assets/Dr Daniel Lago.png",
  "assets/Dr. Celso.png",
  "assets/Dra. Kelita.png",
  "assets/Dra. Inara.png",
  "assets/Âmile.png",
  "assets/Dr Paulo Henrique Mai.png",
  "assets/Dra. Natália Pierdoná.png",
];

// Atualiza bolinhas ao mostrar slide
function showTeamSlide(index) {
  teamSlides.forEach((s, i) => s.classList.toggle("active", i === index));
  doctorPic.style.backgroundImage = `url('${teamImages[teamCurrentSlide]}')`;
}

function nextTeamSlide() {
  teamCurrentSlide = (teamCurrentSlide + 1) % teamSlides.length;
  showTeamSlide(teamCurrentSlide);
}

function prevTeamSlide() {
  teamCurrentSlide =
    (teamCurrentSlide - 1 + teamSlides.length) % teamSlides.length;
  showTeamSlide(teamCurrentSlide);
}

teamNextBtn.addEventListener("click", nextTeamSlide);
teamPrevBtn.addEventListener("click", prevTeamSlide);

showTeamSlide(teamCurrentSlide);

// Sanfonados
const titles = document.querySelectorAll(".expansible-text .title");

titles.forEach((title) => {
  title.addEventListener("click", () => {
    const content = title.nextElementSibling;
    content.classList.toggle("expanded");
  });
});

// Slideshow Clínica
const clinicSlides = document.querySelectorAll(
  ".clinica-slideshow .clinica-slide"
);
let clinicIndex = 0;

function changeClinicSlide(direction) {
  const currentSlide = clinicSlides[clinicIndex];
  const newIndex =
    (clinicIndex + direction + clinicSlides.length) % clinicSlides.length;
  const nextSlide = clinicSlides[newIndex];

  currentSlide.classList.add(direction > 0 ? "exit-left" : "exit-right");

  nextSlide.style.transform = `translateX(${direction > 0 ? "100%" : "-100%"})`;
  nextSlide.style.opacity = 0;
  nextSlide.offsetHeight;

  nextSlide.classList.add("active");
  nextSlide.style.transform = "translateX(0)";
  nextSlide.style.opacity = 1;

  setTimeout(() => {
    currentSlide.classList.remove("active", "exit-left", "exit-right");
    currentSlide.style.transform = "translateX(100%)";
    currentSlide.style.opacity = 0;
  }, 100);

  clinicIndex = newIndex;
}

// Video Slides
const videoSlides = document.querySelectorAll(".video-slideshow .video-slide");
let videoIndex = 0;

function changeVideoSlide(direction) {
  videoSlides[videoIndex].classList.remove("active");
  videoIndex =
    (videoIndex + direction + videoSlides.length) % videoSlides.length;
  videoSlides[videoIndex].classList.add("active");
}
