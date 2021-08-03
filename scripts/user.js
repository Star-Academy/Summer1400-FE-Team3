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
await createFavorites();
await makeList();

async function createFavorites() {
  if (playlistArr.length!==0)
    return ;
    const playlistInfo = {
      token: localStorage.getItem('token'),
      name: "مورد علاقه ها"
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
      console.log("create favorite playlist")
      console.log(playlistArr);
    }else if (response.status===400){
      console.log(result.message);
    }
    else if (response.status===401)
    {
      console.log(result.message);
    }
    else {
      console.log(result.message);
    }
}

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

signOut.addEventListener("click", ()=>{
  localStorage.clear();
});