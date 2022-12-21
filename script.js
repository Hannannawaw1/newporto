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


let bukuOpen = () => {
  window.open("https://bookshelfapp19.netlify.app/");
};

let movieOpen = () => {
  window.open("https://sudomovies.netlify.app/")
}

