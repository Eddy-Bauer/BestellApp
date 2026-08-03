let basket = [];

function renderMenu() {
  let menuContainer = document.getElementById("menu-content");
  menuContainer.innerHTML = "";

  for (let i = 0; i < menu.burgers.length; i++) {
    let currentBurger = menu.burgers[i];

    menuContainer.innerHTML += getMenuItemTemplate(currentBurger, i);
  }
}

function renderBasket() {
  let basketContainer = document.getElementById("basket-container");
  basketContainer.innerHTML = "";

  for (let i = 0; i < basket.length; i++) {
    let currentBasketItem = basket[i];

    basketContainer.innerHTML += getBasketItemTemplate(currentBasketItem, i);
  }
}

function addToBasket(){
    
}

function init() {
  renderMenu();
  renderBasket();
}
