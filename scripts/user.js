import { addCard, goToSongPage } from "./methods.js";
import {
  fetchUsername,
  addSongToPlaylist,
  removeSongFromPlaylist,
  fetchPage,
  fetchAlterProfile,
} from "./fetchData.js";
import { HEART, FILLED_HEART } from "./address.js";
import { createIcon } from "./methods.js";
import { fetchPlaylist } from "./fetchData.js";

const username_html = document.getElementById("username");
const songList = document.getElementById("songCards");
const favList = document.getElementById("favCards");
const likeIcons = document.getElementsByClassName("favorite");
const signOut = document.getElementById("signOut");
const name = document.getElementById("name");
const avatarInput = document.getElementById("file-input");
const avatarImg = document.getElementById("avatar");

let playlistArr = [...(await fetchPlaylist())];

const user = await fetchUsername();
username_html.innerHTML = user.username;
name.innerHTML = user.first_name + " " + user.last_name;
if (user.avatar !== null) {
  avatarImg.src = user.avatar;
}

await createFavorites();
await makeList();
goToSongPage();

let image;
avatarInput.addEventListener("change", getAvatar);

async function getAvatar() {
  image = avatarInput.files[0];
  const reader = new FileReader();
  reader.onloadend = async () => {
    avatarImg.src = reader.result;
    await fetchAlterProfile(reader.result);
  };
  reader.readAsDataURL(image);
}

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
    playlistArr = [...(await fetchPlaylist())];
    console.log("create favorite playlist");
  } else alert(result.message);
}

async function makeList() {
  const songs = await fetchPage(1, 4);
  for (const song of songs) {
    let heartSrc = await createIcon(song);
    songList.innerHTML += addCard(song, heartSrc);
  }
  for (let i = 0; i < 4 && i < playlistArr[0].songs.length; i++) {
    favList.innerHTML += addCard(playlistArr[0].songs[i].rest, FILLED_HEART);
  }
}

for (const like of likeIcons) {
  like.addEventListener("click", async () => {
    const id = like.getAttribute("name");
    if (like.getAttribute("src") === HEART) {
      await addSongToPlaylist(id);
      like.src = FILLED_HEART;
    } else {
      await removeSongFromPlaylist(id);
      like.src = HEART;
    }
  });
}

signOut.addEventListener("click", () => {
  localStorage.clear();
});
