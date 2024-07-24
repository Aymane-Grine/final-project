const products = [
    {
        name: "messi jersey",
        price: 100,
        description: "ARGENTINA WORLD CUP WINNERS JERSEY 22/23 MESSI #10.",
        image: "data:image/jpeg;base64,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",
        quantity: 10
    },
    {
        name: "GODASSE ADIDAS",
        price: 110,
        description: "GODASSE ADIDAS X",
        image: "https://joslando.com/assets/img/image/photo12715.png",
        quantity: 15
    },
    {
        name: "messi jersey",
        price: 100.,
        description: "INTER MIAMI CF 24/25 MESSI HOME JERSEY KIDS",
        image: "data:image/jpeg;base64,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",
        quantity: 20
    },
    {
        name: "messi jersey",
        price: 100,
        description: "Inter Miami CF Away Authentic Jersey 2024",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWLFDh8RABegoJBv32t0XUSswK1CH9Me1i8g&s",
        quantity: 5
    },
    {
        name: "GODASSE ADIDAS",
        price: 110,
        description: "CHAUSSURE F50 LEAGUE TERRAIN SOUPLE / MULTI-SURFACES",
        image: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/856eeba30d094096aefb6d37c6a4cac4_9366/IE0601_22_model.jpg",
        quantity: 8
    }
];

const productContainer = document.querySelector('.product-list');
const cartElement = document.querySelector('.cart');
const cartCountElement = document.getElementById('cart');
const cartItemsContainer = document.querySelector('.cart-items');

let cart = [];

products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product-item');

    productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart('${product.name}')">Add to Cart</button>
    `;

    productContainer.appendChild(productElement);
});

function addToCart(productName) {
    const product = products.find(p => p.name === productName);
    if (product) {
        const existingProduct = cart.find(p => p.name === productName);
        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCartDisplay();
    }
    updateCartCount();
}

function updateCartCount() {
    const cartCount = cart.reduce((acc, product) => acc + product.quantity, 0);
    cartCountElement.textContent = `Cart (${cartCount})`;
}

function updateCartDisplay() {
    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;
    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.innerHTML = `
            <p>${item.name} - $${item.price.toFixed(2)} x 
                <button onclick="decreaseQuantity('${item.name}')">-</button>
                ${item.quantity}
                <button onclick="increaseQuantity('${item.name}')">+</button>
            </p>
            <button class="remove" onclick="removeFromCart('${item.name}')">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItemElement);
    });
    document.querySelector('.total-price').textContent = `Total: $${totalPrice.toFixed(2)}`;
}

function increaseQuantity(productName) {
    const product = cart.find(p => p.name === productName);
    if (product) {
        product.quantity++;
        updateCartDisplay();
        updateCartCount();
    }
}

function decreaseQuantity(productName) {
    const product = cart.find(p => p.name === productName);
    if (product && product.quantity > 1) {
        product.quantity--;
        updateCartDisplay();
        updateCartCount();
    } else if (product && product.quantity === 1) {
        removeFromCart(productName);
    }
}

function removeFromCart(productName) {
    const productIndex = cart.findIndex(p => p.name === productName);
    if (productIndex !== -1) {  
        cart.splice(productIndex, 1);
        updateCartDisplay();
        updateCartCount();
    }
}

function checkout() {
    const whatsappNumber = '+212767594538';
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    const message = `Hello, I would like to order the following items:\n\n` +
                    cart.map(item => `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`).join('\n') +
                    `\n\nTotal: $${totalPrice}\n\nPlease contact me for further details.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
}

function closeCart() {
    cartElement.style.display = 'none';
}

// Toggle mobile menu
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerMenu.addEventListener('click', function () {
        mobileMenu.classList.toggle('show');
    });
});

// Show cart on mobile
document.getElementById('cart').addEventListener('click', () => {
    cartElement.style.display = 'block';
});
    