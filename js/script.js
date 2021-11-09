//////// SET YEAR
const yearEl = document.querySelector(".footer-year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

/////// MOBILE NAVIGATION
const htmlEl = document.querySelector("html");
const bodyEl = document.querySelector("body");
const headerEl = document.querySelector(".header");
const mobileButtonEl = document.querySelector(".btn-mobile-nav");
const navLinkEls = document.querySelectorAll(".main-nav-link");
const navMain = document.querySelector(".main-nav");

let menuClicked = false;

mobileButtonEl.addEventListener("click", () => toggleMenu());

navLinkEls.forEach((navLink) => navLink.addEventListener("click", () => toggleMenu(500)));

let menuIsOpen;
let menuIsMobile;

function toggleMenu(d) {
  if (d == null) d = 0;

  menuIsOpen = headerEl.classList.contains("nav-open");

  if (window.getComputedStyle(navMain).position == "fixed") menuIsMobile = true;
  else menuIsMobile = false;

  if (menuIsOpen) {
    setTimeout(() => {
      headerEl.classList.remove("nav-open");
      htmlEl.classList.remove("scroll-disabled");
    }, d);
  } else if (menuIsMobile) {
    headerEl.classList.add("nav-open");
    htmlEl.classList.add("scroll-disabled");
  }
}
/////// StICKY NAVIGATION

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  (entries) => {
    if (!entries[0].isIntersecting) {
      bodyEl.classList.add("sticky");
    } else {
      bodyEl.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-52px",
  }
);
obs.observe(sectionHeroEl);

//////////// SMOOTH SCROLL

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    // console.log(href);

    if (href == "#") {
      window.scrollTo({
        top: 0,
        behaviour: "smooth",
      });
    } else if (href != "#" && href.startsWith("#")) {
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    }
  });
});
