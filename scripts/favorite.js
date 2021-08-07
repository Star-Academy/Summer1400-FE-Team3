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
const user = await fetchUsername();
username_html.innerHTML = user.username;
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
  for (let i = 0; i < likeIcons.length; i++) {
    likeIcons[i].addEventListener("click", async () => {
      if (likeIcons[i].getAttribute("src") === HEART) {
        await addSongToPlaylist(likeIcons[i].getAttribute("name"));
        likeIcons[i].src = FILLED_HEART;
      } else {
        await removeSongFromPlaylist(likeIcons[i].getAttribute("name"));
        likeIcons[i].src = HEART;
      }
    });
  }
}

async function searchFunction(searchValue) {
  for (let i = 0; i <= favSongs.length; i++) {
    if (i < favSongs.length) {
      if (favSongs[i].name.toLowerCase().includes(searchValue)) {
        await setSongs(favSongs[i]);
      }
    }
    if (i === favSongs.length) {
      await setLikeIcon();
      await goToSongPage();
    }
  }
}

searchButton.addEventListener("click", async () => {
  const searchValue = searchInput.value.toLowerCase();
  favList.innerHTML = "";
  if (searchValue === "") {
    await makeList();
    return;
  }
  await searchFunction(searchValue);
});

async function filterFunction(artist) {
  for (let i = 0; i <= favSongs.length; i++) {
    if (i < favSongs.length) {
      if (favSongs[i].artist.toLowerCase() === artist) {
        await setSongs(favSongs[i]);
      }
    }
    if (i === favSongs.length) {
      await setLikeIcon();
      await goToSongPage();
    }
  }
}

filterButton.addEventListener("click", async () => {
  const artist = artistSelect.value.toLowerCase();
  favList.innerHTML = "";
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
