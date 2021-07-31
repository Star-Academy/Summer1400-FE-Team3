let currentSong = {
  name: "Diamonds",
  singer: "sam smith",
  album: "Love Goes",
  year: "2004",
  genre: "pop",
  image_source: "../assets/images/Single_by_Sam_Smith.jpeg",
  audio_source:"../assets/musics/Sam%20Smith%20-%20Diamonds.mp3"

};
const username = "KimiaParmida";
let songName = document.getElementById("songName");
let singerName = document.getElementById("singerName");
let album = document.getElementById("album");
let year = document.getElementById("year");
let genre = document.getElementById("genre");
let image=document.getElementById("songImage");
let audio=document.getElementById("audio");
let username_html= document.getElementById("username");

songName.innerHTML = currentSong.name;
singerName.innerHTML = currentSong.singer;
album.innerHTML = currentSong.album;
year.innerHTML = currentSong.year;
genre.innerHTML = currentSong.genre;
username_html.innerHTML = username;
image.setAttribute("src",currentSong.image_source);
audio.setAttribute("src",currentSong.audio_source);
