import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export const swiper_nav = new Swiper(".header-bottom__swiper", {
  freeMode: true,
  slidesPerView: "auto",
  spaceBetween: 16,
});

export const swiper_catalog = new Swiper(".car-article-best__swiper", {
  slidesPerView: 1,
  speed: 700,
  modules: [Navigation],

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
