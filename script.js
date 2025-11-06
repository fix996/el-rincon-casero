// Datos iniciales con precios en formato argentino
let products = [
    {
        id: 1,
        name: "Hamburguesa Clásica",
        category: "hamburguesas",
        price: 8500,
        description: "Carne 100% vacuna, lechuga, tomate, cebolla y nuestra salsa especial.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=999&q=80",
        rating: 0,
        reviewCount: 0,
        createdAt: new Date('2023-10-15')
    },
    {
        id: 2,
        name: "Hamburguesa Doble Queso",
        category: "hamburguesas",
        price: 10500,
        description: "Doble carne, doble queso cheddar, panceta crocante y cebolla caramelizada.",
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
        rating: 0,
        reviewCount: 0,
        createdAt: new Date('2023-10-10')
    },
    {
        id: 3,
        name: "Hamburguesa Veggie",
        category: "hamburguesas",
        price: 9200,
        description: "Hamburguesa de lentejas y vegetales, con lechuga, tomate y mayonesa vegana.",
        image: "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        rating: 0,
        reviewCount: 0,
        createdAt: new Date('2023-10-05')
    },
    {
        id: 4,
        name: "Hamburguesa BBQ",
        category: "hamburguesas",
        price: 11200,
        description: "Carne a la parrilla, salsa barbacoa, aros de cebolla y queso provolone.",
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1068&q=80",
        rating: 0,
        reviewCount: 0,
        createdAt: new Date('2023-09-28')
    },
    {
        id: 5,
        name: "Sándwich de Pollo",
        category: "sandwiches",
        price: 7200,
        description: "Pechuga de pollo grillé, lechuga, tomate y mayonesa casera.",
        image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        rating: 0,
        reviewCount: 0,
        createdAt: new Date('2023-10-12')
    },
    {
        id: 6,
        name: "Sándwich de Milanesa",
        category: "sandwiches",
        price: 9800,
        description: "Milanesa de ternera, lechuga, tomate, jamón, queso y mayonesa.",
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        rating: 0,
        reviewCount: 0,
        createdAt: new Date('2023-10-08')
    },
    {
        id: 7,
        name: "Sándwich Vegano",
        category: "sandwiches",
        price: 7800,
        description: "Pan integral, hummus, aguacate, tomate, rúcula y germinados.",
        image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        rating: 0,
        reviewCount: 0,
        createdAt: new Date('2023-09-30')
    },
    {
        id: 8,
        name: "Sándwich de Lomito",
        category: "sandwiches",
        price: 12500,
        description: "Lomito de cerdo, lechuga, tomate, huevo frito y salsa criolla.",
        image: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        rating: 0,
        reviewCount: 0,
        createdAt: new Date('2023-10-03')
    },
    {
        id: 9,
        name: "Ensalada César",
        category: "ensaladas",
        price: 6800,
        description: "Lechuga romana, pollo grillé, crutones, parmesano y aderezo césar.",
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        rating: 0,
        reviewCount: 0,
        createdAt: new Date('2023-10-18')
    },
    {
        id: 10,
        name: "Ensalada Mediterránea",
        category: "ensaladas",
        price: 7500,
        description: "Mix de hojas verdes, tomate, pepino, aceitunas, queso feta y vinagreta.",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1084&q=80",
        rating: 0,
        reviewCount: 0,
        createdAt: new Date('2023-10-14')
    },
    {
        id: 11,
        name: "Ensalada de Quinoa",
        category: "ensaladas",
        price: 7200,
        description: "Quinoa, aguacate, tomate cherry, maíz, cilantro y aderezo de limón.",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        rating: 0,
        reviewCount: 0,
        createdAt: new Date('2023-10-07')
    },
    {
        id: 12,
        name: "Ensalada de Atún",
        category: "ensaladas",
        price: 7900,
        description: "Atún, lechuga, tomate, cebolla, huevo duro y aceite de oliva.",
        image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1158&q=80",
        rating: 0,
        reviewCount: 0,
        createdAt: new Date('2023-10-01')
    },
    {
        id: 13,
        name: "Coca Cola",
        category: "bebidas",
        price: 1500,
        description: "Refresco de cola 500ml.",
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        rating: 0,
        reviewCount: 0,
        createdAt: new Date('2023-10-20')
    },
    {
        id: 14,
        name: "Jugo de Naranja",
        category: "bebidas",
        price: 1800,
        description: "Jugo natural de naranja exprimido 400ml.",
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        rating: 0,
        reviewCount: 0,
        createdAt: new Date('2023-10-19')
    },
    {
        id: 15,
        name: "Agua Mineral",
        category: "bebidas",
        price: 1200,
        description: "Agua mineral sin gas 500ml.",
        image: "https://images.unsplash.com/photo-1548839149-6d3e7b625ae8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        rating: 0,
        reviewCount: 0,
        createdAt: new Date('2023-10-17')
    },
    {
        id: 16,
        name: "Cerveza Artesanal",
        category: "bebidas",
        price: 2200,
        description: "Cerveza rubia artesanal 500ml.",
        image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        rating: 0,
        reviewCount: 0,
        createdAt: new Date('2023-10-16')
    },
    {
        id: 17,
        name: "Combo Familiar",
        category: "ofertas",
        price: 25000,
        originalPrice: 30000,
        description: "3 hamburguesas + 3 papas fritas + 3 gaseosas. Perfecto para compartir en familia.",
        image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80",
        rating: 0,
        reviewCount: 0,
        createdAt: new Date('2023-10-22')
    },
    {
        id: 18,
        name: "Promo Mediodía",
        category: "ofertas",
        price: 5000,
        originalPrice: 6500,
        description: "Sándwich + bebida + postre. Ideal para el almuerzo de lunes a viernes.",
        image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
        rating: 0,
        reviewCount: 0,
        createdAt: new Date('2023-10-21')
    }
];

