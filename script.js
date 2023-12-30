"use strict";

// Selecting elements
const heroBtns = document.querySelectorAll(".hero-btn");
const navBtns = document.querySelectorAll(".nav-btn");
// Page Navigation

// NAVBAR
navBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

// HERO
heroBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});
