export {displayHomeTab}

import pumpkinImgUrl from '../images/pumpkins.jpg'; 

function displayHomeTab(){


    const content = document.querySelector("#content");


    const newImage = document.createElement("img");

    // 3. Set the source URL and alternate text for the image
    newImage.src = pumpkinImgUrl; 
    newImage.alt = "A descriptive placeholder image";

    // 4. Optionally, add a CSS class for styling
    newImage.id = "pumpkin-image";

    // 5. Insert the image inside the #container element
    content.appendChild(newImage);

    const mainHeader = document.createElement("h1");
    mainHeader.classList.add('item-header');

    // 3. Add text inside the header
    mainHeader.textContent = "Welcome to Tim's Pumpkin Patch!";

    content.appendChild(mainHeader);

    const newParagraph = document.createElement('p');
    newParagraph.classList.add('item-description');
    
    // Add text to it
    newParagraph.textContent = "Tim's veggie restaurant";
    content.appendChild(newParagraph);
   
}