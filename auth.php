<?php
session_start();

function isLoggedIn() {
    return isset($_SESSION['user_id']);
}

function requireLogin() {
    if (!isLoggedIn()) {
        header('Location: login.html');
        exit();
    }
}

// Add this at the top of all protected pages (index.html, cart.html, etc.)
requireLogin();
?> 