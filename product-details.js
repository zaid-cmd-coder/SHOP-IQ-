// Function to get URL parameters
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        id: params.get('id'),
        category: params.get('category')
    };
}

// Function to load product details
function loadProductDetails() {
    const params = getUrlParams();
    
    try {
        // If no parameters are provided, redirect to home page
        if (!params.id || !params.category) {
            console.error('Missing product parameters');
            window.location.href = 'index.html';
            return;
        }

        const product = productData[params.id];
        
        if (!product) {
            console.error('Product not found:', params.id);
            window.location.href = 'index.html';
            return;
        }

        // Update the DOM elements
        const elements = {
            name: document.getElementById('productName'),
            price: document.getElementById('productPrice'),
            description: document.getElementById('productDescription'),
            image: document.getElementById('mainImage')
        };

        // Check if all required elements exist
        for (const [key, element] of Object.entries(elements)) {
            if (!element) {
                console.error(`Missing element: ${key}`);
                return;
            }
        }

        // Update the content
        elements.name.textContent = product.name;
        elements.price.textContent = `$${product.price.toFixed(2)}`;
        elements.description.textContent = product.description;
        elements.image.src = product.image;
        elements.image.alt = product.name;
        document.title = `${product.name} - ShopIQ`;

        // Add click event for Add to Cart button
        const addToCartBtn = document.querySelector('.add-to-cart-btn');
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', () => {
                const selectedSize = document.querySelector('.size-options button.selected');
                if (!selectedSize) {
                    alert('Please select a size');
                    return;
                }

                const quantity = parseInt(document.getElementById('quantity').value) || 1;
                const cartItem = {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    size: selectedSize.textContent,
                    quantity: quantity,
                    image: product.image
                };

                cart.addItem(cartItem);
                showAddedToCartMessage();
            });
        }

        // Add size selection functionality
        const sizeButtons = document.querySelectorAll('.size-options button');
        sizeButtons.forEach(button => {
            button.addEventListener('click', () => {
                sizeButtons.forEach(btn => btn.classList.remove('selected'));
                button.classList.add('selected');
            });
        });

    } catch (error) {
        console.error('Error loading product details:', error);
        window.location.href = 'index.html';
    }
}

// Function to update quantity
function updateQuantity(change) {
    const quantityInput = document.getElementById('quantity');
    let newValue = parseInt(quantityInput.value) + change;
    if (newValue < 1) newValue = 1;
    quantityInput.value = newValue;
}

// Function to show "Added to Cart" message
function showAddedToCartMessage() {
    const message = document.createElement('div');
    message.className = 'added-to-cart-message';
    message.textContent = 'Added to Cart!';
    document.body.appendChild(message);

    setTimeout(() => {
        message.remove();
    }, 2000);
}

// Load product details when the page loads
document.addEventListener('DOMContentLoaded', loadProductDetails); 