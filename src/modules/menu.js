import "../styles/menu.css"

function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(createMenuItem(
    "Tomato", "Spaghetti pasta, Tomato sauce, Basil"
  ));

  menu.appendChild(createMenuItem(
    "Bolognese", "Spaghetti pasta, Tomato sauce, Basil"
  ));

  menu.appendChild(createMenuItem(
    "Carbonara", "Spaghetti pasta, Tomato sauce, Basil"
  ));

  menu.appendChild(createMenuItem(
    "Aglio Olio", "Spaghetti pasta, Tomato sauce, Basil"
  ));

  menu.appendChild(createMenuItem(
    "Alle Vongole", "Spaghetti pasta, Tomato sauce, Basil"
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
  foodImage.src = `../src/assets/imgs/${name.toLowerCase()}.PNG`;
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