let reviews = [];
let cart = [];
let currentProductId = null;
let currentRating = 0;

// Elementos del DOM
const menuItemsContainer = document.getElementById('menuItems');
const cartIcon = document.getElementById('cartIcon');
const mobileCartIcon = document.getElementById('mobileCartIcon');
const cartModal = document.getElementById('cartModal');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalElement = document.getElementById('cartTotal');
const cartCountElement = document.querySelector('.cart-count');
const reviewModal = document.getElementById('reviewModal');
const reviewProductName = document.getElementById('reviewProductName');
const stars = document.querySelectorAll('.star');
const submitReviewBtn = document.getElementById('submitReview');
const checkoutBtn = document.getElementById('checkoutBtn');
const continueShoppingBtn = document.getElementById('continueShopping');
const categoryButtons = document.querySelectorAll('.category-btn');
const adminAccessBtn = document.getElementById('adminAccessBtn');
const mobileAdminBtn = document.getElementById('mobileAdminBtn');
const adminLoginModal = document.getElementById('adminLoginModal');
const adminPanelModal = document.getElementById('adminPanelModal');
const loginBtn = document.getElementById('loginBtn');
const adminTabs = document.querySelectorAll('.admin-tab');
const productList = document.getElementById('productList');
const reviewList = document.getElementById('reviewList');
const addProductBtn = document.getElementById('addProductBtn');
const adminCategoryFilter = document.getElementById('adminCategoryFilter');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
const deliveryOptions = document.querySelectorAll('input[name="deliveryType"]');
const deliveryForm = document.getElementById('deliveryForm');
const takeawayForm = document.getElementById('takeawayForm');

// Formatear precio en formato argentino
function formatPrice(price) {
    return `$${price.toLocaleString('es-AR')}`;
}

// Calcular rating promedio de un producto
function calculateProductRating(productId) {
    const productReviews = reviews.filter(review => review.productId === productId);
    if (productReviews.length === 0) return 0;
    
    const totalRating = productReviews.reduce((sum, review) => sum + review.rating, 0);
    return totalRating / productReviews.length;
}

// Actualizar rating de un producto
function updateProductRating(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        product.rating = calculateProductRating(productId);
        product.reviewCount = reviews.filter(r => r.productId === productId).length;
    }
}

