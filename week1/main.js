const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const cartListsWrapper = $(".main__cart-list-wrapper");
const modal = $(".modal");

const burgersInCart = [];

const parsePriceToNumber = (price) => {
  const removedComma = price.slice(0, -1).replace(/\D/g, "");

  return +removedComma;
};

// -------------------------------------------------------

function calculateTotalPrice() {
  let totalPrice = 0;
  const cartLists = $$(".main__cart-list");

  cartLists.forEach((cartList) => {
    const currentPrice = parsePriceToNumber(
      cartList.querySelector("p.main__cart-list-price").innerText
    );
    const currentAmount = cartList.querySelector(
      "input.main__cart-list-amount"
    ).value;
    totalPrice += currentPrice * currentAmount;
  });

  $(".main__cart-total-price").innerText = `${totalPrice.toLocaleString()}원`;
}

function deleteBurgerFromCart(e) {
  e.currentTarget.closest("li").remove();

  calculateTotalPrice();
}

function addNewBurgerToCart(targetBurger, targetBurgerName) {
  const targetPrice =
    targetBurger.querySelector("p.main__list-price").innerText;

  const cartList = document.createElement("li");
  cartList.classList.add("main__cart-list");
  cartList.innerHTML = `
    <strong>${targetBurgerName}</strong>
    <input type="number" value="1" min="1" class="main__cart-list-amount main__${targetBurgerName}-amount" />
    <p class="main__cart-list-price">${targetPrice}</p>
    <button type="button" class="main__cart-list-delete-button">❌</button>
  `;
  cartListsWrapper.appendChild(cartList);
  cartList
    .querySelector(`.main__${targetBurgerName}-amount`)
    .addEventListener("change", calculateTotalPrice);
  cartList
    .querySelector("button.main__cart-list-delete-button")
    .addEventListener("click", (e) => deleteBurgerFromCart(e));
}

function addExistBurgerToCart(targetBurgerName) {
  $(`.main__${targetBurgerName}-amount`).value++;
}

function addBurgerToCart(e) {
  const targetBurger = e.currentTarget;
  const targetBurgerName = targetBurger.querySelector(
    "strong.main__list-text"
  ).innerText;

  if (!burgersInCart.includes(targetBurgerName)) {
    burgersInCart.push(targetBurgerName);
    addNewBurgerToCart(targetBurger, targetBurgerName);
  } else {
    addExistBurgerToCart(targetBurgerName);
  }

  calculateTotalPrice();
}

// -------------------------------------------------------

function attachClickEventToBurgerBox() {
  const burgerArticleBoxes = $$(".main__list");

  burgerArticleBoxes.forEach((burgerArticleBox) =>
    burgerArticleBox.addEventListener("click", (e) => addBurgerToCart(e))
  );
}

function orderMyBurger() {
  modal.classList.remove("hide");
}

function cancelMyOrder() {
  cartListsWrapper.innerHTML = "";
  burgersInCart = [];

  calculateTotalPrice();
}

function cancelModal() {
  modal.classList.add("hide");
}

function attachClickEventToButtonsOnCartBox() {
  const orderBtn = $(".main__cart-button-order");
  const cancelBtn = $(".main__cart-button-cancel");
  const modalCancelBtn = $(".modal__cancel-btn");

  orderBtn.addEventListener("click", orderMyBurger);
  cancelBtn.addEventListener("click", cancelMyOrder);
  modalCancelBtn.addEventListener("click", cancelModal);
}

function init() {
  attachClickEventToBurgerBox();
  attachClickEventToButtonsOnCartBox();
}

init();
