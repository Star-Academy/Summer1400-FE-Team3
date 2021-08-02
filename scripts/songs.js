const songArr = [
  {
    name: "Always",
    genre: "metal",
    singer: "isak",
    src: "../assets/images/Single_by_Sam_Smith.jpeg",
    favorite: false,
  },
  {
    name: "Hello",
    genre: "pop",
    singer: "adel",
    src: "../assets/images/Single_by_Sam_Smith.jpeg",
    favorite: true,
  },
  {
    name: "blinding lights",
    genre: "rock",
    singer: "the weekend",
    src: "../assets/images/Single_by_Sam_Smith.jpeg",
    favorite: true,
  },
  {
    name: "ocean eyes",
    genre: "rap",
    singer: "billie",
    src: "../assets/images/Single_by_Sam_Smith.jpeg",
    favorite: false,
  },
  {
    name: "Diamonds",
    genre: "pop",
    singer: "sam smith",
    src: "../assets/images/Single_by_Sam_Smith.jpeg",
    favorite: true,
  },
  {
    name: "bad",
    genre: "country",
    singer: "james",
    src: "../assets/images/Single_by_Sam_Smith.jpeg",
    favorite: true,
  },
];
const username = "KimiaParmida";

const songList = document.getElementById("songCards");
const username_html = document.getElementById("username");
const artistSelect = document.getElementById("artist");
const genreSelect = document.getElementById("genreSelect");
const filterButton = document.getElementById("filterButton");
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("search");

username_html.innerHTML = username;
makeList();

function makeList() {
  songArr.forEach((song) => {
    setSongs(song);
  });
}

function setSongs(song) {
  const likeIconSrc= heartIconSrc(song);
  songList.innerHTML += addCard(likeIconSrc,song);
}

function heartIconSrc(song) {
  if (!song.favorite)
    return  "../assets/images/heart.png";

  return  "../assets/images/filled-heart.png";
}

function addCard(likeIconSrc,song) {
  return `<div class="card">
                              <a href="Song.html">
                                  <img src=${song.src} alt="Avatar" style="width:100%"/>
                              </a>
                              <div class="container">
                                <h4>
                                 <a href="Song.html"><b>${song.name}</b></a>
                                </h4>
                              <img
                                src=${likeIconSrc}
                                class="favorite"
                                width="30"
                                height="27"
                                alt="Add to favorite"
                                />
                              <p>${song.singer}</p>
                            </div>
                          </div>`;
}

searchButton.addEventListener("click", () => {
  const searchValue = searchInput.value.toLowerCase();
  songList.innerHTML = "";
  songArr.forEach((song) => {
    if (song.name.toLowerCase().includes(searchValue)) {
      setSongs(song);
    }
  });
});

filterButton.addEventListener("click", () => {
  const artist = artistSelect.value.toLowerCase();
  const genre = genreSelect.value.toLowerCase();
  songList.innerHTML = "";
  songArr.forEach((song) => {
    if (
      song.singer.toLowerCase() === artist &&
      song.genre.toLowerCase() === genre
    ) {
      setSongs(song);
    }
  });
});