// Inicializar la página
document.addEventListener('DOMContentLoaded', function() {
    renderMenuItems('todos');
    updateCartCount();
    
    // Event listeners para categorías
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Actualizar botones activos
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Renderizar productos de la categoría seleccionada
            renderMenuItems(category);
        });
    });
    
    // Event listeners para carrito
    cartIcon.addEventListener('click', openCart);
    mobileCartIcon.addEventListener('click', openCart);
    
    document.querySelectorAll('.close-modal').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            const modal = this.closest('.modal, .cart-modal');
            modal.style.display = 'none';
        });
    });
    
    // Event listeners para reseñas
    stars.forEach(star => {
        star.addEventListener('click', setRating);
        star.addEventListener('mouseover', hoverRating);
    });
    
    // Restaurar color de estrellas al quitar el mouse
    document.querySelector('.star-rating').addEventListener('mouseleave', resetStars);
    
    submitReviewBtn.addEventListener('click', submitReview);
    
    // Event listeners para checkout
    checkoutBtn.addEventListener('click', processCheckout);
    continueShoppingBtn.addEventListener('click', closeCart);
    
    // Event listeners para admin
    adminAccessBtn.addEventListener('click', () => adminLoginModal.style.display = 'flex');
    mobileAdminBtn.addEventListener('click', () => {
        closeMobileMenu();
        adminLoginModal.style.display = 'flex';
    });
    
    loginBtn.addEventListener('click', adminLoginHandler);
    
    adminTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            // Actualizar pestañas activas
            adminTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Mostrar contenido de la pestaña seleccionada
            document.querySelectorAll('.admin-tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(tabName + 'Tab').classList.add('active');
        });
    });
    
    addProductBtn.addEventListener('click', showAddProductForm);
    
    // Filtro de categorías en admin
    adminCategoryFilter.addEventListener('change', renderAdminProducts);
    
    // Cerrar modales al hacer clic fuera
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
    
    // Menú móvil
    menuToggle.addEventListener('click', openMobileMenu);
    closeMenu.addEventListener('click', closeMobileMenu);
    
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Opciones de entrega
    deliveryOptions.forEach(option => {
        option.addEventListener('change', toggleDeliveryForm);
    });
});

// Funciones para el menú móvil
function openMobileMenu() {
    mobileMenu.classList.add('active');
}

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
}

// Funciones para el menú
function renderMenuItems(category) {
    menuItemsContainer.innerHTML = '';
    
    let filteredProducts = category === 'todos' 
        ? products 
        : products.filter(product => product.category === category);
    
    if (filteredProducts.length === 0) {
        menuItemsContainer.innerHTML = '<p class="no-products">No hay productos en esta categoría</p>';
        return;
    }
    
    filteredProducts.forEach(product => {
        const ratingStars = product.rating > 0 ? 
            '★'.repeat(Math.round(product.rating)) + '☆'.repeat(5 - Math.round(product.rating)) : 
            '☆☆☆☆☆';
            
        const productElement = document.createElement('div');
        productElement.className = 'menu-item';
        productElement.innerHTML = `
            ${product.rating > 0 ? `<div class="rating-badge"><i class="fas fa-star"></i> ${product.rating.toFixed(1)}</div>` : ''}
            ${product.category === 'ofertas' ? `<div class="offer-badge">OFERTA</div>` : ''}
            <img src="${product.image}" alt="${product.name}" class="item-image">
            <div class="item-content">
                <div class="item-title">
                    <h3>${product.name}</h3>
                    <span class="item-price">
                        ${product.originalPrice ? 
                            `<span style="text-decoration: line-through; color: var(--text-light); font-size: 0.9rem; margin-right: 5px;">
                                ${formatPrice(product.originalPrice)}
                            </span>` : 
                            ''
                        }
                        ${formatPrice(product.price)}
                    </span>
                </div>
                <p class="item-description">${product.description}</p>
                <div class="item-rating">
                    <small>${ratingStars}</small>
                    <span class="rating-count"><i class="fas fa-user"></i> ${product.reviewCount}</span>
                </div>
                <div class="item-actions">
                    <button class="add-to-cart" data-id="${product.id}">Agregar al Carrito</button>
                    <button class="review-btn" data-id="${product.id}">
                        <i class="fas fa-star"></i> Valorar
                    </button>
                </div>
            </div>
        `;
        
        menuItemsContainer.appendChild(productElement);
    });
    
    // Event listeners para botones de agregar al carrito
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
    
    // Event listeners para botones de reseña
    document.querySelectorAll('.review-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            openReviewModal(productId);
        });
    });
}

