import {addCard} from './methods.js';
const username = "KimiaParmida";
const songArr = [
  {
    name: "Always",
    genre: "metal",
    singer: "isak",
    src: "../assets/images/Single_by_Sam_Smith.jpeg",
    favorite: false,
  },
  {
    name: "Hello",
    genre: "pop",
    singer: "adel",
    src: "../assets/images/Single_by_Sam_Smith.jpeg",
    favorite: true,
  },
  {
    name: "blinding lights",
    genre: "rock",
    singer: "the weekend",
    src: "../assets/images/Single_by_Sam_Smith.jpeg",
    favorite: true,
  },
  {
    name: "ocean eyes",
    genre: "rap",
    singer: "billie",
    src: "../assets/images/Single_by_Sam_Smith.jpeg",
    favorite: false,
  },
];
const favArr = [
  {
    name: "Always",
    genre: "metal",
    singer: "isak",
    src: "../assets/images/Single_by_Sam_Smith.jpeg",
    favorite: true,
  },
  {
    name: "Hello",
    genre: "pop",
    singer: "adel",
    src: "../assets/images/Single_by_Sam_Smith.jpeg",
    favorite: true,
  },
  {
    name: "ocean eyes",
    genre: "rap",
    singer: "billie",
    src: "../assets/images/Single_by_Sam_Smith.jpeg",
    favorite: true,
  },
];
const username_html = document.getElementById("username");
const songList = document.getElementById("songCards");
const favList = document.getElementById("favCards");
const likeIcons = document.getElementsByClassName("favorite");

username_html.innerHTML = username;
makeList();

function makeList() {
  songArr.forEach((song) => createSongList(song));
  favArr.forEach((favItem) => createFavList(favItem));
  // likeUnlike();
}
// function likeUnlike() {
//   for (const like of likeIcons) {
//     like.addEventListener("click", () => {
//       const id = like.getAttribute("id");
//       const index = findIndex(parseInt(id));
//       songArr[index].favorite = !songArr[index].favorite;
//       like.setAttribute("src",heartIconSrc(songArr[index]));
//     });
//   }
// }


function createSongList(song) {
  const likeIconSrc=heartIconSrc(song);
  songList.innerHTML += addCard(likeIconSrc,song);
}

function createFavList(favItem) {
  const likeIconSrc=heartIconSrc(favItem);
  favList.innerHTML += addCard(likeIconSrc,favItem);
}

function heartIconSrc(song) {
  if (!song.favorite)
    return  "../assets/images/heart.png";

  return  "../assets/images/filled-heart.png";
}
