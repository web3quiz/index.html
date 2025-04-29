// Данные товаров
const products = [
    {
        id: 1,
        title: "Смартфон Premium",
        description: "Флагманский смартфон с AMOLED-экраном 6.7\", процессором Snapdragon 8 Gen 2, 12 ГБ оперативной памяти и 256 ГБ встроенной памяти. Основная камера 108 Мп с оптической стабилизацией.",
        price: 89990,
        rating: 4.8,
        sales: 215,
        image: "https://via.placeholder.com/300x200/6a1b9a/ffffff?text=Phone"
    },
    {
        id: 2,
        title: "Ноутбук Ultra",
        description: "Ультрабук с диагональю 15.6\", процессором Intel Core i9-13900H, 32 ГБ RAM, SSD 1 ТБ, видеокарта NVIDIA RTX 4070. Корпус из магниевого сплава, вес всего 1.8 кг.",
        price: 149990,
        rating: 4.9,
        sales: 132,
        image: "https://via.placeholder.com/300x200/9c4dcc/ffffff?text=Laptop"
    },
    {
        id: 3,
        title: "Наушники Elite",
        description: "Беспроводные наушники с активным шумоподавлением и технологией пространственного звука. Время работы до 40 часов, поддержка Hi-Res Audio, влагозащита IPX5.",
        price: 24990,
        rating: 4.7,
        sales: 342,
        image: "https://via.placeholder.com/300x200/38006b/ffffff?text=Headphones"
    }
];

let cart = [];

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log('Документ загружен, начинаем инициализацию');
    
    // Проверка основных элементов DOM
    if (!document.getElementById('products-container')) {
        console.error('ОШИБКА: Не найден элемент products-container');
        return;
    }
    
    // Подключение шрифта Inter
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);
    
    // Загрузка корзины
    loadCart();
    
    // Первоначальный рендеринг
    renderProducts();
    updateCartCount();
    
    console.log('Инициализация завершена, товаров:', products.length);
});

// Функция рендеринга товаров
function renderProducts() {
    const container = document.getElementById('products-container');
    
    // Проверка контейнера
    if (!container) {
        console.error('ОШИБКА: Контейнер товаров не найден');
        return;
    }
    
    console.log('Начало рендеринга товаров');
    
    // Очистка контейнера
    container.innerHTML = '';
    
    // Проверка наличия товаров
    if (!products || products.length === 0) {
        container.innerHTML = `
            <div class="empty-products">
                <i class="fas fa-box-open"></i>
                <p>Товары временно отсутствуют</p>
            </div>
        `;
        console.warn('Нет товаров для отображения');
        return;
    }
    
    // Создание карточек товаров
    products.forEach((product, index) => {
        const card = createProductCard(product, index);
        container.appendChild(card);
    });
    
    console.log('Рендеринг завершен, создано карточек:', products.length);
}

// Создание карточки товара
function createProductCard(product, index) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        <div class="product-card-inner">
            <div class="product-card-front">
                <img src="${product.image}" alt="${product.title}" class="product-image" loading="lazy">
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <div class="product-rating">
                        ${renderRating(product.rating)}
                        <span>${product.rating.toFixed(1)}</span>
                    </div>
                    <div class="product-sales">
                        <i class="fas fa-chart-line"></i>
                        Продано: ${product.sales} шт.
                    </div>
                    <div class="product-price">${formatPrice(product.price)}</div>
                </div>
                <div class="product-actions">
                    <button class="btn btn-flip" onclick="flipCard(this)">
                        <i class="fas fa-info-circle"></i>
                    </button>
                    <button class="btn btn-buy" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i> Купить
                    </button>
                </div>
            </div>
            <div class="product-card-back">
                <h3>${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${formatPrice(product.price)}</div>
                <button class="btn btn-buy" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Купить
                </button>
                <button class="btn btn-flip" onclick="flipCard(this)" style="margin-top: 10px;">
                    <i class="fas fa-arrow-left"></i> Назад
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Форматирование цены
function formatPrice(price) {
    return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        maximumFractionDigits: 0
    }).format(price).replace('₽', 'руб.');
}

// Рендер рейтинга звездами
function renderRating(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Переворот карточки
function flipCard(button) {
    const productCard = button.closest('.product-card');
    if (productCard) {
        productCard.classList.toggle('flipped');
    }
}

// Добавление товара в корзину
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    updateCartCount();
    showCart();
    renderCartItems();
    saveCart();
    
    animateCartIcon();
    showNotification(`${product.title} добавлен в корзину`, 'success');
}

// Анимация иконки корзины
function animateCartIcon() {
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.classList.add('animate-bounce');
        setTimeout(() => {
            cartIcon.classList.remove('animate-bounce');
        }, 1000);
    }
}

// Обновление счетчика корзины
function updateCartCount() {
    const countElement = document.getElementById('cart-count');
    if (countElement) {
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        countElement.textContent = count;
    }
}

