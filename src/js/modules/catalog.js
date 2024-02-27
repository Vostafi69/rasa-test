export default (function catalogToggle() {
  const showButton = document.querySelector(".catalog__show-button");
  const collapse = document.querySelector(".catalog__collapse");

  if (!showButton || !collapse) return;

  showButton.addEventListener("click", (e) => {
    if (collapse.classList.contains("catalog__collapse--show")) {
      showButton.ariaExpanded = false;
      showButton.classList.add("catalog__show-button--collapsed");
      collapse.classList.remove("catalog__collapse--show");
    } else {
      showButton.ariaExpanded = true;
      showButton.classList.remove("catalog__show-button--collapsed");
      collapse.classList.add("catalog__collapse--show");
    }
  });
})();
