let songArr = [
  { name: "Always", genre: "metal", singer: "isak" },
  { name: "Hello", genre: "pop", singer: "adel" },
  { name: "blinding lights", genre: "rock", singer: "the weekend" },
  { name: "ocean eyes", genre: "rap", singer: "billie" },
  { name: "Diamonds", genre: "pop", singer: "sam smith" },
  { name: "bad", genre: "country", singer: "james" },
];
const username = "KimiaParmida";


let songList = document.getElementById("songList");
let artistSelect = document.getElementById("artist");
let genreSelect = document.getElementById("genreSelect");
let filterButton = document.getElementById("filterButton");
let searchButton = document.getElementById("searchButton");
let searchInput = document.getElementById("search");
let username_html= document.getElementById("username");

username_html.innerHTML = username;
function makeList() {
  songArr.forEach((x) => {
    songList.innerHTML += '<li><a href="Song.html">' + x.name + "</a></li>";
  });
}

makeList();

searchButton.addEventListener("click", () => {
  let searchValue = searchInput.value.toLowerCase();
  songList.innerHTML = "";
  songArr.forEach((x) => {
    if (x.name.toLowerCase().includes(searchValue)) {
      songList.innerHTML += '<li><a href="Song.html">' + x.name + "</a></li>";
    }
  });
});

filterButton.addEventListener("click", () => {
  let artist = artistSelect.value.toLowerCase();
  let genre = genreSelect.value.toLowerCase();

  songList.innerHTML = "";
  songArr.forEach((x) => {
    if (x.singer.toLowerCase() === artist && x.genre.toLowerCase() === genre) {
      songList.innerHTML += '<li><a href="Song.html">' + x.name + "</a></li>";
    }
  });
});
