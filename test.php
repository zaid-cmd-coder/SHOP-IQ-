<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require_once 'db_config.php';

echo "<h2>Testing Database Connection</h2>";

// Test database connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Database connection successful!<br>";
}

// Test products table
$result = $conn->query("SELECT COUNT(*) as count FROM products");
if ($result) {
    $row = $result->fetch_assoc();
    echo "Number of products: " . $row['count'] . "<br>";
} else {
    echo "Error querying products table: " . $conn->error . "<br>";
}

// Display all products
$result = $conn->query("SELECT * FROM products");
if ($result) {
    echo "<h3>Products in Database:</h3>";
    while ($row = $result->fetch_assoc()) {
        echo "ID: " . $row['id'] . "<br>";
        echo "Name: " . $row['name'] . "<br>";
        echo "Price: " . $row['price'] . "<br>";
        echo "Category: " . $row['category'] . "<br>";
        echo "<hr>";
    }
} else {
    echo "Error fetching products: " . $conn->error;
}
?> 