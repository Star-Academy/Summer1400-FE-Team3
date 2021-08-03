import { addCard } from "./methods.js";
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

const userToken = {
  token: localStorage.getItem("token"),
};
let id;
const response = await fetch("http://130.185.120.192:5000/user/auth", {
  method: "POST",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  body: JSON.stringify(userToken),
});
const result = await response.json();
if (response.status === 200) {
  alert("You logged in successfully!");
  id = result.id;
} else if (response.status === 401) {
  alert("Authentication failed");
} else {
  alert("Server Error!");
}

let userInfo;
const getUserResponse = await fetch(
  `http://130.185.120.192:5000/user/one/${id}`
);
const getUserResult = await getUserResponse.json();
if (getUserResponse.status === 200) {
  console.log("User found successfully");
  userInfo = getUserResult;
} else if (getUserResponse.status === 400) {
  console.log("Bad request");
} else if (getUserResponse.status === 404) {
  console.log("User not found!");
} else {
  console.log("Server Error!");
}

username_html.innerHTML = userInfo.user.username;
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
  const likeIconSrc = heartIconSrc(song);
  songList.innerHTML += addCard(likeIconSrc, song);
}

function createFavList(favItem) {
  const likeIconSrc = heartIconSrc(favItem);
  favList.innerHTML += addCard(likeIconSrc, favItem);
}

function heartIconSrc(song) {
  if (!song.favorite) return "../assets/images/heart.png";

  return "../assets/images/filled-heart.png";
}
