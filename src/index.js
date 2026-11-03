import {loadPage} from './page-load.js';
import './style.css'; // Webpack will now inject this automatically



loadPage();


const homeButton = document.getElementById('home-button');
const menuButton = document.getElementById('menu-button');
const aboutButton = document.getElementById('about-button');

function clearContent() {
    const content = document.querySelector("#content");
    //content.innerHTML = ''; 
    content.replaceChildren(); 
    //content.textContent = ''; 
}

homeButton.addEventListener('click', () => {
    clearContent();
    // Create a new <p> element
    const newParagraph = document.createElement('p');
    
    // Add text to it
    newParagraph.textContent = 'This paragraph was added because you clicked the home button!';

    const content = document.querySelector("#content");
    
    // Insert it right after the <h1>
    content.appendChild(newParagraph);
  
});

menuButton.addEventListener('click', () => {
    clearContent();
    // Create a new <p> element
    const newParagraph = document.createElement('p');
    
    // Add text to it
    newParagraph.textContent = 'This paragraph was added because you clicked the menu button!';

    const content = document.querySelector("#content");
    
    // Insert it right after the <h1>
    content.appendChild(newParagraph);
});

aboutButton.addEventListener('click', () => {
    clearContent();
    // Create a new <p> element
    const newParagraph = document.createElement('p');
    
    // Add text to it
    newParagraph.textContent = 'This paragraph was added because you clicked the about button!';

    const content = document.querySelector("#content");
    
    // Insert it right after the <h1>
    content.appendChild(newParagraph);
});