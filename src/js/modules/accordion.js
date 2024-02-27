export default (function accordion() {
  const accordions = document.querySelectorAll(".accordion__collapse");

  if (accordions.length === 0) {
    console.log("Нет аккордиона на странице");
    return;
  }

  accordions.forEach((accordion) => {
    const accordionTrigger = accordion.parentNode.querySelector(".accordion__button");

    if (!accordionTrigger) {
      console.log("Триггер-кнока не найдена!");
      return;
    }

    accordionTrigger.addEventListener("click", (e) => {
      e.stopPropagation();
      if (accordion.classList.contains("accordion__collapse--show")) {
        accordion.classList.remove("accordion__collapse--show");
        accordionTrigger.classList.add("accordion__button--collpased");
        accordionTrigger.ariaExpanded = false;
      } else {
        accordion.classList.add("accordion__collapse--show");
        accordionTrigger.classList.remove("accordion__button--collpased");
        accordionTrigger.ariaExpanded = true;
      }
    });
  });
})();
