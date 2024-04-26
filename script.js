// Примеры скриптов для добавления товаров в корзину и обработки заказов
const products = document.querySelectorAll('.product');
const cart = document.querySelector('.cart ul');
const checkoutButton = document.querySelector('.cart button');

products.forEach(product => {
    const addButton = product.querySelector('button');
    addButton.addEventListener('click', () => {
        const productName = product.querySelector('h2').textContent;
        const li = document.createElement('li');
        li.textContent = productName;
        cart.appendChild(li);
    });
});

checkoutButton.addEventListener('click', () => {
    alert('Ваш заказ оформлен!');
    cart.innerHTML = '';
});