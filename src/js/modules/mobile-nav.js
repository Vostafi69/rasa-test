export default (function mobileNav() {
  // Mobile nav button
  const navBtns = document.querySelectorAll(".mobile-menu-icon");
  const navMenu = document.querySelector(".mobile-menu");

  navBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      navMenu.classList.toggle("mobile-menu--show");
    });
  });
})();
