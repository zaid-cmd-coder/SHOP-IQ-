<?php
require_once 'db_config.php';

// Sample product data
$products = [
    [
        'name' => 'Ultra Boost Running Shoes',
        'price' => 8999.99,
        'description' => 'High-performance running shoes with responsive cushioning and breathable knit upper.',
        'image' => 'https://images.unsplash.com/photo-1491553895911-0055eca6402d',
        'category' => 'Shoes',
        'sku' => 'SH001',
        'availability' => 'In Stock',
        'quantity' => 50
    ],
    [
        'name' => 'Classic Denim Jacket',
        'price' => 3499.99,
        'description' => 'Timeless denim jacket with comfortable fit and durable construction.',
        'image' => 'https://images.unsplash.com/photo-1601333144130-8cbb312386b6',
        'category' => 'Clothes',
        'sku' => 'CL001',
        'availability' => 'In Stock',
        'quantity' => 30
    ],
    [
        'name' => 'Premium Leather Wallet',
        'price' => 1299.99,
        'description' => 'Handcrafted leather wallet with multiple card slots and coin pocket.',
        'image' => 'https://images.unsplash.com/photo-1627123424574-724758594e93',
        'category' => 'Accessories',
        'sku' => 'AC001',
        'availability' => 'In Stock',
        'quantity' => 100
    ]
];

try {
    // Clear existing data
    $conn->query("TRUNCATE TABLE inventory");
    $conn->query("TRUNCATE TABLE price_history");
    $conn->query("DELETE FROM products");
    
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
            
            // Insert initial price history
            $sql = "INSERT INTO price_history (product_id, price) VALUES (?, ?)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("id", $product_id, $product['price']);
            $stmt->execute();
        }
    }
    
    echo "Test data inserted successfully!";
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
?> 