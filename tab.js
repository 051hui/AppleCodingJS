const tabButton = document.querySelectorAll(".tab-button");
const tabContent = document.querySelectorAll(".tab-content");

// for (let i = 0; i < 3; i++) {
//   tabButton[i].addEventListener("click", function () {
//     openTab(i);
//   });
// }

document.querySelector(".list").addEventListener("click", function (e) {
  openTab(e.target.dataset.id);
});

function openTab(i) {
  tabButton.forEach((button) => {
    button.classList.remove("orange");
  });
  tabButton[i].classList.add("orange");
  tabContent.forEach((content) => {
    content.classList.remove("show");
  });
  tabContent[i].classList.add("show");
}

const formSelect = document.querySelectorAll(".form-select");
var pants = [28, 30, 32, 34];
var shirts = [95, 100, 105];
var caps = ["S", "M"];
formSelect[0].addEventListener("input", function () {
  let value = this.value;

  if (value == "셔츠") {
    formSelect[1].classList.remove("form-hide");
    formSelect[1].innerHTML = "";
    shirts.forEach(function (size) {
      formSelect[1].insertAdjacentHTML("beforeend", `<option>${size}</option>`);
    });
  } else if (value == "바지") {
    formSelect[1].classList.remove("form-hide");
    formSelect[1].innerHTML = "";
    pants.forEach(function (size) {
      formSelect[1].insertAdjacentHTML("beforeend", `<option>${size}</option>`);
    });
  } else if (value == "모자") {
    formSelect[1].classList.remove("form-hide");
    formSelect[1].innerHTML = "";
    caps.forEach(function (size) {
      formSelect[1].insertAdjacentHTML("beforeend", `<option>${size}</option>`);
    });
  }
});
