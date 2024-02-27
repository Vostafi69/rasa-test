export const selectorContainers = document.querySelectorAll(".select") || console.log("Селектор не найден!");

selectorContainers.forEach((selectorContainer) => {
  selectorContainer.addEventListener("mousedown", (e) => {
    e.preventDefault();

    if (selectorContainer.classList.contains("select--show")) {
      if (e.target !== selectorContainer.children[1]) {
        selectorContainer.children[1].remove();
        selectorContainer.classList.remove("select--show");
      }
      return;
    }

    const selector = selectorContainer.children[0];
    const dropDown = document.createElement("ul");
    dropDown.className = "select__custom-list";

    [...selector.children].forEach((option) => {
      const dropDownOption = document.createElement("li");
      dropDownOption.classList.add("select__custom-option");
      dropDownOption.textContent = option.textContent;

      dropDownOption.addEventListener("mousedown", (e) => {
        e.stopPropagation();
        selector.value = option.value;
        selectorContainer.value = option.value;
        selector.dispatchEvent(new Event("change"));
        selectorContainer.dispatchEvent(new Event("change"));
        dropDown.remove();
        selectorContainer.classList.remove("select--show");
      });

      dropDown.appendChild(dropDownOption);
    });

    selectorContainer.appendChild(dropDown);
    selectorContainer.classList.add("select--show");
  });
});

document.addEventListener("click", (e) => {
  selectorContainers.forEach((selectorContainer) => {
    if (!selectorContainer.contains(e.target) && selectorContainer.children[1]) {
      selectorContainer.removeChild(selectorContainer.children[1]);
      selectorContainer.classList.remove("select--show");
    }
  });
});
