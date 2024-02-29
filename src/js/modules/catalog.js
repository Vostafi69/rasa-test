export default (function catalogToggle() {
  const showButton = document.querySelector(".catalog__show-button");
  const collapse = document.querySelector(".catalog__collapse");

  if (!showButton || !collapse) return;

  showButton.addEventListener("click", (e) => {
    showButton.classList.toggle("catalog__show-button--collapsed");
    collapse.classList.toggle("catalog__collapse--show");
    showButton.setAttribute("aria-expanded", `${!(showButton.getAttribute("aria-expanded") === "true")}`);
  });
})();
