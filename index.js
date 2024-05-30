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
    e.preventDefault();
  }
});

document.querySelector("form").addEventListener("submit", function (e) {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if (email == "") {
    alert("아이디입력안함");
    e.preventDefault();
  } else if (/\S+@\S+\.\S+/.test(email) == false) {
    alert("이메일형식아님");
    e.preventDefault();
  }
  if (password == "") {
    alert("비밀번호입력안함");
    e.preventDefault();
  } else if (password.value.length <= 6) {
    alert("비밀번호7자리이상입력");
    e.preventDefault();
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

var count = 1;

document.querySelector(".slide-1").addEventListener("click", function () {
  document.querySelector(".slide-container").style.transform =
    "translateX(0vw)";
  count = 1;
});

document.querySelector(".slide-2").addEventListener("click", function () {
  document.querySelector(".slide-container").style.transform =
    "translateX(-100vw)";
  count = 2;
});

document.querySelector(".slide-3").addEventListener("click", function () {
  document.querySelector(".slide-container").style.transform =
    "translateX(-200vw)";
  count = 3;
});

document.querySelector(".prev").addEventListener("click", function () {
  if (count == 1) {
    document.querySelector(".slide-container").style.transform =
      "translateX(-200vw)";
    count = 3;
    count = 3;
  } else if (count == 2) {
    document.querySelector(".slide-container").style.transform =
      "translateX(0vw)";
    count = 1;
  } else if (count == 3) {
    document.querySelector(".slide-container").style.transform =
      "translateX(-100vw)";
    count = 2;
  }
});

document.querySelector(".next").addEventListener("click", function () {
  if (count == 1) {
    document.querySelector(".slide-container").style.transform =
      "translateX(-100vw)";
    count = 2;
  } else if (count == 2) {
    document.querySelector(".slide-container").style.transform =
      "translateX(-200vw)";
    count = 3;
  } else if (count == 3) {
    document.querySelector(".slide-container").style.transform =
      "translateX(0vw)";
    count = 1;
  }
});
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    document.querySelector(".navbar-brand").style.fontSize = "20px";
  }
});

document.querySelector(".lorem").addEventListener("scroll", function () {
  스크롤양 = document.querySelector(".lorem").scrollTop;
  실제높이 = document.querySelector(".lorem").scrollHeight;
  높이 = document.querySelector(".lorem").clientHeight;
  if (스크롤양 + 높이 > 실제높이 - 10) {
    alert("다읽음");
  }
});

document.querySelector(".black-bg").addEventListener("click", function (e) {
  if (e.target == document.querySelector(".black-bg")) {
    document.querySelector(".black-bg").classList.remove("show-modal");
  }
});
