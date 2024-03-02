export default (function catalogToggle() {
  const showButton = document.querySelector(".catalog__show-button");
  const collapse = document.querySelector(".catalog__collapse");

  if (!showButton || !collapse) return;

  showButton.addEventListener("click", (e) => {
    showButton.classList.toggle("catalog__show-button--collapsed");
    collapse.classList.toggle("catalog__collapse--show");
    const expandState = showButton.getAttribute("aria-expanded") === "true";
    showButton.children[0].innerText = expandState ? "Развернуть список" : "Свернуть список машин";
    showButton.setAttribute("aria-expanded", !expandState);
  });
})();
