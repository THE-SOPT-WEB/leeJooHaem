const $ = (selector) => document.querySelector(selector);
const burgerArticleBoxes = document.querySelectorAll(".main__list");
const totalPriceElement = $(".main__cart-total-price");
const burgerListsOnCart = $(".main__cart-list-wrapper");

let totalPrice = 0;

// -------------------------------------------------------

function addBurgerToCart(idx, e) {
  const targetName =
    e.currentTarget.querySelector(".main__list-text").innerText;
  const targetPrice =
    e.currentTarget.querySelector(".main__list-price").innerText;

  const cartList = document.createElement("li");
  cartList.innerHTML = `
    <strong>${targetName}</strong>
    <input type="number" value="1" />
    <p>${targetPrice}</p>
    <button type="button">❌</button>
  `;
  $(".main__cart-list-wrapper").appendChild(cartList);
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
