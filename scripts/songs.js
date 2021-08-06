import { HEART, FILLED_HEART } from "./address.js";
import { songArr } from "./arrays.js";
import {
  fetchUsername,
  fetchPage,
  addSongToPlaylist,
  removeSongFromPlaylist,
} from "./fetchData.js";
import { createIcon, singerArray, addCard, goToSongPage } from "./methods.js";

const songList = document.getElementById("songCards");
const username_html = document.getElementById("username");
const artistSelect = document.getElementById("artist");
const filterButton = document.getElementById("filterButton");
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("search");
const signOut = document.getElementById("signOut");

const ALL = "all";

username_html.innerHTML = await fetchUsername();
const singerArr = singerArray(songArr);
addOptions();
await makeList();
goToSongPage();

async function makeList() {
  for (let i = 1; i < songArr.length; i += 2) {
    let pageArr = await fetchPage(i);
    pageArr.forEach(async (song) => {
      await setSongs(song);
    });
  }
  await setLikeIcon();
}

async function setSongs(song) {
  let heartSrc = await createIcon(song);
  songList.innerHTML += addCard(song, heartSrc);
}

async function setLikeIcon() {
  let likeIcons = document.getElementsByClassName("favorite");
  for (let i = 0; i < likeIcons.length; i++) {
    likeIcons[i].addEventListener("click", async () => {
      if (likeIcons[i].getAttribute("src") === HEART) {
        await addSongToPlaylist(likeIcons[i].getAttribute("name"));
        likeIcons[i].setAttribute("src", FILLED_HEART);
      } else {
        await removeSongFromPlaylist(likeIcons[i].getAttribute("name"));
        likeIcons[i].setAttribute("src", HEART);
      }
    });
  }
}

async function searchFunction(searchValue) {
  for (let i = 0; i <= songArr.length; i++) {
    if (i < songArr.length) {
      if (songArr[i].name.toLowerCase().includes(searchValue)) {
        await setSongs(songArr[i]);
      }
    }
    if (i === songArr.length) {
      await setLikeIcon();
      await goToSongPage();
    }
  }
}

searchButton.addEventListener("click", async () => {
  const searchValue = searchInput.value.toLowerCase();
  songList.innerHTML = "";
  if (searchValue === "") {
    await makeList();
    return;
  }
  await searchFunction(searchValue);
});

async function filterFunction(artist) {
  for (let i = 0; i <= songArr.length; i++) {
    if (i < songArr.length) {
      if (songArr[i].artist.toLowerCase() === artist) {
        await setSongs(songArr[i]);
      }
    }
    if (i === songArr.length) {
      await setLikeIcon();
      await goToSongPage();
    }
  }
}

filterButton.addEventListener("click", async () => {
  const artist = artistSelect.value.toLowerCase();
  songList.innerHTML = "";
  if (artist === ALL) {
    await makeList();
    return;
  }
  await filterFunction(artist);
});

function addOptions() {
  singerArr.forEach((singer) => {
    artistSelect.innerHTML += `<option value="${singer}">${singer}</option>`;
  });
}

signOut.addEventListener("click", () => {
  localStorage.clear();
});
