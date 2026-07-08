<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-Type: application/json');
require_once 'db_config.php';
require_once 'price_manager.php';

$priceManager = new PriceManager($conn);

function getProducts($category = null) {
    global $conn, $priceManager;
    
    $sql = "SELECT p.*, i.quantity FROM products p 
            LEFT JOIN inventory i ON p.id = i.product_id";
    
    if ($category) {
        $sql .= " WHERE p.category = ?";
    }
    
    $stmt = $conn->prepare($sql);
    
    if ($category) {
        $stmt->bind_param("s", $category);
    }
    
    $stmt->execute();
    $result = $stmt->get_result();
    $products = [];
    
    while ($row = $result->fetch_assoc()) {
        // Calculate dynamic price
        $row['original_price'] = $row['price'];
        $row['price'] = $priceManager->getDynamicPrice($row['price']);
        $row['formatted_price'] = $priceManager->formatPrice($row['price']);
        $products[] = $row;
    }
    
    return $products;
}

function getProduct($id) {
    global $conn;
    
    $sql = "SELECT p.*, i.quantity FROM products p 
            LEFT JOIN inventory i ON p.id = i.product_id 
            WHERE p.id = ?";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    $stmt->execute();
    
    $result = $stmt->get_result();
    return $result->fetch_assoc();
}

// Handle API requests
$action = $_GET['action'] ?? '';

switch ($action) {
    case 'all':
        echo json_encode(getProducts());
        break;
        
    case 'category':
        $category = $_GET['category'] ?? '';
        echo json_encode(getProducts($category));
        break;
        
    case 'product':
        $id = $_GET['id'] ?? 0;
        echo json_encode(getProduct($id));
        break;
        
    default:
        echo json_encode(['error' => 'Invalid action']);
}
?> 