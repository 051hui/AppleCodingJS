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

function game(n) {
  if (n % 9 == 0) {
    console.log("박수를 치세요*2");
  } else if (n % 3 == 0) {
    console.log("박수를 치세요");
  } else {
    console.log("통과");
  }
}

function 합격했냐(a, b) {
  if (a < 40 || b < 40) {
    console.log("불합격");
  } else if (a + b >= 120) {
    console.log("합격");
  } else {
    console.log("불합격");
  }
}

//game(9);
//합격했냐(50, 50);
