const elHamburger = document.querySelector(".header__hamburger");

const elHeader = document.querySelector(".header");

elHamburger.addEventListener("click", () => {
  elHeader.classList.toggle("header--open")
})