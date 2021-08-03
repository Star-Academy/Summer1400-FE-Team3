import { addCard,addPlaylist } from "./methods.js";
import {fetchSongs,fetchPlaylist} from "./fetchSongs.js";
const songArr = [...await fetchSongs()];
let playlistArr=[];
// let playlistArr = [...await fetchPlaylist()];
const username_html = document.getElementById("username");
const songList = document.getElementById("songCards");
const favList = document.getElementById("favCards");
const likeIcons = document.getElementsByClassName("favorite");
const addPlaylist_btn=document.getElementById("addPlaylist");
const signOut=document.getElementById("signOut");

const userToken = {
  token: localStorage.getItem("token"),
};
let id;
const response = await fetch("http://130.185.120.192:5000/user/auth", {
  method: "POST",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  body: JSON.stringify(userToken),
});
const result = await response.json();
if (response.status === 200) {
  id = result.id;
} else if (response.status === 401) {
  alert("Authentication failed");
} else {
  alert("Server Error!");
}

let userInfo;
const getUserResponse = await fetch(
  `http://130.185.120.192:5000/user/one/${id}`
);
const getUserResult = await getUserResponse.json();
if (getUserResponse.status === 200) {
  userInfo = getUserResult;
} else if (getUserResponse.status === 400) {
  console.log("Bad request");
} else if (getUserResponse.status === 404) {
  console.log("User not found!");
} else {
  console.log("Server Error!");
}

username_html.innerHTML = userInfo.user.username;
await makeList();

async function makeList() {
  playlistArr = [...await fetchPlaylist()];
  for (let i=0;i<4;i++)
  {
    songList.innerHTML += addCard(songArr[i]);
  }
  playlistArr.forEach((playlist) => favList.innerHTML += addPlaylist(playlist));
}

 function heartIconSrc(song) {
  if (!song.favorite) return "../assets/images/heart.png";

  return "../assets/images/filled-heart.png";
}

 addPlaylist_btn.addEventListener("click",async()=>{
  let name = prompt("Please enter your new playlist name");
  if (name != null) {
    const playlistInfo = {
      token: localStorage.getItem('token'),
      name: name
    }
    let response = await fetch('http://130.185.120.192:5000/playlist/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(playlistInfo)
    });
    const result = await response.json();

    if(response.status===201){
      localStorage.setItem(`playlist:${name}`,result.id);
      await makeList();

    }else if (response.status===400){
      console.log(result);
    }
    else if (response.status===401)
    {
      console.log(result);
    }
    else {
      console.log(response.status)
      console.log("server error");

    }
  }
})

signOut.addEventListener("click", ()=>{
  localStorage.clear();
})