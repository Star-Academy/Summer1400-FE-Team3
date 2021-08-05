import { addCard } from "./methods.js";
import { HEART, FILLED_HEART } from "./address.js";
import { songArr } from "./arrays.js";
import {
  fetchUsername,
  fetchPage,
  addSongToPlaylist,
  removeSongFromPlaylist,
} from "./fetchData.js";
import { createIcon, singerArray } from "./methods.js";
import { goToSongPage } from "./methods.js";

const songList = document.getElementById("songCards");
const username_html = document.getElementById("username");
const artistSelect = document.getElementById("artist");
const filterButton = document.getElementById("filterButton");
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("search");
let likeIcons = document.getElementsByClassName("favorite");
const signOut = document.getElementById("signOut");

const ALL = "all";

username_html.innerHTML = await fetchUsername();
const singerArr = singerArray(songArr);
addOptions();
await makeList();
goToSongPage();

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

async function makeList() {
  for (let i = 1; i < songArr.length; i += 4) {
    let pageArr = await fetchPage(i);
    pageArr.forEach((song) => {
      setSongs(song);
    });
    await setLikeIcon();
  }
}

async function setSongs(song) {
  let heartSrc = await createIcon(song);
  songList.innerHTML += addCard(song, heartSrc);
}

searchButton.addEventListener("click", async () => {
  const searchValue = searchInput.value.toLowerCase();
  songList.innerHTML = "";
  if (searchValue === "") {
    await makeList();
    return;
  }
  songArr.forEach((song) => {
    if (song.name.toLowerCase().includes(searchValue)) {
      setSongs(song);
    }
  });
});

filterButton.addEventListener("click", async () => {
  const artist = artistSelect.value.toLowerCase();
  songList.innerHTML = "";
  if (artist === ALL) {
    await makeList();
    return;
  }
  songArr.forEach((song) => {
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
