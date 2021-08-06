import { HEART, FILLED_HEART } from "./address.js";
//import { playlistArr } from "./arrays.js";
import { fetchPlaylist } from "./fetchData.js";
const ALL = "all";

function addCard(song, heartSrc) {
  return `<div class="card">
                              <a class="songImage " name="${song.id}">
                                  <img src=${song.cover} alt="Avatar" loading="lazy" style="width:100%"/>
                              </a>
                              <div class="container">
                                <h4>
                                 <a class="songName" name="${song.id}"><b>${song.name}</b></a>
                                </h4>
                                 <p>${song.artist}</p>
                              <img
                                src="${heartSrc}"                 
                                class="favorite"
                                name="${song.id}"
                                width="30"
                                height="27"
                                alt="Add to favorite"
                               
                                />
                            </div>
                          </div>`;
}

async function createIcon(song) {
  const playlistArr = [...(await fetchPlaylist())];
  const favoriteIDs = [];
  for (const item of playlistArr[0].songs) {
    favoriteIDs.push(item.rest.id);
  }
  if (favoriteIDs.includes(song.id)) return FILLED_HEART;
  return HEART;
}

function singerArray(songArray) {
  let singerArr = [ALL];
  songArray.forEach((song) => {
    if (!singerArr.includes(song.artist)) singerArr.push(song.artist);
  });
  return singerArr;
}

function goToSongPage() {
  clickName();
  clickImage();
}

function clickName() {
  const songNames = document.getElementsByClassName("songName");

  for (let songName of songNames) {
    songName.addEventListener("click", function () {
      const songId = songName.getAttribute("name");
      const url = `./Song.html?songId=${songId}`;
      window.location.href = url;
    });
  }
}
function clickImage() {
  const songImages = document.getElementsByClassName("songImage");

  for (let songImage of songImages) {
    songImage.addEventListener("click", function () {
      const songId = songImage.getAttribute("name");
      const url = `./Song.html?songId=${songId}`;
      window.location.href = url;
    });
  }
}
export { addCard, createIcon, singerArray, goToSongPage };
