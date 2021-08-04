import { HEART, FILLED_HEART } from "./address.js";
import { fetchSong, fetchUsername } from "./fetchData.js";

const likeIcon = document.getElementById("likePic");
const songName = document.getElementById("songName");
const singerName = document.getElementById("singerName");
const image = document.getElementById("songImage");
const audio = document.getElementById("audio");
const lyrics = document.getElementById("lyrics");
const username_html = document.getElementById("username");
const title = document.getElementsByTagName("title");
const songId = getSongId();
const song = await fetchSong(songId);
await createSongInfo();
//createIcon();

async function createSongInfo() {
  username_html.innerHTML = await fetchUsername();
  songName.innerHTML = song.name;
  title[0].innerHTML = song.name;
  singerName.innerHTML = song.artist;
  image.setAttribute("src", song.cover);
  audio.setAttribute("src", song.file);
  lyrics.innerHTML = song.lyrics;
  console.log(song.file);
}

function getSongId() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const songId = urlParams.get("songId");
  return songId;
}

// function createIcon() {
//   if (!currentSong.favorite) {
//     likeIcon.setAttribute("src", HEART);
//   } else {
//     likeIcon.setAttribute("src", FILLED_HEART);
//   }
// }

// likeIcon.addEventListener("click", changeIcon);

// function changeIcon() {
//   if (currentSong.favorite) {
//     likeIcon.setAttribute("src", HEART);
//     currentSong.favorite = false;
//   } else {
//     likeIcon.setAttribute("src", FILLED_HEART);
//     currentSong.favorite = true;
//   }
// }
