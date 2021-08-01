const username = "KimiaParmida";

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
];

let favArr = [
  {
    name: "Always",
    genre: "metal",
    singer: "isak",
    src: "../assets/images/Single_by_Sam_Smith.jpeg",
    favorite: true,
  },
  {
    name: "Hello",
    genre: "pop",
    singer: "adel",
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
];

let username_html = document.getElementById("username");
let songList = document.getElementById("songCards");
let favList = document.getElementById("favCards");

username_html.innerHTML = username;
makeList();

function makeList() {
  songArr.forEach((song) => {
    let likeIconSrc;
    if (!song.favorite) {
      likeIconSrc = "../assets/images/heart.png";
    } else {
      likeIconSrc = "../assets/images/filled-heart.png";
    }
    songList.innerHTML += `<div class="card">
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
  });

  favArr.forEach((favItem) => {
    favList.innerHTML += `<div class="card">
                              <a href="Song.html">
                                  <img src=${favItem.src} alt="Avatar" style="width:100%"/>
                              </a>
                              <div class="container">
                                <h4>
                                 <a href="Song.html"><b>${favItem.name}</b></a>
                                </h4>
                              <img
                                src="../assets/images/filled-heart.png"
                                class="favorite"
                                width="30"
                                height="27"
                                alt="Add to favorite"
                                />
                              <p>${favItem.singer}</p>
                            </div>
                          </div>`;
  });
}
