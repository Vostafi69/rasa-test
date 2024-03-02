import { swiper_catalog, swiper_nav } from "./modules/swiper";
import { catalogToggle, carListToggle } from "./modules/catalog";
import "./modules/accordion";
import { selectorContainers } from "./modules/select";
import "./modules/more";
import "./modules/mobile-nav";

catalogToggle();
carListToggle();

selectorContainers.forEach((selector) => {
  selector.addEventListener("change", (e) => {
    console.log(e.target.value);
  });
});
