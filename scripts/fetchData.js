import { playlistArr } from "./arrays.js";

async function fetchData() {
  const response = await fetch("http://130.185.120.192:5000/song/all");
  const result = await response.json();
  if (response.status === 200) {
    return [...result.songs];
  } else {
    alert(result.message);
  }
}

async function fetchPlaylist() {
  const userToken = {
    token: localStorage.getItem("token"),
  };
  let response = await fetch("http://130.185.120.192:5000/playlist/all", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(userToken),
  });
  const result = await response.json();

  if (response.status === 200) {
    return result;
  } else {
    alert(result.message);
  }
}

async function fetchUsername() {
  const id = await findID();
  const userInfo = await findUserInfo(id);
  return userInfo.user.username;
}

async function findID() {
  const userToken = {
    token: localStorage.getItem("token"),
  };
  const response = await fetch("http://130.185.120.192:5000/user/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(userToken),
  });
  const result = await response.json();
  if (response.status === 200) {
    return result.id;
  } else alert(result.message);
}

async function findUserInfo(id) {
  const response = await fetch(`http://130.185.120.192:5000/user/one/${id}`);
  const result = await response.json();
  if (response.status === 200) {
    return result;
  } else alert(result.message);
}

async function fetchSong(songId) {
  const response = await fetch(
    `http://130.185.120.192:5000/song/one/${songId}`
  );
  const result = await response.json();
  if (response.status === 200) {
    return result.song;
  } else alert(result.message);
}

async function fetchPage(current) {
  const details = {
    size: 4,
    current: current,
    sorter: "name",
    desc: true,
  };
  const response = await fetch("http://130.185.120.192:5000/song/page", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(details),
  });
  const result = await response.json();
  if (response.status === 200) {
    return result.songs;
  } else alert(result.message);
}

async function addSongToPlaylist(songId) {
  console.log(playlistArr[0]);
  const details = {
    token: localStorage.getItem("token"),
    playlistId: playlistArr[0].id,
    songId: songId,
  };
  const response = await fetch(
    "http://130.185.120.192:5000/playlist/add-song",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    }
  );
  const result = await response.json();
  if (response.status === 200) {
    return result.songs;
  } else {
    alert(result.message);
  }
}

export {
  fetchData,
  fetchPlaylist,
  fetchUsername,
  fetchSong,
  fetchPage,
  addSongToPlaylist,
};
