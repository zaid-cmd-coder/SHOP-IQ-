<?php
session_start();

// Check if user is not logged in
if (!isset($_SESSION['user_id'])) {
    // If the request is AJAX
    if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
        header('Content-Type: application/json');
        echo json_encode(['error' => 'not_authenticated', 'redirect' => 'login.html']);
        exit;
    }
    // For regular requests
    header('Location: login.html');
    exit;
}
?> 