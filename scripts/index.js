function checkLoggedIn() {
  if (localStorage.length !== 0) {
    window.location.href = "./user.html";
  }
}

checkLoggedIn();
