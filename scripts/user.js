const username = "KimiaParmida";

let songList = document.getElementById("songList");
let favList = document.getElementById("favList");
let songArr = ["Always", "Diamonds", "Blinding Lights"];
let favArr = ["Always", "Yellow"];
let username_html= document.getElementById("username");

username_html.innerHTML = username;
makeList();

function makeList() {
  songArr.forEach((item) => {
    songList.innerHTML += `<li><a href="Song.html">${item}</a></li>`;
  });

  favArr.forEach((favItem) => {
    favList.innerHTML += `<li><a href="Song.html">${favItem}</a></li>`;
  });
}


