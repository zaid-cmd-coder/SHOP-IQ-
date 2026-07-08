// Cart functionality
class Cart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
    }

    addItem(product) {
        const existingItem = this.items.find(item => 
            item.id === product.id && item.size === product.size
        );

        if (existingItem) {
            existingItem.quantity += product.quantity;
        } else {
            this.items.push(product);
        }

        this.saveCart();
        this.updateCartIcon();
    }

    removeItem(productId, size) {
        this.items = this.items.filter(item => 
            !(item.id === productId && item.size === size)
        );
        this.saveCart();
        this.updateCartIcon();
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }

    updateCartIcon() {
        const cartCount = this.items.reduce((total, item) => total + item.quantity, 0);
        const cartIcon = document.querySelector('.cart-count');
        
        if (cartCount > 0) {
            if (!cartIcon) {
                const cartLink = document.querySelector('a[href="#cart"]');
                const countSpan = document.createElement('span');
                countSpan.className = 'cart-count';
                countSpan.textContent = cartCount;
                cartLink.appendChild(countSpan);
            } else {
                cartIcon.textContent = cartCount;
            }
        } else if (cartIcon) {
            cartIcon.remove();
        }
    }

    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
}

// Initialize cart
const cart = new Cart(); 