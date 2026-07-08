const products = [
    // Shoes (10 products)
    {
        id: 1,
        name: "Ultra Boost Running Shoes",
        price: 159.99,
        description: "High-performance running shoes with responsive cushioning and breathable knit upper. Features energy-returning boost technology.",
        image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
        category: "Shoes",
        sku: "SH001",
        availability: "In Stock"
    },
    {
        id: 2,
        name: "Running Performance Shoes",
        price: 129.99,
        description: "Professional running shoes with advanced cushioning technology and breathable mesh upper.",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
        category: "Shoes",
        sku: "SH002",
        availability: "In Stock"
    },
    {
        id: 3,
        name: "Hiking Boots",
        price: 149.99,
        description: "Waterproof hiking boots with superior grip and ankle support.",
        image: "https://images.unsplash.com/photo-1582898967731-b5834427fd66",
        category: "Shoes",
        sku: "SH003",
        availability: "In Stock"
    },
    {
        id: 4,
        name: "Basketball High Tops",
        price: 119.99,
        description: "High-performance basketball shoes with excellent ankle support and cushioning.",
        image: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
        category: "Shoes",
        sku: "SH004",
        availability: "In Stock"
    },
    {
        id: 5,
        name: "Casual Loafers",
        price: 89.99,
        description: "Comfortable slip-on loafers perfect for casual and business casual wear.",
        image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509",
        category: "Shoes",
        sku: "SH005",
        availability: "In Stock"
    },
    {
        id: 6,
        name: "Tennis Shoes",
        price: 99.99,
        description: "Lightweight tennis shoes with excellent court grip and stability.",
        image: "https://images.unsplash.com/photo-1539185441755-769473a23570",
        category: "Shoes",
        sku: "SH006",
        availability: "In Stock"
    },
    {
        id: 7,
        name: "Formal Oxford Shoes",
        price: 159.99,
        description: "Classic leather oxford shoes perfect for formal occasions.",
        image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4",
        category: "Shoes",
        sku: "SH007",
        availability: "In Stock"
    },
    {
        id: 8,
        name: "Slip-On Sneakers",
        price: 69.99,
        description: "Convenient slip-on sneakers for casual everyday wear.",
        image: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6",
        category: "Shoes",
        sku: "SH008",
        availability: "In Stock"
    },
    {
        id: 9,
        name: "Canvas Shoes",
        price: 49.99,
        description: "Classic canvas shoes with timeless style and comfort.",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
        category: "Shoes",
        sku: "SH009",
        availability: "In Stock"
    },
    {
        id: 10,
        name: "Training Shoes",
        price: 109.99,
        description: "Versatile training shoes perfect for gym and cross-training.",
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa",
        category: "Shoes",
        sku: "SH010",
        availability: "In Stock"
    },
    {
        id: 31,
        name: "Golf Pro Series",
        price: 129.99,
        description: "Professional golf shoes with superior grip and waterproof technology. Features breathable mesh and premium leather construction.",
        image: "https://images.unsplash.com/photo-1593287073863-c992914cb3e3",
        category: "Shoes",
        sku: "SH011",
        availability: "In Stock"
    },
    {
        id: 32,
        name: "Winter Snow Boots",
        price: 169.99,
        description: "Insulated winter boots with waterproof exterior and cozy fleece lining. Perfect for cold weather and snow activities.",
        image: "https://images.unsplash.com/photo-1542840410-3092f99611a3",
        category: "Shoes",
        sku: "SH012",
        availability: "In Stock"
    },

    // Clothes (10 products)
    {
        id: 11,
        name: "Classic Denim Jacket",
        price: 89.99,
        description: "Timeless denim jacket with a modern fit and subtle distressing.",
        image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2",
        category: "Clothes",
        sku: "CL001",
        availability: "In Stock"
    },
    {
        id: 12,
        name: "Premium Cotton T-Shirt",
        price: 29.99,
        description: "Soft and comfortable 100% cotton t-shirt with a perfect fit.",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
        category: "Clothes",
        sku: "CL002",
        availability: "In Stock"
    },
    {
        id: 13,
        name: "Slim Fit Chinos",
        price: 59.99,
        description: "Modern slim-fit chinos perfect for casual and semi-formal occasions.",
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80",
        category: "Clothes",
        sku: "CL003",
        availability: "In Stock"
    },
    {
        id: 14,
        name: "Wool Sweater",
        price: 79.99,
        description: "Warm and stylish wool sweater perfect for cold weather.",
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633",
        category: "Clothes",
        sku: "CL004",
        availability: "In Stock"
    },
    {
        id: 15,
        name: "Leather Bomber Jacket",
        price: 199.99,
        description: "Classic leather bomber jacket with modern details.",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
        category: "Clothes",
        sku: "CL005",
        availability: "In Stock"
    },
    {
        id: 16,
        name: "Formal Dress Shirt",
        price: 69.99,
        description: "Crisp formal shirt perfect for business and formal occasions.",
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
        category: "Clothes",
        sku: "CL006",
        availability: "In Stock"
    },
    {
        id: 17,
        name: "Casual Hoodie",
        price: 49.99,
        description: "Comfortable cotton hoodie for casual wear.",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
        category: "Clothes",
        sku: "CL007",
        availability: "In Stock"
    },
    {
        id: 18,
        name: "Tailored Blazer",
        price: 149.99,
        description: "Sophisticated blazer perfect for professional settings.",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
        category: "Clothes",
        sku: "CL008",
        availability: "In Stock"
    },
    {
        id: 19,
        name: "Cargo Pants",
        price: 69.99,
        description: "Functional cargo pants with multiple pockets.",
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80",
        category: "Clothes",
        sku: "CL009",
        availability: "In Stock"
    },
    {
        id: 20,
        name: "Athletic Shorts",
        price: 34.99,
        description: "Lightweight athletic shorts with moisture-wicking technology.",
        image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b",
        category: "Clothes",
        sku: "CL010",
        availability: "In Stock"
    },
    {
        id: 33,
        name: "Winter Parka",
        price: 249.99,
        description: "Premium winter parka with down filling and faux fur hood. Features multiple pockets and wind-resistant exterior.",
        image: "https://images.unsplash.com/photo-1544923246-77307dd654cb",
        category: "Clothes",
        sku: "CL011",
        availability: "In Stock"
    },
    {
        id: 34,
        name: "Yoga Leggings",
        price: 54.99,
        description: "High-performance yoga leggings with four-way stretch and moisture-wicking technology. Features hidden pocket.",
        image: "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2",
        category: "Clothes",
        sku: "CL012",
        availability: "In Stock"
    },

    // Accessories (10 products)
    {
        id: 21,
        name: "Classic Watch",
        price: 199.99,
        description: "Elegant timepiece with leather strap and premium movement.",
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
        category: "Accessories",
        sku: "AC001",
        availability: "In Stock"
    },
    {
        id: 22,
        name: "Leather Wallet",
        price: 49.99,
        description: "Genuine leather wallet with multiple card slots and coin pocket.",
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93",
        category: "Accessories",
        sku: "AC002",
        availability: "In Stock"
    },
    {
        id: 23,
        name: "Sunglasses",
        price: 129.99,
        description: "Stylish sunglasses with UV protection and polarized lenses.",
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
        category: "Accessories",
        sku: "AC003",
        availability: "In Stock"
    },
    {
        id: 24,
        name: "Smart Fitness Tracker",
        price: 89.99,
        description: "Advanced fitness tracker with heart rate monitoring, sleep tracking, and smartphone notifications. Water-resistant design.",
        image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6",
        category: "Accessories",
        sku: "AC004",
        availability: "In Stock"
    },
    {
        id: 25,
        name: "Backpack",
        price: 79.99,
        description: "Durable backpack with laptop compartment and multiple pockets.",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
        category: "Accessories",
        sku: "AC005",
        availability: "In Stock"
    },
    {
        id: 26,
        name: "Beanie Hat",
        price: 24.99,
        description: "Warm knit beanie perfect for cold weather.",
        image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9",
        category: "Accessories",
        sku: "AC006",
        availability: "In Stock"
    },
    {
        id: 27,
        name: "Leather Gloves",
        price: 44.99,
        description: "Premium leather gloves with warm lining.",
        image: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586",
        category: "Accessories",
        sku: "AC007",
        availability: "In Stock"
    },
    {
        id: 28,
        name: "Weekender Bag",
        price: 89.99,
        description: "Stylish weekend travel bag with ample storage.",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
        category: "Accessories",
        sku: "AC008",
        availability: "In Stock"
    },
    {
        id: 29,
        name: "Silk Tie",
        price: 34.99,
        description: "Premium silk tie perfect for formal occasions.",
        image: "https://images.unsplash.com/photo-1589756823695-278bc923f962",
        category: "Accessories",
        sku: "AC009",
        availability: "In Stock"
    },
    {
        id: 30,
        name: "Scarf",
        price: 29.99,
        description: "Soft and warm scarf in classic design.",
        image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f",
        category: "Accessories",
        sku: "AC010",
        availability: "In Stock"
    },
    {
        id: 35,
        name: "Wireless Earbuds",
        price: 129.99,
        description: "Premium wireless earbuds with active noise cancellation and water resistance. Includes charging case with 24-hour battery life.",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
        category: "Accessories",
        sku: "AC011",
        availability: "In Stock"
    },
    {
        id: 36,
        name: "Travel Organizer",
        price: 39.99,
        description: "Multi-compartment travel organizer for accessories and electronics. Water-resistant material with RFID protection.",
        image: "https://images.unsplash.com/photo-1541845157-a6d2d100c931",
        category: "Accessories",
        sku: "AC012",
        availability: "In Stock"
    }
]; 

