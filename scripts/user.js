let songList = document.getElementById("songList");
let favList = document.getElementById("favList");

let songArr = ["Always", "Diamonds", "Blinding Lights"];
let favArr = ["Always", "Yellow"];
const username = "KimiaParmida";
let username_html= document.getElementById("username");
username_html.innerHTML = username;


function makeList() {
  songArr.forEach((x) => {
    songList.innerHTML += '<li><a href="Song.html">' + x + "</a></li>";
  });

  favArr.forEach((x) => {
    favList.innerHTML += '<li><a href="Song.html">' + x + "</a></li>";
  });
  console.log("here");
}

makeList();
