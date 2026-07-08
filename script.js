// Function to open product details page
function openProductDetails(productCard) {
    console.log('Opening product details...', productCard.dataset);
    const productId = productCard.dataset.id;
    const category = productCard.dataset.category;
    window.location.href = `product-details.html?id=${productId}&category=${category}`;
}

// Search functionality (keep your existing search code)
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const productCards = document.querySelectorAll('.product-card');

    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase().trim();

        productCards.forEach(card => {
            const productName = card.querySelector('h3').textContent.toLowerCase();
            const shouldShow = productName.includes(searchTerm);
            
            if (shouldShow) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        // Show/hide sections based on whether they have visible products
        document.querySelectorAll('section').forEach(section => {
            const visibleProducts = Array.from(section.querySelectorAll('.product-card')).filter(card => 
                card.style.display !== 'none'
            ).length;
            
            section.style.display = visibleProducts === 0 ? 'none' : 'block';
        });
    });
});

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `
    .product-card {
        animation: fadeIn 0.5s ease-in-out;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style); 