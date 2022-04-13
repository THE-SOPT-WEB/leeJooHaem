const $ = (selector) => document.querySelector(selector);

const burgersInCart = [];
let totalPrice = 0;

// -------------------------------------------------------

function deleteBurgerFromCart(e) {
  e.currentTarget.closest("li").remove();
}

function addNewBurgerToCart(targetBurger, targetBurgerName) {
  const targetPrice =
    targetBurger.querySelector("p.main__list-price").innerText;

  const cartList = document.createElement("li");
  cartList.innerHTML = `
    <strong>${targetBurgerName}</strong>
    <input type="number" value="1" class="main__${targetBurgerName}-amount" />
    <p>${targetPrice}</p>
    <button type="button" class="main__cart-list-delete-button">❌</button>
  `;
  $(".main__cart-list-wrapper").appendChild(cartList);
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
}

function attachClickEventToBurgerBox() {
  const burgerArticleBoxes = document.querySelectorAll(".main__list");

  burgerArticleBoxes.forEach((burgerArticleBox, idx) =>
    burgerArticleBox.addEventListener("click", (e) => addBurgerToCart(e))
  );
}

function init() {
  attachClickEventToBurgerBox();
  // 5. 취소하기 버튼
  // 6. 주분하기 버튼
}

init();