// Funciones para el carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    updateCartCount();
    showNotification(`${product.name} agregado al carrito`);
}

function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = totalItems;
    document.querySelector('.mobile-cart .cart-count').textContent = totalItems;
}

function openCart() {
    renderCartItems();
    cartModal.style.display = 'flex';
}

function closeCart() {
    cartModal.style.display = 'none';
}

function renderCartItems() {
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Tu carrito está vacío</p>';
        cartTotalElement.textContent = '$0';
        document.getElementById('orderInfo').style.display = 'none';
        return;
    }
    
    document.getElementById('orderInfo').style.display = 'block';
    
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">${formatPrice(item.price)}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn increase" data-id="${item.id}">+</button>
                    <button class="remove-item" data-id="${item.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
        
        cartItemsContainer.appendChild(cartItemElement);
    });
    
    cartTotalElement.textContent = formatPrice(total);
    
    // Event listeners para botones de cantidad
    document.querySelectorAll('.decrease').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            decreaseQuantity(productId);
        });
    });
    
    document.querySelectorAll('.increase').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            increaseQuantity(productId);
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            removeFromCart(productId);
        });
    });
}

function decreaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    
    if (item.quantity > 1) {
        item.quantity -= 1;
    } else {
        cart = cart.filter(item => item.id !== productId);
    }
    
    renderCartItems();
    updateCartCount();
}

function increaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    item.quantity += 1;
    
    renderCartItems();
    updateCartCount();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    
    renderCartItems();
    updateCartCount();
}

// Funciones para valoraciones
function openReviewModal(productId) {
    currentProductId = productId;
    currentRating = 0;
    
    const product = products.find(p => p.id === productId);
    reviewProductName.textContent = product.name;
    
    // Resetear estrellas
    stars.forEach(star => {
        star.classList.remove('active');
    });
    
    // Resetear comentario y nombre
    document.getElementById('reviewComment').value = '';
    document.getElementById('reviewerName').value = '';
    
    reviewModal.style.display = 'flex';
}

function setRating(e) {
    const rating = parseInt(e.target.getAttribute('data-rating'));
    currentRating = rating;
    
    // Actualizar visualización de estrellas
    updateStarsDisplay(rating);
}

function hoverRating(e) {
    const rating = parseInt(e.target.getAttribute('data-rating'));
    updateStarsDisplay(rating);
}

function resetStars() {
    updateStarsDisplay(currentRating);
}

