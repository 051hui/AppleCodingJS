document.querySelector("#close").addEventListener("click", function () {
  document.querySelector("#alert").style.display = "none";
});
function 알림창열기(구멍) {
  document.querySelector("#alert").style.display = 구멍;
}
document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    document.querySelector("list-group").classList.toggle("show");
  });
