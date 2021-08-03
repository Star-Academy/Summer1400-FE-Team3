import { addCard,addPlaylist } from "./methods.js";
import {fetchData,fetchPlaylist,fetchUsername} from "./fetchData.js";
const songArr = [...await fetchData()];
let playlistArr = [...await fetchPlaylist()];

const username_html = document.getElementById("username");
const songList = document.getElementById("songCards");
const favList = document.getElementById("favCards");
const likeIcons = document.getElementsByClassName("favorite");
const addPlaylist_btn=document.getElementById("addPlaylist");
const signOut=document.getElementById("signOut");

username_html.innerHTML = await fetchUsername();
await makeList();

async function makeList() {
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