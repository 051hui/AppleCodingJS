const login = document.querySelector("#login");
const form = document.querySelector("form");

login.addEventListener("click", showModal());

function showModal() {
  document.querySelector(".black-bg").classList.add("show-modal");
}

form.addEventListener("submit", function (e) {
  if (
    document.getElementById("email").value == "" ||
    document.getElementById("password").value == ""
  ) {
    alert("공란 안돼요");
    e.preventDefault(); //폼 전송 막음
  } else if (document.getElementById("password").value.length < 6) {
    alert("비밀번호 6자 이상이요");
  }
});

//darkmode, lightmode
var count = 0;
document.querySelector("#badge").addEventListener("click", function () {
  count = count + 1;
  if (count % 2 == 1) {
    badge.innerHTML = "Light";
  } else {
    badge.innerHTML = "Dark";
  }
});

var 예금액 = 10000;
var 미래예금액 = 0;
function totalMoney(예금액) {
  if (예금액 < 50000) {
    미래예금액 = 예금액 * 1.15 * 1.15;
  } else {
    미래예금액 = 예금액 * 1.2 * 1.2;
  }
}
totalMoney(예금액);
console.log(미래예금액);

var first = 360;
var last = 0;
last = first + (first * 2) / 3 + (((first * 2) / 3) * 2) / 3;
console.log(last);
