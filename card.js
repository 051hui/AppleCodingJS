const cardBox = document.querySelectorAll(".card-box");

window.addEventListener("scroll", function () {
  var height = window.scrollY;
  console.log(height);

  let y = (-1 / 500) * height + 115 / 50;
  cardBox[0].style.opacity = y;

  let z = (-1 / 5000) * height + 565 / 500;
  cardBox[0].style.transform = `scale(${z})`;
});