function updateStarsDisplay(rating) {
    stars.forEach(star => {
        const starRating = parseInt(star.getAttribute('data-rating'));
        if (starRating <= rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

function submitReview() {
    if (currentRating === 0) {
        alert('Por favor, selecciona una calificación con estrellas');
        return;
    }
    
    const comment = document.getElementById('reviewComment').value.trim();
    const reviewerName = document.getElementById('reviewerName').value.trim();
    
    if (!reviewerName) {
        alert('Por favor, ingresa tu nombre');
        return;
    }
    
    const product = products.find(p => p.id === currentProductId);
    
    reviews.push({
        productId: currentProductId,
        productName: product.name,
        rating: currentRating,
        comment: comment,
        reviewerName: reviewerName,
        date: new Date().toLocaleString()
    });
    
    // Actualizar rating del producto
    updateProductRating(currentProductId);
    
    reviewModal.style.display = 'none';
    showNotification('¡Gracias por tu valoración!');
    
    // Recargar los productos para mostrar el nuevo rating
    const activeCategory = document.querySelector('.category-btn.active').getAttribute('data-category');
    renderMenuItems(activeCategory);
}

// Funciones para opciones de entrega
function toggleDeliveryForm() {
    const deliveryType = document.querySelector('input[name="deliveryType"]:checked').value;
    
    if (deliveryType === 'delivery') {
        deliveryForm.style.display = 'block';
        takeawayForm.style.display = 'none';
    } else {
        deliveryForm.style.display = 'none';
        takeawayForm.style.display = 'block';
    }
}

// Funciones para checkout
function processCheckout() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }
    
    const deliveryType = document.querySelector('input[name="deliveryType"]:checked').value;
    let customerName, additionalInfo;
    
    if (deliveryType === 'delivery') {
        customerName = document.getElementById('customerName').value;
        const customerAddress = document.getElementById('customerAddress').value;
        const deliveryNotes = document.getElementById('deliveryNotes').value;
        
        if (!customerName || !customerAddress) {
            alert('Por favor, completa todos los campos obligatorios para el delivery');
            return;
        }
        
        additionalInfo = `*Dirección:* ${customerAddress}\n*Instrucciones:* ${deliveryNotes || 'Ninguna'}`;
    } else {
        customerName = document.getElementById('customerNameTakeaway').value;
        const pickupTime = document.getElementById('pickupTime').value;
        
        if (!customerName) {
            alert('Por favor, completa todos los campos obligatorios para take away');
            return;
        }
        
        additionalInfo = `*Retiro:* Take Away\n*Hora aproximada:* ${pickupTime || 'No especificada'}`;
    }
    
    let message = "¡Hola! Quiero realizar el siguiente pedido:\n\n";
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        message += `• ${item.name} x ${item.quantity} - ${formatPrice(itemTotal)}\n`;
    });
    
    // Agregar costo de envío si es delivery
    if (deliveryType === 'delivery') {
        total += 800;
        message += `• Delivery - ${formatPrice(800)}\n`;
    }
    
    message += `\n*Total: ${formatPrice(total)}*\n\n`;
    message += `*Información del cliente:*\n`;
    message += `*Nombre:* ${customerName}\n`;
    message += `${additionalInfo}\n\n`;
    message += "*Método de entrega:* " + (deliveryType === 'delivery' ? 'Delivery' : 'Take Away') + "\n\n";
    message += "Por favor, confirmen mi pedido. ¡Gracias!";
    
    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Abrir WhatsApp con el mensaje
    window.open(`https://wa.me/5491122334455?text=${encodedMessage}`, '_blank');
    
    // Limpiar carrito después del pedido
    cart = [];
    updateCartCount();
    closeCart();
    
    // Limpiar formularios
    document.getElementById('customerName').value = '';
    document.getElementById('customerAddress').value = '';
    document.getElementById('deliveryNotes').value = '';
    document.getElementById('customerNameTakeaway').value = '';
    document.getElementById('pickupTime').value = '';
    
    showNotification('Pedido enviado por WhatsApp');
}

// Funciones para admin
function adminLoginHandler() {
    const username = document.getElementById('adminUsername').value;
    const password = document.getElementById('adminPassword').value;
    
    // Credenciales simples (en un caso real, esto debería ser más seguro)
    if (username === 'admin' && password === 'admin123') {
        adminLoginModal.style.display = 'none';
        adminPanelModal.style.display = 'flex';
        
        renderAdminProducts();
        renderAdminReviews();
    } else {
        alert('Usuario o contraseña incorrectos');
    }
}

