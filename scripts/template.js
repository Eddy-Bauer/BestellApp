function getMenuItemTemplate(item) {
    let formattedPrice = item.price.toFixed(2);
    let basketItem = basket.find(b => b.id === item.id);

    let actionHtml = basketItem
        ? `<span class="added-badge">Added ${basketItem.amount}</span>`
        : `<button class="add-btn" onclick="addToBasket('${item.id}')">Add to basket</button>`;

    return `
        <div class="menu-item-card">
            <img src="${item.image}" alt="${item.name}" class="menu-item-img" />
            <div class="menu-info">
                
                    <h3 class="item-title">${item.name}</h3>
                    <span class="price">${formattedPrice}€</span>
                
                <p>${item.description}</p>
                ${actionHtml}
            </div>
        </div>
    `;
}


function getBasketItemTemplate(basketItem, id) {
  let totalPrice = (basketItem.price * basketItem.amount).toFixed(2);

  return `
        <div class="basket-item">
            <button class="delete-btn" onclick="removeFromBasket('${basketItem.id}')">
            <img src="./assets/icons/delete.png" alt="Papierkorb-icon" class="icon-default">
            <img src="./assets/icons/delete-hover.png" alt="Papierkorb-icon" class="icon-hover">
            </button>
            <div class="item-name">${basketItem.amount} x ${basketItem.name}</div>
            <div class="item-details">
                <div class="item-controls">
                    <button class="btn-icon" onclick="decreaseAmount('${basketItem.id}')">-</button>
                    <span>${basketItem.amount}</span>
                    <button class="btn-icon" onclick="increaseAmount('${basketItem.id}')">+</button>
                </div>
                <div class="item-price">${totalPrice}€</div>
            </div>
        </div>
    `;
}


function getCalculationTemplate(basket) {
  let subtotal = basket.reduce((sum, item) => sum + item.price * item.amount,0,);
  let deliveryFee = 4.99;
  let total = subtotal + deliveryFee;

  return `
        <div class="calc-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
        </div>
        <div class="calc-row">
            <span>Delivery fee</span>
            <span>${deliveryFee.toFixed(2)}€</span>
        </div>
        <hr class="calc-divider">
        <div class="calc-total">
            <span>Total</span>
            <span>${total.toFixed(2)}€</span>
        </div>
        <button class="buy-button" onclick="handleBuyNow()"> Buy now (${total.toFixed(2)}€)</button>
    `;
}


function getCategoryHeaderTemplate(category) {
    return `
        <div class="category-header">
            <img src="${category.icon}" alt="${category.title}" class="category-icon" />
            <h2>${category.title}</h2>
        </div>
    `;
}
