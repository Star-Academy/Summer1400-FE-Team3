const loginInfo = document.getElementById("email"); //email or username
const password = document.getElementById("password");

let user = {};

function userCheckInput() {
  if (validateEmail(loginInfo.value)) {
    // email
    user = {
      email: loginInfo.value,
      password: password.value,
    };
  } else {
    user = {
      username: loginInfo.value,
      password: password.value,
    };
  }
}

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", submit);

async function submit(event) {
  event.preventDefault();
  userCheckInput();
  let response = await fetch("https://130.185.120.192:5000/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(user),
  });
  let result = await response.json();
  if (response.status === 200) {
    localStorage.setItem("token", result.token);
    window.location.href = "./User.html";
  } else {
    alert(result.message);
  }
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
