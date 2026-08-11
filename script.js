let basket = [];

function renderMenu() {
  let menuContainer = document.getElementById("menu-content");
  menuContainer.innerHTML = "";

  for (let categoryKey in menu){
    let category = menu[categoryKey];
    menuContainer.innerHTML += getCategoryHeaderTemplate(category);

    for (let i = 0; i < category.items.length; i++){
      menuContainer.innerHTML += getMenuItemTemplate(category.items[i]);
    }
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

function findMenuItemById(id){
  for (let categoryKey in menu){
    let found = menu[categoryKey].items.find(item => item.id === id);
    if (found)
      return found;
  }
  return null;
}

function addToBasket(id){
   let selectedItem = findMenuItemById(id);
   let addedItem = basket.find(item => item.id === id);

   if(addedItem){
    addedItem.amount++;
   } else{
    basket.push({
      id: selectedItem.id,
      name: selectedItem.name,
      price: selectedItem.price,
      amount: 1
    });
   }

   renderMenu();
   renderBasket();
}

function increaseAmount(id){
  let item = basket.find(item => item.id === id);
  item.amount++;
  renderMenu();
  renderBasket();
}

function decreaseAmount(id){
  let item = basket.find(item => item.id === id);
  item.amount--;
  if(item.amount <= 0){
    basket = basket.filter(item => item.id !== id);
  }
  renderMenu();
  renderBasket();
}

function init() {
  renderMenu();
  renderBasket();
}
