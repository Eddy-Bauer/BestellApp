let basket = [];
let confirmationTimer = null;

function renderMenu() {
  const menuContainer = document.getElementById("menu-content");
  menuContainer.innerHTML = "";

  for (let categoryKey in menu){
    const category = menu[categoryKey];
    menuContainer.innerHTML += getCategoryHeaderTemplate(category);

    for (let i = 0; i < category.items.length; i++){
      menuContainer.innerHTML += getMenuItemTemplate(category.items[i]);
    }
  }
}

function renderBasket() {
  const basketContainer = document.getElementById("basket-content");
  const calcContainer = document.querySelector(".calculation");

  if (basket.length === 0) {
    basketContainer.innerHTML = getEmptyBasketTemplate();
    calcContainer.innerHTML = "";    // keine Summen/Buy-Button anzeigen, wenn nichts drin ist
  } else {
    basketContainer.innerHTML = "";
    for (let i = 0; i < basket.length; i++) {
      basketContainer.innerHTML += getBasketItemTemplate(basket[i]);
    }
    calcContainer.innerHTML = getCalculationTemplate(basket);
  }

  updateCartIndicator();
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
   const selectedItem = findMenuItemById(id);
   const addedItem = basket.find(item => item.id === id);

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
  const item = basket.find(item => item.id === id);
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

function openBasket(){
  document.getElementById("basketWrapper").classList.add("open");
  document.getElementById("basketBackdrop").classList.add("open");
  document.documentElement.classList.add("no-scroll");
  document.body.classList.add("no-scroll");
}

function closeBasket(){
  document.getElementById("basketWrapper").classList.remove("open");
  document.getElementById("basketBackdrop").classList.remove("open");
  document.documentElement.classList.remove("no-scroll");
  document.body.classList.remove("no-scroll");
}

function scrollToTop(){
  window.scrollTo({ top: 0, behavior: "smooth"});
}

function removeFromBasket(id){
  basket = basket.filter(item => item.id !== id);
  renderMenu();
  renderBasket();
}

function handleBuyNow(){
  closeBasket();

  document.getElementById("confirmationDialog").classList.add("open");
  document.getElementById("basketBackdrop").classList.add("open");

  basket = [];
  renderMenu();
  renderBasket();

  confirmationTimer = setTimeout(closeConfirmation, 5000);
}

function closeConfirmation(){
  document.getElementById("confirmationDialog").classList.remove("open");
  document.getElementById("basketBackdrop").classList.remove("open");
  clearTimeout(confirmationTimer);
}

function updateCartIndicator(){
  const totalCount = basket.reduce((sum, item) => sum + item.amount, 0);
  const cartBtn = document.getElementById("cartBtn");
  const cartBadge = document.getElementById("cartBadge");

  cartBadge.textContent = totalCount;

  if (totalCount > 0 ){
    cartBtn.classList.add("active");
    cartBadge.classList.add("visible");
  } else{
    cartBtn.classList.remove("active");
    cartBadge.classList.remove("visible");
  }
}