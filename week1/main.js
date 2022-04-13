const $ = (selector) => document.querySelector(selector);
const burgerArticleBoxes = document.querySelectorAll(".main__list");
const totalPriceElement = $(".main__cart-total-price");
const burgerListsOnCart = $(".main__cart-list-wrapper");

let totalPrice = 0;

// -------------------------------------------------------

function deleteBurgerFromCart(e) {
  e.currentTarget.closest("li").remove();
}

function addBurgerToCart(idx, e) {
  const targetName = e.currentTarget.querySelector(
    "strong.main__list-text"
  ).innerText;
  const targetPrice =
    e.currentTarget.querySelector("p.main__list-price").innerText;

  const cartList = document.createElement("li");
  cartList.innerHTML = `
    <strong>${targetName}</strong>
    <input type="number" value="1" />
    <p>${targetPrice}</p>
    <button type="button" class="main__cart-list-delete-buttonn">❌</button>
  `;
  $(".main__cart-list-wrapper").appendChild(cartList);

  const cartListDelBtn = cartList.querySelector(
    "button.main__cart-list-delete-buttonn"
  );
  cartListDelBtn.addEventListener("click", (e) => deleteBurgerFromCart(e));
}

function attachClickEventToBurgerBox() {
  burgerArticleBoxes.forEach((burgerArticleBox, idx) =>
    burgerArticleBox.addEventListener("click", (e) => addBurgerToCart(idx, e))
  );
}

function init() {
  attachClickEventToBurgerBox();
  // 5. 취소하기 버튼
  // 6. 주분하기 버튼
}

init();