function handleSort(sortValue) {
    let sortedProducts = [...products]; // Create a copy of products array

    switch(sortValue) {
        case 'price-low':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
            break;
        default:
            // Reset to original order
            sortedProducts = [...products];
    }

    // Update the display
    displayProducts(sortedProducts);
}

function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';

    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;

    const title = document.createElement('h2');
    title.textContent = product.name;

    const priceContainer = document.createElement('div');
    priceContainer.className = 'price-container';

    // Calculate dynamic price based on average rating
    const avgRating = calculateAverageRating(product.id);
    const priceAdjustmentFactor = getPriceAdjustmentFactor(avgRating);
    const originalPriceInINR = product.price * 75;
    const dynamicPriceInINR = originalPriceInINR * priceAdjustmentFactor;

    console.log(`Product: ${product.name}, Original Price: ₹${originalPriceInINR}, Dynamic Price: ₹${dynamicPriceInINR}`);

    const price = document.createElement('p');
    price.className = 'price';
    price.textContent = `Price: ₹${dynamicPriceInINR.toLocaleString('en-IN')}`;

    const originalPrice = document.createElement('p');
    originalPrice.className = 'original-price';
    originalPrice.textContent = `Original: ₹${originalPriceInINR.toLocaleString('en-IN')}`;

    priceContainer.appendChild(price);
    priceContainer.appendChild(originalPrice);

    const link = document.createElement('a');
    link.href = `product-details.html?id=${product.id}`;
    link.textContent = 'View Details';

    productCard.appendChild(img);
    productCard.appendChild(title);
    productCard.appendChild(priceContainer);
    productCard.appendChild(link);

    return productCard;
}

