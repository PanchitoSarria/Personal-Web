// Look for .hamburger
  var hamburger = document.querySelector(".hamburger");
  var primaryMenu = document.querySelector(".region-primary-menu");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
    primaryMenu.classList.toggle("region-primary-menu-active");
  });