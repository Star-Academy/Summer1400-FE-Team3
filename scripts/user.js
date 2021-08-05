import { addCard, goToSongPage } from "./methods.js";
import {
  fetchUsername,
  addSongToPlaylist,
  removeSongFromPlaylist,
} from "./fetchData.js";
import { HEART, FILLED_HEART } from "./address.js";
import { songArr, playlistArr } from "./arrays.js";
import { createIcon } from "./methods.js";

const username_html = document.getElementById("username");
const songList = document.getElementById("songCards");
const favList = document.getElementById("favCards");
const likeIcons = document.getElementsByClassName("favorite");
const signOut = document.getElementById("signOut");

username_html.innerHTML = await fetchUsername();

await createFavorites();
await makeList();
goToSongPage();

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
  } else alert(result.message);
}

async function makeList() {
  for (let i = 0; i < 4; i++) {
    let heartSrc = await createIcon(songArr[i]);
    songList.innerHTML += addCard(songArr[i], heartSrc);
  }
  playlistArr[0].songs.forEach((song) => {
    favList.innerHTML += addCard(song.rest, FILLED_HEART);
  });
}

for (const like of likeIcons) {
  like.addEventListener("click", async () => {
    const id = like.getAttribute("name");
    if (like.getAttribute("src") === HEART) {
      await addSongToPlaylist(id);
      //favList.innerHTML += addCard(await fetchSong(id), FILLED_HEART);
      like.setAttribute("src", FILLED_HEART);
    } else {
      await removeSongFromPlaylist(id);
      like.setAttribute("src", HEART);
      // songList.innerHTML = "";
      // for (let i = 0; i < 4; i++) {
      //   let heartSrc = await createIcon(songArr[i]);
      //   songList.innerHTML += addCard(songArr[i], heartSrc);
      // }
      // favList.innerHTML = "";
      // const newPlaylistArr = [...(await fetchPlaylist())];
      // newPlaylistArr[0].songs.forEach((song) => {
      //   favList.innerHTML += addCard(song.rest, FILLED_HEART);
      // });
    }
  });
}

signOut.addEventListener("click", () => {
  localStorage.clear();
});
