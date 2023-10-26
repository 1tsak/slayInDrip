// app.js

const products = [
    { name: "Red Sneakers", price: 59.99, rating: 4.5, image: "../assets/shoes.jpg" },
    { name: "Full Sleve", price: 19.99, rating: 4.2, image: "../assets/fullsleve.jpg" },
    { name: "Oversized Tshirt Red", price: 69.99, rating: 4.8, image: "../assets/oversized-tees.jpg" },
    { name: "Oversized Tshirt", price: 29.99, rating: 3.9, image: "../assets/oversized1.jpg" },
    { name: "Shades", price: 79.99, rating: 4.6, image: "../assets/shades.jpg" },
    { name: "Hoodie", price: 24.99, rating: 4.1, image: "../assets/hoodie.jpg" },
    // Add more products here
];

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const productList = document.getElementById('productList');

function displayProducts(productsToDisplay) {
    productList.innerHTML = '';

    if (productsToDisplay.length === 0) {
        productList.innerHTML = '<p>No products found.</p>';
    } else {
        productsToDisplay.forEach(product => {
            const card = document.createElement('li');
            card.className = 'bg-white rounded-lg overflow-hidden shadow-md';

            card.innerHTML = `
                <img src="images/${product.image}" alt="${product.name}" class="w-full h-60 object-cover">
                <div class="p-4">
                    <h2 class="text-lg font-medium mb-2">${product.name}</h2>
                    <div class="flex justify-between items-center">
                        <p class="text-gray-700">Price: $${product.price.toFixed(2)}</p>
                        <div class="flex items-center">
                            <p class="text-gray-700 mr-2">Rating:</p>
                            <div class="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                </svg>
                                <span class="text-gray-700">${product.rating.toFixed(1)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            productList.appendChild(card);
        });
    }
}

function filterProducts(searchTerm) {
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    displayProducts(filteredProducts);
}

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value;
    filterProducts(searchTerm);
});

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value;
    filterProducts(searchTerm);
});

// Initial display of all products
displayProducts(products);
