import "../styles/restaurant.css";

function loadRestaurant() {
  const container = document.createElement('div');
  container.setAttribute('id', 'container');
  
  const header = document.createElement('div');
  header.classList.add('header');
  
  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = "Papa Pasta";
  const headerSelection = document.createElement('div')
  headerSelection.classList.add('headerSelection');
  
  const home = document.createElement('h3');
  home.classList.add('home');
  home.textContent = "Home";
  const menu = document.createElement('h3');
  menu.classList.add('menu');
  menu.textContent = "Menu";
  
  headerSelection.appendChild(home);
  headerSelection.appendChild(menu);
  
  header.appendChild(title);
  header.appendChild(headerSelection);
  
  container.appendChild(header);
  
  document.body.appendChild(container);
}

export default loadRestaurant;