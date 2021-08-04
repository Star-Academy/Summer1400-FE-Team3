import { HEART, FILLED_HEART } from "./address.js";
import { playlistArr } from "./arrays.js";
const ALL = "all";
function addCard(song, heartSrc) {
  return `<div class="card" id="${song.id}">
                              <a class="songImage " name="${song.id}">
                                  <img src=${song.cover} alt="Avatar" loading="lazy" style="width:100%"/>
                              </a>
                              <div class="container">
                                <h4>
                                 <a class="songName" name="${song.id}"><b>${song.name}</b></a>
                                </h4>
                              <img
                                src="${heartSrc}"                 
                                class="favorite"
                                name="${song.id}"
                                width="30"
                                height="27"
                                alt="Add to favorite"
                                />
                              <p>${song.artist}</p>
                            </div>
                          </div>`;
}

function createIcon(song) {
  const favoriteIDs = playlistArr[0].songs.map((song) => song.id);
  if (favoriteIDs.includes(song.id)) return FILLED_HEART;
  return HEART;
}

function findIndex(id, array) {
  let index = -1;
  array.forEach((song, songIndex) => {
    if (song.id === id) {
      index = songIndex;
    }
  });
  return index;
}

function singerArray(songArray) {
  let singerArr = [ALL];
  songArray.forEach((song) => {
    if (!singerArr.includes(song.artist)) singerArr.push(song.artist);
  });
  return singerArr;
}

export { addCard, findIndex, createIcon, singerArray };
