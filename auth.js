function checkAuth() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser && window.location.pathname !== '/login.html') {
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

// Check authentication on page load
document.addEventListener('DOMContentLoaded', function() {
    checkAuth();
});

// Prevent back button from bypassing auth
window.addEventListener('popstate', function() {
    checkAuth();
}); 