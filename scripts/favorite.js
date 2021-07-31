let favArr = [
  { name: "Always", genre: "metal", singer: "isak" },
  { name: "Hello", genre: "pop", singer: "adel" },
  { name: "blinding lights", genre: "rock", singer: "the weekend" },
  { name: "ocean eyes", genre: "rap", singer: "billie" },
  { name: "Diamonds", genre: "pop", singer: "sam smith" },
  { name: "bad", genre: "country", singer: "james" },
];
const all ="all";
const artistArr = [
  all,
  "adel",
  "isak",
  "the weekend",
  "billie",
  "sam smith",
  "james",
];
const genreArr = [all, "pop", "rock", "metal", "rap", "country"];
const username = "KimiaParmida";

let username_html= document.getElementById("username");
let favList = document.getElementById("favList");
let artistSelect = document.getElementById("artist");
let genreSelect = document.getElementById("genreSelect");
let filterButton = document.getElementById("filterButton");
let searchButton = document.getElementById("searchButton");
let searchInput = document.getElementById("search");
let removeButtons = document.getElementsByClassName("remove");

username_html.innerHTML = username;
makeList();
createSelectBoxes();

function makeList() {
  favArr.forEach((favItem) => {
    setSongs(favItem);
  });
  removeFromList();
}

function createSelectBoxes() {
  artistArr.forEach((artist) => {
    artistSelect.innerHTML += `<option value="${artist}">${artist}</option>`;
  });
  genreArr.forEach((genre) => {
    genreSelect.innerHTML += `<option value="${genre}">${genre}</option>`;
  });
}

function removeFromList() {
  for (let button of removeButtons) {
    button.addEventListener("click", () => {
      let name = button.getAttribute("name");
      favList.innerHTML = "";
      let index = findIndex(name);
      favArr.splice(index, 1);
      makeList();
    });
  }
}

function findIndex(name){
  let index = -1;
  favArr.forEach((song, songIndex) => {
    if (song.name === name) {
      index = songIndex;
    }
  });
  return index;
}

searchButton.addEventListener("click", () => {
  const searchValue = searchInput.value.toLowerCase();
  favList.innerHTML = "";
  favArr.forEach((favItem) => {
    if (favItem.name.toLowerCase().includes(searchValue)) {
      setSongs(favItem);
    }
  });
});

filterButton.addEventListener("click", () => {
  const artist = artistSelect.value.toLowerCase();
  const genre = genreSelect.value.toLowerCase();

  favList.innerHTML = "";
  favArr.forEach((favItem) => {
    if (matchFilter(genre,artist,favItem)) {

      setSongs(favItem);
    }
  });
});

function matchFilter(genre,artist,favItem) {
  return (favItem.singer.toLowerCase() === artist && favItem.genre.toLowerCase() === genre) ||
  (favItem.singer.toLowerCase() === artist && genre.toLowerCase() === all) ||
  (artist.toLowerCase() === all && favItem.genre.toLowerCase() === genre) ||
  (artist.toLowerCase() === all && genre.toLowerCase() === all)
}

function setSongs(favItem) {
  favList.innerHTML += `<li><a href="Song.html">${favItem.name}</a><button class="remove" name="${favItem.name}">حذف</button></li>`
}