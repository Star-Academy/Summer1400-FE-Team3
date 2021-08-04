let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");

let registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", submit);

async function submit(event) {
  event.preventDefault();
  let user = {
    username: username.value,
    email: email.value,
    password: password.value,
    firstName: firstName.value,
    lastName: lastName.value,
  };

  let response = await fetch("http://130.185.120.192:5000/user/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(user),
  });
  const result = await response.json();

  if (response.status === 201) {
    alert("You submitted successfully!");
    localStorage.setItem("token", result.token);
    window.location.href = "./SignIn.html";
  } else if (response.status === 400) {
    alert(result.message);
  } else {
    alert(result.message);
  }
}
