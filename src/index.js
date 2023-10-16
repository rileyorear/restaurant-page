import loadRestaurant from "./modules/restaurant";
import loadHome from "./modules/home";
import loadMenu from "./modules/menu";

init();

function addNavEvents() {
  const homeBtn = document.querySelector('.home');
  const menuBtn = document.querySelector('.menuHeaderButton');
        
  homeBtn.addEventListener('click', () => {
    document.querySelector('.header').nextElementSibling.remove();
    loadHome();
  });
  menuBtn.addEventListener('click', () => {
    document.querySelector('.header').nextElementSibling.remove();
    loadMenu();
  });
}

function init() {
  loadRestaurant();
  loadHome();
  addNavEvents();
}