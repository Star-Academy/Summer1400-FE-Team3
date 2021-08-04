import { HEART, FILLED_HEART } from "./address.js";

let currentSong = {
  name: "Diamonds",
  genre: "pop",
  singer: "sam smith",
  album: "Love Goes",
  year: "2004",
  image_source: "../assets/images/Single_by_Sam_Smith.jpeg",
  audio_source: "../assets/musics/Sam%20Smith%20-%20Diamonds.mp3",
  favorite: true,
};
const username = "KimiaParmida";

let likeIcon = document.getElementById("likePic");
let songName = document.getElementById("songName");
let singerName = document.getElementById("singerName");
let album = document.getElementById("album");
let year = document.getElementById("year");
let genre = document.getElementById("genre");
let image = document.getElementById("songImage");
let audio = document.getElementById("audio");
let username_html = document.getElementById("username");

createSongInfo();
createIcon();

function createSongInfo() {
  username_html.innerHTML = username;
  songName.innerHTML = currentSong.name;
  singerName.innerHTML = currentSong.singer;
  album.innerHTML = currentSong.album;
  year.innerHTML = currentSong.year;
  genre.innerHTML = currentSong.genre;
  image.setAttribute("src", currentSong.image_source);
  audio.setAttribute("src", currentSong.audio_source);
}

function createIcon() {
  if (!currentSong.favorite) {
    likeIcon.setAttribute("src", HEART);
  } else {
    likeIcon.setAttribute("src", FILLED_HEART);
  }
}

likeIcon.addEventListener("click", changeIcon);

function changeIcon() {
  if (currentSong.favorite) {
    likeIcon.setAttribute("src", HEART);
    currentSong.favorite = false;
  } else {
    likeIcon.setAttribute("src", FILLED_HEART);
    currentSong.favorite = true;
  }
}
