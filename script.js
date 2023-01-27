//ON BUTTON PRESS, SLIDE TO SECTION
function scrollToSection(section) {
  const container = document.querySelector(section);
  container.scrollIntoView({ behavior: "smooth" });
}

//BACK TO TOP SECTION ON PAGE RELOAD
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

//ON BUTTON PRESS, SHOW HAMBURGER MENU
function openMenu() {
  var menu = document.querySelector(".menu-content");
  menu.classList.toggle("show-menu");
}