// Показать корзину
function showCart() {
    const cartContainer = document.getElementById('cart-container');
    if (cartContainer) {
        cartContainer.classList.remove('hidden');
        document.body.classList.add('no-scroll');
        renderCartItems();
    }
}

// Скрыть корзину
function hideCart() {
    const cartContainer = document.getElementById('cart-container');
    if (cartContainer) {
        cartContainer.classList.add('hidden');
        document.body.classList.remove('no-scroll');
    }
}

// Рендер товаров в корзине
function renderCartItems() {
    const container = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    
    if (!container || !totalPriceElement) return;

    container.innerHTML = '';

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-basket"></i>
                <p>Ваша корзина пуста</p>
            </div>
        `;
        totalPriceElement.textContent = '0 руб.';
        return;
    }

    let totalPrice = 0;

    cart.forEach(item => {
        totalPrice += item.price * item.quantity;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="cart-item-image" loading="lazy">
            <div class="cart-item-details">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-price">${formatPrice(item.price)} × ${item.quantity}</div>
                <div class="cart-item-actions">
                    <button onclick="changeQuantity(${item.id}, -1)">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="cart-item-quantity">${item.quantity}</span>
                    <button onclick="changeQuantity(${item.id}, 1)">
                        <i class="fas fa-plus"></i>
                    </button>
                    <span class="cart-item-remove" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </span>
                </div>
            </div>
        `;
        container.appendChild(cartItem);
    });

    totalPriceElement.textContent = formatPrice(totalPrice);
}

// Изменение количества товара
function changeQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        cart = cart.filter(item => item.id !== productId);
    }

    updateCartCount();
    renderCartItems();
    saveCart();
}

// Удаление товара из корзины
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    renderCartItems();
    saveCart();
}

// Оформление заказа
function checkout() {
    if (cart.length === 0) {
        showNotification('Корзина пуста!', 'error');
        return;
    }

    const modal = document.getElementById('checkout-modal');
    if (modal) {
        modal.classList.remove('hidden');
    }
}

// Закрытие модального окна
function closeModal() {
    const modal = document.getElementById('checkout-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

// Обработка заказа
function processOrder() {
    const name = document.getElementById('name')?.value.trim();
    const phone = document.getElementById('phone')?.value.trim();
    const address = document.getElementById('address')?.value.trim();
    const comments = document.getElementById('comments')?.value.trim();
    
    if (!name || !phone || !address) {
        showNotification('Пожалуйста, заполните все обязательные поля', 'error');
        return;
    }
    
    // Формируем сообщение для Telegram
    let message = `🛒 <b>Новый заказ!</b>\n\n`;
    message += `👤 <b>Имя:</b> ${name}\n`;
    message += `📞 <b>Телефон:</b> ${phone}\n`;
    message += `🏠 <b>Адрес:</b> ${address}\n`;
    message += `💬 <b>Комментарий:</b> ${comments || 'нет'}\n\n`;
    message += `<b>Товары:</b>\n`;
    
    cart.forEach(item => {
        message += `- ${item.title} (${item.quantity} шт.) - ${formatPrice(item.price * item.quantity)}\n`;
    });
    
    message += `\n<b>Итого:</b> ${formatPrice(cart.reduce((total, item) => total + item.price * item.quantity, 0))}`;
    
    // Здесь нужно указать ID вашего Telegram бота и чата
    const botToken = '8096989937:AAH7exO0g9EeheNwBcFTbs8Q1hP1HGmG4UI';
    const chatId = '543221724';
    
    // Показываем загрузку
    const submitBtn = document.querySelector('#checkout-form .submit-btn');
    if (submitBtn) {
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Отправка...';
        submitBtn.disabled = true;
        
        // Отправка сообщения в Telegram
        fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: 'HTML'
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                showNotification('Заказ успешно отправлен! Мы свяжемся с вами в ближайшее время.', 'success');
                
                // Очищаем корзину после успешного оформления
                cart = [];
                updateCartCount();
                renderCartItems();
                saveCart();
                
                // Закрываем модальное окно и сбрасываем форму
                closeModal();
                document.getElementById('checkout-form')?.reset();
            } else {
                showNotification('Ошибка при отправке заказа. Попробуйте позже.', 'error');
                console.error('Telegram API Error:', data);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showNotification('Ошибка соединения. Попробуйте позже.', 'error');
        })
        .finally(() => {
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
        });
    }
}

// Показать уведомление
function showNotification(text, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        ${text}
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Загрузка корзины из localStorage
function loadCart() {
    try {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
            if (!Array.isArray(cart)) {
                cart = [];
            }
        }
    } catch (e) {
        console.error('Ошибка загрузки корзины:', e);
        cart = [];
    }
}

// Сохранение корзины в localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Добавляем функции в глобальную область видимости
window.flipCard = flipCard;
window.addToCart = addToCart;
window.changeQuantity = changeQuantity;
window.removeFromCart = removeFromCart;
window.showCart = showCart;
window.hideCart = hideCart;
window.checkout = checkout;
window.closeModal = closeModal;