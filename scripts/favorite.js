let favArr = [
  { name: "Always", genre: "metal", singer: "isak" },
  { name: "Hello", genre: "pop", singer: "adel" },
  { name: "blinding lights", genre: "rock", singer: "the weekend" },
  { name: "ocean eyes", genre: "rap", singer: "billie" },
  { name: "Diamonds", genre: "pop", singer: "sam smith" },
  { name: "bad", genre: "country", singer: "james" },
];

let artistArr = [
  "all",
  "adel",
  "isak",
  "the weekend",
  "billie",
  "sam smith",
  "james",
];
let genreArr = ["all", "pop", "rock", "metal", "rap", "country"];

let favList = document.getElementById("favList");
let artistSelect = document.getElementById("artist");
let genreSelect = document.getElementById("genreSelect");
let filterButton = document.getElementById("filterButton");
let searchButton = document.getElementById("searchButton");
let searchInput = document.getElementById("search");

function makeList() {
  favArr.forEach((x) => {
    favList.innerHTML +=
      '<li><a href="Song.html">' +
      x.name +
      '</a><button class="remove" name="' +
      x.name +
      '">حذف</button></li>';
  });
  artistArr.forEach((x) => {
    artistSelect.innerHTML += "<option value=" + x + ">" + x + "</option>";
  });
  genreArr.forEach((x) => {
    genreSelect.innerHTML += "<option value=" + x + ">" + x + "</option>";
  });

  let removeButtons = document.getElementsByClassName("remove");
  Array.prototype.forEach.call(removeButtons, (x) => {
    x.addEventListener("click", () => {
      let name = x.getAttribute("name");
      favList.innerHTML = "";
      let index = -1;
      favArr.forEach((song, songIndex) => {
        if (song.name == name) {
          index = songIndex;
        }
      });
      favArr.splice(index, 1);
      makeList();
    });
  });
}

makeList();

searchButton.addEventListener("click", () => {
  let searchValue = searchInput.value.toLowerCase();
  favList.innerHTML = "";
  favArr.forEach((x) => {
    if (x.name.toLowerCase().includes(searchValue)) {
      favList.innerHTML +=
        '<li><a href="Song.html">' +
        x.name +
        '</a><button class="remove" name="' +
        x.name +
        '">حذف</button></li>';
    }
  });
});

filterButton.addEventListener("click", () => {
  let artist = artistSelect.value.toLowerCase();
  let genre = genreSelect.value.toLowerCase();

  favList.innerHTML = "";
  favArr.forEach((x) => {
    if (
      (x.singer.toLowerCase() == artist && x.genre.toLowerCase() == genre) ||
      (x.singer.toLowerCase() == artist && genre.toLowerCase() == "all") ||
      (artist.toLowerCase() == "all" && x.genre.toLowerCase() == genre) ||
      (artist.toLowerCase() == "all" && genre.toLowerCase() == "all")
    ) {
      favList.innerHTML +=
        '<li><a href="Song.html">' +
        x.name +
        '</a><button class="remove" name="' +
        x.name +
        '">حذف</button></li>';
    }
  });
});
