import {loadPage} from './page-load.js';
import {displayHomeTab} from './home.js';
import {displayAboutTab} from './about.js';
import {displayMenuTab} from './menu.js';
import './style.css'; // Webpack will now inject this automatically



loadPage();


const homeButton = document.getElementById('home-button');
const menuDrinksButton = document.getElementById('menu-drinks-button');
const menuCakesButton = document.getElementById('menu-cakes-button');
const aboutButton = document.getElementById('about-button');

function clearContent() {
    const content = document.querySelector("#content");
    content.replaceChildren(); 

}

homeButton.addEventListener('click', () => {
    clearContent();
    displayHomeTab();  
});

menuDrinksButton.addEventListener('click', () => {
    clearContent();
    displayMenuTab('drinks');
});

menuCakesButton.addEventListener('click', () => {
    clearContent();
    displayMenuTab('bakery');
});

aboutButton.addEventListener('click', () => {
    clearContent();
    displayAboutTab();  
});

const tabs = document.querySelectorAll('.tab-btn');

tabs.forEach(clickedTab => {
  clickedTab.addEventListener('click', () => {
    // 1. Remove active class from all tabs
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // 2. Add active class to the clicked tab
    clickedTab.classList.add('active');
    
    // 3. Clear and update content based on which tab was clicked
    // updateTabContent(clickedTab.textContent);
  });
});