function calculateAverageRating(productId) {
    const reviews = JSON.parse(localStorage.getItem(`reviews_${productId}`)) || [];
    if (reviews.length === 0) return 3; // Default to 3 if no reviews
    const avgRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
    return avgRating;
}

function getPriceAdjustmentFactor(avgRating) {
    if (avgRating >= 4.5) return 1.10; // 10% increase
    if (avgRating >= 3.5) return 1.05; // 5% increase
    if (avgRating >= 2.5) return 1.00; // no change
    if (avgRating >= 1.5) return 0.95; // 5% decrease
    return 0.90; // 10% decrease
}

// function displayProducts(products, containerId) {
//     const container = document.getElementById(containerId);
//     if (!container) {
//         console.error(`Container with ID ${containerId} not found`);
//         return;
//     }

//     container.innerHTML = ''; // Clear existing content

//     products.forEach(product => {
//         const productCard = createProductCard(product);
//         container.appendChild(productCard);
//     });
// }

// Initialize the display
// document.addEventListener('DOMContentLoaded', () => {
//     displayProducts(products, 'productList'); // Ensure 'productList' is the correct container ID
// }); 

function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const sortValue = document.getElementById('sortSelect').value;
    
    let filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );

    // Apply current sort to filtered results
    if (sortValue !== 'default') {
        handleSort(sortValue);
    } else {
        displayProducts(filteredProducts);
    }
} 