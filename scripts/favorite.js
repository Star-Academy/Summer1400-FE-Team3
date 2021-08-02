const favArr = [
  {
    name: "Always",
    genre: "metal",
    singer: "isak",
    src: "../assets/images/Single_by_Sam_Smith.jpeg",
    id:1
  },
  {
    name: "Hello",
    genre: "pop",
    singer: "adel",
    src: "../assets/images/Single_by_Sam_Smith.jpeg",
    id:2
  },
  {
    name: "blinding lights",
    genre: "rock",
    singer: "the weekend",
    src: "../assets/images/Single_by_Sam_Smith.jpeg",
    id:3

  },
  {
    name: "ocean eyes",
    genre: "rap",
    singer: "billie",
    src: "../assets/images/Single_by_Sam_Smith.jpeg",
    id:4
  },
  {
    name: "Diamonds",
    genre: "pop",
    singer: "sam smith",
    src: "../assets/images/Single_by_Sam_Smith.jpeg",
    id:5
  },
  {
    name: "bad",
    genre: "country",
    singer: "james",
    src: "../assets/images/Single_by_Sam_Smith.jpeg",
    id:6
  },
];
const all = "all";
const artistArr = [
  all,
  "adel",
  "isak",
  "the weekend",
  "billie",
  "sam smith",
  "james",
];
const genreArr = [all, "pop", "rock", "metal", "rap", "country"];
const username = "KimiaParmida";
const username_html = document.getElementById("username");
const favList = document.getElementById("favCards");
const artistSelect = document.getElementById("artist");
const genreSelect = document.getElementById("genreSelect");
const filterButton = document.getElementById("filterButton");
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("search");
const likeIcons = document.getElementsByClassName("favorite");

username_html.innerHTML = username;
makeList();
createSelectBoxes();

function makeList() {
  favArr.forEach((favItem) => {
    setSongs(favItem);
  });
  removeFromList();
}

function setSongs(favItem) {
  favList.innerHTML += addCard(favItem);
}

function addCard(favItem) {
  return `<div class="card">
                              <a href="Song.html">
                                <img src=${favItem.src} alt="Avatar" style="width:100%"/>
                              </a>
                            <div class="container">
                              <h4>
                                <a href="Song.html"><b>${favItem.name}</b></a>
                              </h4>
                              <img
                                src="../assets/images/filled-heart.png"
                                id="${favItem.id}"
                                class="favorite"
                                width="30"
                                height="27"
                                alt="Add to favorite"
                              />
                              <p>${favItem.singer}</p>
                            </div>
                          </div>`;
}

function removeFromList() {
  for (const like of likeIcons) {
    like.addEventListener("click", () => {
      const id = like.getAttribute("id");
      favList.innerHTML = "";
      const index = findIndex(parseInt(id));
      favArr.splice(index, 1);
      makeList();
    });
  }
}

function createSelectBoxes() {
  artistArr.forEach((artist) => {
    artistSelect.innerHTML += `<option value="${artist}">${artist}</option>`;
  });
  genreArr.forEach((genre) => {
    genreSelect.innerHTML += `<option value="${genre}">${genre}</option>`;
  });
}

function findIndex(id) {
  favArr.forEach((song, songIndex) => {
    if (song.id === id) {
      return songIndex;
    }
  });
}

searchButton.addEventListener("click", () => {
  const searchValue = searchInput.value.toLowerCase();
  favList.innerHTML = "";
  favArr.forEach((favItem) => {
    if (favItem.name.toLowerCase().includes(searchValue)) {
      setSongs(favItem);
    }
  });
});

filterButton.addEventListener("click", () => {
  const artist = artistSelect.value.toLowerCase();
  const genre = genreSelect.value.toLowerCase();

  favList.innerHTML = "";
  favArr.forEach((favItem) => {
    if (matchFilter(genre, artist, favItem)) {
      setSongs(favItem);
    }
  });
});

function matchFilter(genre, artist, favItem) {
  return (
    (favItem.singer.toLowerCase() === artist &&
      favItem.genre.toLowerCase() === genre) ||
    (favItem.singer.toLowerCase() === artist && genre.toLowerCase() === all) ||
    (artist.toLowerCase() === all && favItem.genre.toLowerCase() === genre) ||
    (artist.toLowerCase() === all && genre.toLowerCase() === all)
  );
}
