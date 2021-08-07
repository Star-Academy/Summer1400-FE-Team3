import { HEART, FILLED_HEART } from "./address.js";
import {
  fetchUsername,
  fetchPage,
  addSongToPlaylist,
  removeSongFromPlaylist,
  fetchFind,
} from "./fetchData.js";
import { createIcon, singerArray, addCard, goToSongPage } from "./methods.js";
import { songArr } from "./arrays.js";

const songList = document.getElementById("songCards");
const username_html = document.getElementById("username");
const artistSelect = document.getElementById("artist");
const filterButton = document.getElementById("filterButton");
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("search");
const signOut = document.getElementById("signOut");
const previous = document.getElementById("previous");
const next = document.getElementById("next");

let pageNumber = 1;
const ALL = "همه";

username_html.innerHTML = await fetchUsername();
const singerArr = singerArray(songArr);
addOptions();
nextPage();
previousPage();
await makeList();

function nextPage() {
  next.addEventListener("click", async () => {
    songList.innerHTML = "";
    pageNumber++;
    await makeList();
  });
}

function previousPage() {
  previous.addEventListener("click", async () => {
    songList.innerHTML = "";
    pageNumber--;
    await makeList();
  });
}

async function makeList() {
  if (pageNumber !== 1) previous.style.display = "inline";
  else previous.style.display = "none";
  let pageArr = await fetchPage(pageNumber, 20);
  await checkEnd();
  for (const song of pageArr) {
    await setSongs(song);
  }
  await setLikeIcon();
  goToSongPage();
}

async function checkEnd() {
  let pageArr = await fetchPage(pageNumber + 1, 20);
  if (pageArr.length === 0) {
    next.style.display = "none";
  }
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
        likeIcons[i].src = FILLED_HEART;
      } else {
        await removeSongFromPlaylist(likeIcons[i].getAttribute("name"));
        likeIcons[i].src = HEART;
      }
    });
  }
}

async function searchFunction(searchValue) {
  next.style.display = "none";
  previous.style.display = "none";
  const searchArr = await fetchFind(searchValue);
  if (searchArr.length === 0) {
    document.getElementById("noResult").style.display = "block";
    document.getElementById("noResult").innerHTML =
      "<h2 id='noResult'>آهنگ مورد نظر یافت نشد!</h2>";
    return;
  }
  for (const song of searchArr) {
    await setSongs(song);
  }
  await setLikeIcon();
  await goToSongPage();
}

searchButton.addEventListener("click", async () => {
  const searchValue = searchInput.value.toLowerCase();
  songList.innerHTML = "";
  if (searchValue === "") {
    document.getElementById("noResult").style.display = "none";
    pageNumber = 1;
    next.style.display = "inline";
    await makeList();
    return;
  }
  await searchFunction(searchValue);
});

async function filterFunction(artist) {
  next.style.display = "none";
  previous.style.display = "none";
  const filterArr = await fetchFind(artist);
  for (const song of filterArr) {
    await setSongs(song);
  }
  await setLikeIcon();
  await goToSongPage();
}

filterButton.addEventListener("click", async () => {
  const artist = artistSelect.value.toLowerCase();
  songList.innerHTML = "";
  if (artist === ALL) {
    console.log("h");
    pageNumber = 1;
    next.style.display = "inline";
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
