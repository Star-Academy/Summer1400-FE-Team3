import { HEART, FILLED_HEART } from "./address.js";
import { fetchSong, fetchUsername } from "./fetchData.js";
import { createIcon } from "./methods.js";
import { addSongToPlaylist, removeSongFromPlaylist } from "./fetchData.js";

const likeIcon = document.getElementById("likePic");
const songName = document.getElementById("songName");
const singerName = document.getElementById("singerName");
const image = document.getElementById("songImage");
const audio = document.getElementById("audio");
const lyrics = document.getElementById("lyrics");
const username_html = document.getElementById("username");
const title = document.getElementsByTagName("title");
const signOut = document.getElementById("signOut");

const songId = getSongId();
const song = await fetchSong(songId);
const heartSrc = await createIcon(song);
await createSongInfo();

async function createSongInfo() {
  username_html.innerHTML = await fetchUsername();
  songName.innerHTML = song.name;
  title[0].innerHTML = song.name;
  singerName.innerHTML = song.artist;
  image.src = song.cover;
  audio.src = song.file;
  lyrics.innerHTML = song.lyrics;
  likeIcon.src = heartSrc;
}

function getSongId() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get("songId");
}

likeIcon.addEventListener("click", async () => {
  if (likeIcon.getAttribute("src") === HEART) {
    likeIcon.src = FILLED_HEART;
    await addSongToPlaylist(song.id);
  } else {
    likeIcon.src = HEART;
    await removeSongFromPlaylist(song.id);
  }
});

signOut.addEventListener("click", () => {
  localStorage.clear();
});
