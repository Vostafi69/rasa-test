import { swiper_catalog } from "./modules/swiper";
import "./modules/catalog";
import "./modules/accordion";
import { selectorContainers } from "./modules/select";

selectorContainers.forEach((selector) => {
  selector.addEventListener("change", (e) => {
    console.log(e.target.value);
  });
});
