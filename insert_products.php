<?php
require_once 'db_config.php';

// Sample product data
$products = [
    [
        'name' => 'Ultra Boost Running Shoes',
        'price' => 159.99,
        'description' => 'High-performance running shoes with responsive cushioning and breathable knit upper.',
        'image' => 'https://images.unsplash.com/photo-1491553895911-0055eca6402d',
        'category' => 'Shoes',
        'sku' => 'SH001',
        'availability' => 'In Stock',
        'quantity' => 50
    ],
    // Add more products here...
];

// Insert products
foreach ($products as $product) {
    // Insert into products table
    $sql = "INSERT INTO products (name, price, description, image, category, sku, availability) 
            VALUES (?, ?, ?, ?, ?, ?, ?)";
            
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sdssss", 
        $product['name'],
        $product['price'],
        $product['description'],
        $product['image'],
        $product['category'],
        $product['sku'],
        $product['availability']
    );
    
    if ($stmt->execute()) {
        $product_id = $conn->insert_id;
        
        // Insert into inventory
        $sql = "INSERT INTO inventory (product_id, quantity) VALUES (?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ii", $product_id, $product['quantity']);
        $stmt->execute();
    }
}

echo "Products inserted successfully!";
?> 