function renderAdminProducts() {
    productList.innerHTML = '';
    
    const categoryFilter = adminCategoryFilter.value;
    let filteredProducts = categoryFilter === 'todos' 
        ? products 
        : products.filter(product => product.category === categoryFilter);
    
    if (filteredProducts.length === 0) {
        productList.innerHTML = '<p>No hay productos en esta categoría</p>';
        return;
    }
    
    filteredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product-item';
        productElement.innerHTML = `
            <div>
                <strong>${product.name}</strong> - ${formatPrice(product.price)}
                ${product.originalPrice ? 
                    `<span style="text-decoration: line-through; color: var(--text-light); font-size: 0.9rem; margin-left: 5px;">
                        ${formatPrice(product.originalPrice)}
                    </span>` : 
                    ''
                }
                <br>
                <small>${product.description}</small>
                <br>
                <small>
                    <span class="product-category">${product.category}</span> | 
                    Valoración: ${product.rating > 0 ? '★'.repeat(Math.round(product.rating)) + '☆'.repeat(5 - Math.round(product.rating)) + ` (${product.rating.toFixed(1)})` : 'Sin valoraciones'} - ${product.reviewCount} reseñas
                </small>
            </div>
            <div class="product-actions">
                <button class="edit-btn" data-id="${product.id}">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="delete-btn" data-id="${product.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        productList.appendChild(productElement);
    });
    
    // Event listeners para botones de productos
    document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            editProduct(productId);
        });
    });
    
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            deleteProduct(productId);
        });
    });
}

function renderAdminReviews() {
    reviewList.innerHTML = '';
    
    if (reviews.length === 0) {
        reviewList.innerHTML = '<p>No hay valoraciones aún</p>';
        return;
    }
    
    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.className = 'review-item';
        reviewElement.innerHTML = `
            <div>
                <strong>${review.productName}</strong>
                <div>${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
                <p>${review.comment || 'Sin comentario'}</p>
                <small>${review.reviewerName ? `Por: ${review.reviewerName} | ` : ''}${review.date}</small>
            </div>
            <div class="review-actions">
                <button class="delete-btn" data-id="${review.productId}" data-date="${review.date}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        reviewList.appendChild(reviewElement);
    });
    
    // Event listeners para botones de valoraciones
    document.querySelectorAll('#reviewsTab .delete-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            const date = this.getAttribute('data-date');
            deleteReview(productId, date);
        });
    });
}

function showAddProductForm() {
    const formHTML = `
        <div class="form-group">
            <label for="newProductName">Nombre</label>
            <input type="text" id="newProductName">
        </div>
        <div class="form-group">
            <label for="newProductCategory">Categoría</label>
            <select id="newProductCategory">
                <option value="hamburguesas">Hamburguesas</option>
                <option value="sandwiches">Sándwiches</option>
                <option value="ensaladas">Ensaladas</option>
                <option value="bebidas">Bebidas</option>
                <option value="ofertas">Promociones</option>
            </select>
        </div>
        <div class="form-group">
            <label for="newProductPrice">Precio</label>
            <input type="number" id="newProductPrice" min="0">
        </div>
        <div class="form-group">
            <label for="newProductOriginalPrice">Precio Original (solo ofertas)</label>
            <input type="number" id="newProductOriginalPrice" min="0" placeholder="Dejar vacío si no es oferta">
        </div>
        <div class="form-group">
            <label for="newProductDescription">Descripción</label>
            <textarea id="newProductDescription"></textarea>
        </div>
        <div class="form-group">
            <label for="newProductImage">URL de la imagen</label>
            <input type="text" id="newProductImage">
        </div>
        <div class="form-actions">
            <button class="btn btn-primary" id="saveProductBtn">Guardar Producto</button>
            <button class="btn btn-secondary" id="cancelProductBtn">Cancelar</button>
        </div>
    `;
    
    productList.innerHTML = formHTML;
    
    document.getElementById('saveProductBtn').addEventListener('click', saveNewProduct);
    document.getElementById('cancelProductBtn').addEventListener('click', renderAdminProducts);
}

function saveNewProduct() {
    const name = document.getElementById('newProductName').value;
    const category = document.getElementById('newProductCategory').value;
    const price = parseFloat(document.getElementById('newProductPrice').value);
    const originalPrice = document.getElementById('newProductOriginalPrice').value ? 
        parseFloat(document.getElementById('newProductOriginalPrice').value) : null;
    const description = document.getElementById('newProductDescription').value;
    const image = document.getElementById('newProductImage').value;
    
    if (!name || !category || !price || !description || !image) {
        alert('Por favor, completa todos los campos obligatorios');
        return;
    }
    
    const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
    
    products.push({
        id: newId,
        name,
        category,
        price,
        originalPrice,
        description,
        image,
        rating: 0,
        reviewCount: 0,
        createdAt: new Date()
    });
    
    renderAdminProducts();
    showNotification('Producto agregado exitosamente');
}

