document.querySelector("#login").addEventListener("click", function () {
  document.querySelector(".black-bg").classList.add("show-modal");
});

document.querySelector("form").addEventListener("submit", function (e) {
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
