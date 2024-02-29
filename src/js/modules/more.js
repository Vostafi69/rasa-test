export default (function more() {
  const btnsMore = document.querySelectorAll(".more");

  btnsMore.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      btn.classList.toggle("more--show");
      e.target.setAttribute("aria-expanded", `${!(e.target.getAttribute("aria-expanded") === "true")}`);
    });
  });
})();