function editProduct(productId) {
    const product = products.find(p => p.id === productId);
    
    const formHTML = `
        <div class="form-group">
            <label for="editProductName">Nombre</label>
            <input type="text" id="editProductName" value="${product.name}">
        </div>
        <div class="form-group">
            <label for="editProductCategory">Categoría</label>
            <select id="editProductCategory">
                <option value="hamburguesas" ${product.category === 'hamburguesas' ? 'selected' : ''}>Hamburguesas</option>
                <option value="sandwiches" ${product.category === 'sandwiches' ? 'selected' : ''}>Sándwiches</option>
                <option value="ensaladas" ${product.category === 'ensaladas' ? 'selected' : ''}>Ensaladas</option>
                <option value="bebidas" ${product.category === 'bebidas' ? 'selected' : ''}>Bebidas</option>
                <option value="ofertas" ${product.category === 'ofertas' ? 'selected' : ''}>Promociones</option>
            </select>
        </div>
        <div class="form-group">
            <label for="editProductPrice">Precio</label>
            <input type="number" id="editProductPrice" value="${product.price}" min="0">
        </div>
        <div class="form-group">
            <label for="editProductOriginalPrice">Precio Original (solo ofertas)</label>
            <input type="number" id="editProductOriginalPrice" value="${product.originalPrice || ''}" min="0" placeholder="Dejar vacío si no es oferta">
        </div>
        <div class="form-group">
            <label for="editProductDescription">Descripción</label>
            <textarea id="editProductDescription">${product.description}</textarea>
        </div>
        <div class="form-group">
            <label for="editProductImage">URL de la imagen</label>
            <input type="text" id="editProductImage" value="${product.image}">
        </div>
        <div class="form-actions">
            <button class="btn btn-primary" id="updateProductBtn" data-id="${productId}">Actualizar Producto</button>
            <button class="btn btn-secondary" id="cancelEditBtn">Cancelar</button>
        </div>
    `;
    
    productList.innerHTML = formHTML;
    
    document.getElementById('updateProductBtn').addEventListener('click', function() {
        updateProduct(productId);
    });
    
    document.getElementById('cancelEditBtn').addEventListener('click', renderAdminProducts);
}

function updateProduct(productId) {
    const name = document.getElementById('editProductName').value;
    const category = document.getElementById('editProductCategory').value;
    const price = parseFloat(document.getElementById('editProductPrice').value);
    const originalPrice = document.getElementById('editProductOriginalPrice').value ? 
        parseFloat(document.getElementById('editProductOriginalPrice').value) : null;
    const description = document.getElementById('editProductDescription').value;
    const image = document.getElementById('editProductImage').value;
    
    if (!name || !category || !price || !description || !image) {
        alert('Por favor, completa todos los campos obligatorios');
        return;
    }
    
    const productIndex = products.findIndex(p => p.id === productId);
    
    if (productIndex !== -1) {
        products[productIndex] = {
            ...products[productIndex],
            name,
            category,
            price,
            originalPrice,
            description,
            image
        };
    }
    
    renderAdminProducts();
    showNotification('Producto actualizado exitosamente');
}

function deleteProduct(productId) {
    if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
        products = products.filter(p => p.id !== productId);
        // También eliminar las reseñas asociadas
        reviews = reviews.filter(r => r.productId !== productId);
        renderAdminProducts();
        showNotification('Producto eliminado exitosamente');
    }
}

function deleteReview(productId, date) {
    if (confirm('¿Estás seguro de que quieres eliminar esta valoración?')) {
        reviews = reviews.filter(r => !(r.productId === productId && r.date === date));
        // Actualizar rating del producto
        updateProductRating(productId);
        renderAdminReviews();
        showNotification('Valoración eliminada exitosamente');
    }
}

// Función auxiliar para mostrar notificaciones
function showNotification(message) {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: var(--success-color);
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 10000;
        box-shadow: 0 3px 10px rgba(0,0,0,0.2);
        transition: opacity 0.3s;
    `;
    
    document.body.appendChild(notification);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}