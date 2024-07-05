const row = document.querySelector(".row");
const more = document.querySelector("#more");
const productCard = document.querySelector(".products");

let products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

getProducts(products);

var click = 0;
more.addEventListener("click", function () {
  click++;
  if (click == 1) {
    fetch(`https://codingapple1.github.io/js/more1.json`)
      .then((response) => response.json())
      .then((data) => {
        getProducts(data);
      });
  } else if (click == 2) {
    fetch(`https://codingapple1.github.io/js/more2.json`)
      .then((response) => response.json())
      .then((data) => {
        getProducts(data);
      });
  }
});

function getProducts(data) {
  data.sort(function (a, b) {
    return a.price - b.price;
  });
  data.forEach((a, i) => {
    var 템플릿 = `<div class="col-sm-4">
  <img src="https://via.placeholder.com/600" class="w-100">
  <h5>${data[i].title}</h5>
  <p>가격 : ${data[i].price}</p>
  <button class="buy">구매</button>
</div>`;
    row.insertAdjacentHTML("beforeend", 템플릿);
  });
}

const buyBtn = document.querySelectorAll(".buy");
buyBtn.forEach((button) => {
  button.addEventListener("click", function (e) {
    let title =
      e.target.previousElementSibling.previousElementSibling.textContent;
    let cart = JSON.parse(localStorage.getItem("cart")) || {};
    if (cart[title]) {
      cart[title]++; //이미 장바구니에 있으면 개수 증가
    } else {
      cart[title] = 1; // 장바구니에 없으면 새로 추가하고 개수 1로 설정
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCartItems();
  });
});

function displayCartItems() {
  let cart = JSON.parse(localStorage.getItem("cart")) || {};
  productCard.innerHTML = "";
  for (let title in cart) {
    let template = `<div class="col-sm-4">
    <h5>${title}</h5>
    <p>수량: ${cart[title]}</p>
    </div>`;
    productCard.insertAdjacentHTML("beforeend", template);
  }
}

displayCartItems();
