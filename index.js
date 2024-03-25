document.getElementById("close").addEventListener("click", function () {
  document.getElementById("alert").style.display = "none";
});
function 아이디알림창() {
  document.getElementById("title").innerHTML = "아이디 입력하기";
  document.getElementById("alert").style.display = "block";
}
function 비번알림창() {
  document.getElementById("title").innerHTML = "비밀번호 입력하기";
  document.getElementById("alert").style.display = "block";
}
