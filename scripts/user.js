import { addCard, addPlaylist } from "./methods.js";
import { fetchData, fetchPlaylist, fetchUsername } from "./fetchData.js";
import { HEART, FILLED_HEART } from "./address.js";
const songArr = [...(await fetchData())];
let playlistArr = [...(await fetchPlaylist())];

const username_html = document.getElementById("username");
const songList = document.getElementById("songCards");
const favList = document.getElementById("favCards");
const likeIcons = document.getElementsByClassName("favorite");
const addPlaylist_btn = document.getElementById("addPlaylist");
const signOut = document.getElementById("signOut");

username_html.innerHTML = await fetchUsername();
await createFavorites();
await makeList();

async function createFavorites() {
  if (playlistArr.length !== 0) return;
  const playlistInfo = {
    token: localStorage.getItem("token"),
    name: "مورد علاقه ها",
  };
  let response = await fetch("http://130.185.120.192:5000/playlist/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(playlistInfo),
  });
  const result = await response.json();

  if (response.status === 201) {
    console.log("create favorite playlist");
    console.log(playlistArr);
  } else if (response.status === 400) {
    console.log(result.message);
  } else if (response.status === 401) {
    console.log(result.message);
  } else {
    console.log(result.message);
  }
}

async function makeList() {
  for (let i = 0; i < 4; i++) {
    songList.innerHTML += addCard(songArr[i]);
  }
  playlistArr.forEach(
    (playlist) => (favList.innerHTML += addPlaylist(playlist))
  );
}

const songImages = document.getElementsByClassName("songImage");
for (var i = 0; i < songImages.length; i++) {
  songImages[i].addEventListener(
    "click",
    songPageRedirect(songImages[i].getAttribute(songId))
  );
}

const songNames = document.getElementsByClassName("songName");
for (var i = 0; i < songNames.length; i++) {
  songNames[i].addEventListener(
    "click",
    songPageRedirect(songNames[i].getAttribute(songId))
  );
}

function songPageRedirect(songId) {}

function heartIconSrc(song) {
  if (!song.favorite) return HEART;

  return FILLED_HEART;
}

signOut.addEventListener("click", () => {
  localStorage.clear();
});
