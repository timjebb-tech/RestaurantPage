export {displayAboutTab}


function displayAboutTab(){

    // Create a new <p> element
    const newParagraph = document.createElement('p');
    
    // Add text to it
    newParagraph.textContent = "This isn't a real restaurant you know";
    const content = document.querySelector("#content");
    content.innerHTML = `
      <div class="item-details">
        <div class="item-header">
          <h3 class="item-title">This isn't a real restaurant you know</h3>
          
        </div>
      </div>
    `;
    
    
    // Insert it right after the <h1>
    content.appendChild(newParagraph);
}