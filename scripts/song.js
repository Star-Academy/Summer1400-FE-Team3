let currentSong = {
  name: "Diamonds",
  singer: "sam smith",
  album: "Love Goes",
  year: "2004",
  genre: "pop",
};
let songName = document.getElementById("songName");
let singerName = document.getElementById("singerName");
let album = document.getElementById("album");
let year = document.getElementById("year");
let genre = document.getElementById("genre");

songName.innerHTML = currentSong.name;
singerName.innerHTML = currentSong.singer;
album.innerHTML = currentSong.album;
year.innerHTML = currentSong.year;
genre.innerHTML = currentSong.genre;
