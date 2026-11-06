export {displayMenuTab}


function displayMenuTab(category){

    // Create a new <p> element
    const newParagraph = document.createElement('p');
    
    // Add text to it
    newParagraph.textContent = 'This paragraph was added because you clicked the menu button!';

    const content = document.querySelector("#content");
    
    // Insert it right after the <h1>
    content.appendChild(newParagraph);

    // 5. Initialize the view with the default active category on page load
    renderMenu(category);
}

// 1. Data structure holding all the menu items
const menuData = [
  {
    id: 1,
    title: 'Classic Pumpkin Spice Latte',
    price: '£4.50',
    description: 'Espresso blended with steamed milk, real pumpkin purée, and warm autumnal spices, topped with whipped cream.',
    category: 'drinks'
  },
  {
    id: 2,
    title: 'Pumpkin Cream Cold Brew',
    price: '£4.25',
    description: 'Our signature cold brew sweetened with vanilla, topped with a velvety pumpkin-spiced cold foam cream layer.',
    category: 'drinks'
  },
  {
    id: 3,
    title: 'Spiced Pumpkin Chai',
    price: '£4.00',
    description: 'Black tea infused with cardamom, cinnamon, cloves, ginger, and rich pumpkin, steamed smooth with oat milk.',
    category: 'drinks'
  },
  {
    id: 4,
    title: 'Warm Pumpkin Scone',
    price: '£3.50',
    description: 'A tender, flaky spiced scone packed with real pumpkin, finished with a sweet vanilla icing and a spiced glaze drizzle.',
    category: 'bakery'
  },
  {
    id: 5,
    title: 'Pumpkin Pecan Muffin',
    price: '£3.25',
    description: 'Moist pumpkin muffin with a spiced cream cheese filling, topped with a crunchy brown sugar and pecan streusel crumble.',
    category: 'bakery'
  },
  {
    id: 6,
    title: 'Spiced Pumpkin Cheesecake',
    price: '£5.00',
    description: 'Rich, smooth New York-style pumpkin cheesecake resting on a buttery gingersnap crust, topped with house-made whipped cream.',
    category: 'bakery'
  }
];

// 2. Select key DOM elements
const content = document.getElementById('content');
const tabButtons = document.querySelectorAll('.tab-btn');

// 3. Core function to map data arrays into safe HTML structures
function renderMenu(categoryFilter) {
  // Filter data based on selection
  const filteredItems = menuData.filter(item => item.category === categoryFilter);

  // Clear existing items safely using the optimized method
  content.replaceChildren();

  // Build and attach new element trees dynamically
  filteredItems.forEach(item => {
    const article = document.createElement('article');
    article.classList.add('menu-item');

    article.innerHTML = `
      <div class="item-details">
        <div class="item-header">
          <h3 class="item-title">${item.title}</h3>
          <span class="item-price">${item.price}</span>
        </div>
        <p class="item-description">${item.description}</p>
      </div>
    `;
    
    content.appendChild(article);
  });
}

// 4. Tab switcher control handling
tabButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    // Manage active visual state styling
    tabButtons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    // Fetch the target category from data attribute and render
    const selectedCategory = event.currentTarget.dataset.category;
    renderMenu(selectedCategory);
  });
});


