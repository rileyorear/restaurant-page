import "../styles/menu.css";
import "../assets/imgs/aglio olio.png";
import "../assets/imgs/alle vongole.png";
import "../assets/imgs/bolognese.png";
import "../assets/imgs/carbonara.png";
import "../assets/imgs/tomato.png";

function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(createMenuItem(
    "Tomato", "Olive Oil, Red pepper flakes, Basil"
  ));

  menu.appendChild(createMenuItem(
    "Bolognese", "Ground beef, Red wine, Tomato paste"
  ));

  menu.appendChild(createMenuItem(
    "Carbonara", "Pancetta, Black pepper, Parmesan"
  ));

  menu.appendChild(createMenuItem(
    "Aglio Olio", "Spaghetti pasta, Garlic, Oil"
  ));

  menu.appendChild(createMenuItem(
    "Alle Vongole", "Spaghetti pasta, White wine, Clams"
  ));

  return menu;
}

function createMenuItem(name, description) {
  const menuItem = document.createElement('div');
  menuItem.classList.add("menuItem");
  
  const foodName = document.createElement("h2");
  foodName.classList.add("foodName");
  foodName.textContent = name;
  
  const foodDescription = document.createElement('p');
  foodDescription.classList.add("foodDescription");
  foodDescription.textContent = description;
  
  const foodImage = document.createElement("img");
  foodImage.classList.add("foodImage");
  foodImage.src = `${name.toLowerCase()}.png`;
  foodImage.alt = `${name}`;
  
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);
  menuItem.appendChild(foodImage);
  
  return menuItem
}

function loadMenu() {
  const content = document.createElement('div');
  content.classList.add('contentMenu');

  content.appendChild(createMenu());
  container.appendChild(content);
}

export default loadMenu;