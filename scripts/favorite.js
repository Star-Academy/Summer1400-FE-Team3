import { addCard, findIndex } from "./methods.js";
import { HEART, FILLED_HEART } from "./address.js";

const ALL = "all";
const favArr = [
  {
    name: "Always",
    genre: "metal",
    singer: "isak",
    src: "../assets/images/Single_by_Sam_Smith.jpeg",
    id: 1,
  },
  {
    name: "Hello",
    genre: "pop",
    singer: "adel",
    src: "../assets/images/Single_by_Sam_Smith.jpeg",
    id: 2,
  },
  {
    name: "blinding lights",
    genre: "rock",
    singer: "the weekend",
    src: "../assets/images/Single_by_Sam_Smith.jpeg",
    id: 3,
  },
  {
    name: "ocean eyes",
    genre: "rap",
    singer: "billie",
    src: "../assets/images/Single_by_Sam_Smith.jpeg",
    id: 4,
  },
  {
    name: "Diamonds",
    genre: "pop",
    singer: "sam smith",
    src: "../assets/images/Single_by_Sam_Smith.jpeg",
    id: 5,
  },
  {
    name: "bad",
    genre: "country",
    singer: "james",
    src: "../assets/images/Single_by_Sam_Smith.jpeg",
    id: 6,
  },
];

const artistArr = [
  ALL,
  "adel",
  "isak",
  "the weekend",
  "billie",
  "sam smith",
  "james",
];
const genreArr = [ALL, "pop", "rock", "metal", "rap", "country"];
const username = "KimiaParmida";
const username_html = document.getElementById("username");
const favList = document.getElementById("favCards");
const artistSelect = document.getElementById("artist");
const genreSelect = document.getElementById("genreSelect");
const filterButton = document.getElementById("filterButton");
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("search");
const likeIcons = document.getElementsByClassName("favorite");

username_html.innerHTML = username;
makeList();
createSelectBoxes();

function makeList() {
  favArr.forEach((favItem) => {
    setSongs(favItem);
  });
  removeFromList();
}

function setSongs(favItem) {
  favList.innerHTML += addCard(FILLED_HEART, favItem);
}

function likeClick(like) {
  const id = like.getAttribute("id");
  favList.innerHTML = "";
  const index = findIndex(parseInt(id), favArr);
  favArr.splice(index, 1);
  makeList();
}

function removeFromList() {
  for (const like of likeIcons) {
    like.addEventListener("click", likeClick(like));
  }
}

function createSelectBoxes() {
  artistArr.forEach((artist) => {
    artistSelect.innerHTML += `<option value="${artist}">${artist}</option>`;
  });
  genreArr.forEach((genre) => {
    genreSelect.innerHTML += `<option value="${genre}">${genre}</option>`;
  });
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
    if (matchFilter(genre, artist, favItem)) {
      setSongs(favItem);
    }
  });
});

function matchFilter(genre, artist, favItem) {
  return (
    (favItem.singer.toLowerCase() === artist &&
      favItem.genre.toLowerCase() === genre) ||
    (favItem.singer.toLowerCase() === artist && genre.toLowerCase() === ALL) ||
    (artist.toLowerCase() === ALL && favItem.genre.toLowerCase() === genre) ||
    (artist.toLowerCase() === ALL && genre.toLowerCase() === ALL)
  );
}
