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
