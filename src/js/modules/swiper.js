import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export const swiper_nav = new Swiper(".header-bottom__nav-slider", {
  slidesPerView: "auto",
  freeMode: true,
  spaceBetween: 16,
});

export const swiper_catalog = new Swiper(".swiper", {
  slidesPerView: 1,
  speed: 700,
  modules: [Navigation],

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
