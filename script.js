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
  let basketContainer = document.getElementById("basket-content");
  basketContainer.innerHTML = "";

  for (let i = 0; i < basket.length; i++) {
    let currentBasketItem = basket[i];
    basketContainer.innerHTML += getBasketItemTemplate(currentBasketItem, i);
  }
    let calcContainer = document.querySelector(".calculation");
    calcContainer.innerHTML = getCalculationTemplate(basket);
}

function addToBasket(index){
   let selectedBurger = menu.burgers[index];
   let addedItem = basket.find(item => item.name === selectedBurger.name);

   if(addedItem){
    addedItem.amount++;
   } else{
    basket.push({
      name: selectedBurger.name,
      price: selectedBurger.price,
      amount: 1
    });
   }
   renderBasket();
}

function init() {
  renderMenu();
  renderBasket();
}
