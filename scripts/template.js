// 1. Template für die linke Seite
function getMenuItemTemplate(burger, index) {
  let formattedPrice = burger.price.toFixed(2);

  return `
        <div class="menu-item-card">
            <div class="menu-info">
                <h3>${burger.name}</h3>
                <p>${burger.description}</p>
                <span class="price">${formattedPrice}€</span>
            </div>
            <button class="add-btn" onclick="addToBasket(${index})">Hinzufügen</button>
        </div>
    `;
}

// 2. Template für die rechte Seite (Warenkorb)
function getBasketItemTemplate(basketItem, index) {
  let totalPrice = (basketItem.price * basketItem.amount).toFixed(2);

  return `
        <div class="basket-item">
            <div class="item-name">${basketItem.amount} x ${basketItem.name}</div>
            <div class="item-details">
                <div class="item-controls">
                    <button class="btn-icon" onclick="decreaseAmount(${index})">-</button>
                    <span>${basketItem.amount}</span>
                    <button class="btn-icon" onclick="increaseAmount(${index})">+</button>
                </div>
                <div class="item-price">${totalPrice}€</div>
            </div>
        </div>
    `;
}

// Template für den Amount
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
        <button class="buy-button">Buy now (${total.toFixed(2)}€)</button>
    `;
}
