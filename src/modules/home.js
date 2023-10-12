import "../styles/home.css";

function loadHome() {
  const content = document.createElement('div');
  content.classList.add('contentHome');
  
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('messageDiv');
  
  const messageBig = document.createElement('p');
  messageBig.classList.add('messageBig');
  messageBig.textContent = "Papa Pasta is exactly what you want.";
  const messageSmall = document.createElement('p');
  messageSmall.classList.add('messageSmall');
  messageSmall.textContent = "Simple and yummy!";
  const messageButton = document.createElement('button');
  messageButton.classList.add('messageButton');
  messageButton.textContent = "Menu";

  const imageCredit = document.createElement('p')
  imageCredit.classList.add('imageCredit');
  imageCredit.innerHTML =  "Photo by <a href='https://unsplash.com/@foodiesfeed?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>Jakub Kapusnak</a> on <a href='https://unsplash.com/photos/tEVisOXz26Y?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>Unsplash</a>";

  messageDiv.appendChild(messageBig);
  messageDiv.appendChild(messageSmall);
  messageDiv.appendChild(messageButton);

  content.appendChild(messageDiv);
  content.appendChild(imageCredit);

  container.appendChild(content);
}

export default loadHome;