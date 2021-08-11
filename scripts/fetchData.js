import { playlistArr } from "./arrays.js";

async function fetchData() {
  const response = await fetch("https://songs.code-star.ir/song/all");
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
  let response = await fetch("https://songs.code-star.ir/playlist/all", {
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
  return userInfo.user;
}

async function findID() {
  const userToken = {
    token: localStorage.getItem("token"),
  };
  const response = await fetch("https://songs.code-star.ir/user/auth", {
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
  const response = await fetch(`https://songs.code-star.ir/user/one/${id}`);
  const result = await response.json();
  if (response.status === 200) {
    return result;
  } else alert(result.message);
}

async function fetchSong(songId) {
  const response = await fetch(
    `https://songs.code-star.ir/song/one/${songId}`
  );
  const result = await response.json();
  if (response.status === 200) {
    return result.song;
  } else alert(result.message);
}

async function fetchPage(index, size) {
  const details = {
    size: size,
    current: index,
    sorter: "name",
    desc: true,
  };
  const response = await fetch("https://songs.code-star.ir/song/page", {
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
  let details = {};
  if (playlistArr.length === 0) {
    details = {
      token: localStorage.getItem("token"),
      playlistId: [...(await fetchPlaylist())][0].id,
      songId: songId,
    };
  } else {
    details = {
      token: localStorage.getItem("token"),
      playlistId: playlistArr[0].id,
      songId: songId,
    };
  }
  const response = await fetch(
    "https://songs.code-star.ir/playlist/add-song",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    }
  );

  if (response.status === 200) {
    console.log("song added successfully!");
  } else {
    const result = await response.json();
    console.log(result.message);
  }
}

async function removeSongFromPlaylist(songId) {
  let details = {};
  if (playlistArr.length === 0) {
    details = {
      token: localStorage.getItem("token"),
      playlistId: [...(await fetchPlaylist())][0].id,
      songId: songId,
    };
  } else {
    details = {
      token: localStorage.getItem("token"),
      playlistId: playlistArr[0].id,
      songId: songId,
    };
  }

  const response = await fetch(
    "https://songs.code-star.ir/playlist/remove-song",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    }
  );

  if (response.status === 200) {
    console.log("song removed successfully!");
  } else {
    const result = await response.json();
    console.log(result.message);
  }
}

async function fetchFind(phrase) {
  const details = {
    phrase: phrase,
    count: 20,
    sorter: "name",
    desc: true,
  };
  const response = await fetch("https://songs.code-star.ir/song/find", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(details),
  });
  const result = await response.json();
  if (response.status === 200) {
    return result.songs;
  } else {
    console.log(result.message);
  }
}

async function fetchAlterProfile(base64) {
  const details = {
    token: localStorage.getItem("token"),
    avatar: base64,
  };
  console.log(details);
  const response = await fetch("https://songs.code-star.ir/user/alter", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(details),
  });

  if (response.status === 200) {
    console.log("avatar changed!");
  } else {
    const result = await response.json();
    console.log(result.message);
  }
}

export {
  fetchData,
  fetchPlaylist,
  fetchUsername,
  fetchSong,
  fetchPage,
  addSongToPlaylist,
  removeSongFromPlaylist,
  fetchFind,
  findUserInfo,
  fetchAlterProfile,
};
