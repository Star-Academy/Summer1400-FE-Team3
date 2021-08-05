import { addCard } from "./methods.js";
import { HEART, FILLED_HEART } from "./address.js";
import { playlistArr } from "./arrays.js";
import {
  fetchUsername,
  addSongToPlaylist,
  removeSongFromPlaylist,
} from "./fetchData.js";
import { createIcon, singerArray } from "./methods.js";
import { goToSongPage } from "./methods.js";

const favList = document.getElementById("favCards");
const username_html = document.getElementById("username");
const artistSelect = document.getElementById("artist");
const filterButton = document.getElementById("filterButton");
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("search");
let likeIcons = document.getElementsByClassName("favorite");
const signOut = document.getElementById("signOut");

const ALL = "all";
const favSongs = [];
for (const item of playlistArr[0].songs) {
  favSongs.push(item.rest);
}
username_html.innerHTML = await fetchUsername();
const singerArr = singerArray(favSongs);
addOptions();
await makeList();
goToSongPage();

async function makeList() {
  for (const item of favSongs) {
    await setSongs(item);
  }
  await setLikeIcon();
}

async function setSongs(song) {
  let heartSrc = await createIcon(song);
  favList.innerHTML += addCard(song, heartSrc);
}

async function setLikeIcon() {
  likeIcons = document.getElementsByClassName("favorite");
  for (const like of likeIcons) {
    like.addEventListener("click", async () => {
      const id = like.getAttribute("name");
      if (like.getAttribute("src") === HEART) {
        await addSongToPlaylist(id);
        like.setAttribute("src", FILLED_HEART);
      } else {
        await removeSongFromPlaylist(id);
        like.setAttribute("src", HEART);
      }
    });
  }
}

searchButton.addEventListener("click", async () => {
  const searchValue = searchInput.value.toLowerCase();
  favList.innerHTML = "";
  if (searchValue === "") {
    await makeList();
    return;
  }
  favSongs.forEach((song) => {
    if (song.name.toLowerCase().includes(searchValue)) {
      setSongs(song);
    }
  });
});

filterButton.addEventListener("click", async () => {
  const artist = artistSelect.value.toLowerCase();
  favList.innerHTML = "";
  if (artist === ALL) {
    await makeList();
    return;
  }
  favSongs.forEach((song) => {
    if (song.artist.toLowerCase() === artist) {
      setSongs(song);
    }
  });
});

function addOptions() {
  singerArr.forEach((singer) => {
    artistSelect.innerHTML += `<option value="${singer}">${singer}</option>`;
  });
}

signOut.addEventListener("click", () => {
  localStorage.clear();
});
