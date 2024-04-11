const login = document.querySelector("#login");
const form = document.querySelector("form");

login.addEventListener("click", function () {
  document.querySelector(".black-bg").classList.add("show-modal");
});

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

document.querySelector("#close").addEventListener("click", function () {
  document.querySelector(".black-bg").classList.remove("show-modal");
});

let i = 5;
setInterval(() => {
  if (i == 0) {
    document.querySelector(".alert").remove();
  } else {
    document.querySelector(".alert").innerHTML =
      i + "초 이내 구매시 사은품 증정!";
    i--;
  }
}, 1000);
