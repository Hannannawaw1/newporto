// add class navbarDark on navbar scroll
const header = document.querySelector(".navbar-dark");
window.onscroll = function () {
  let top = window.scrollY;
  if (top >= 600) {
    header.classList.add("navbarDark");
  } else {
    header.classList.remove("navbarDark");
  }
};

// collapse navbar after click on small devices
const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navbarSupportedContent");

navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    new bootstrap.Collapse(menuToggle).toggle();
  });
});

const textRun = $(".job").typeIt({
  strings: ["Junior Frontend Web", "Junior Network Engineer", "IT Lovers"],
  speed: 170,
  breakLines: false,
  autoStart: false,
  loop: true,
});

const bukuOpen = () => {
  window.open("https://bookshelfapp19.netlify.app/");
};

const movieOpen = () => {
  window.open("https://sudomovies.netlify.app/");
};

const githubOpen = () => {
  window.open("https://github.com/Hannannawaw1");
};

const mailOpen = () => {
  window.open("mailto:hnawawi939@gmail.com");
};

const linkedinOpen = () => {
  window.open("https://www.linkedin.com/in/hannan-nawawi/");
};
