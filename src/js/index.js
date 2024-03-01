import { swiper_catalog, swiper_nav } from "./modules/swiper";
import "./modules/catalog";
import "./modules/accordion";
import { selectorContainers } from "./modules/select";
import "./modules/more";
import "./modules/mobile-nav";

selectorContainers.forEach((selector) => {
  selector.addEventListener("change", (e) => {
    console.log(e.target.value);
  });
});
