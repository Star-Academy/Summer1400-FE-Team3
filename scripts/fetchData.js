async function fetchData() {
    const response = await fetch(
        "http://130.185.120.192:5000/song/all"
    );
    const result = await response.json();
    if (response.status === 200) {
        return [...result.songs];
    } else {
        console.log("Server Error!");
    }
}

async function fetchPlaylist() {
    const userToken= {
        token: localStorage.getItem("token")
    }
    let response = await fetch('http://130.185.120.192:5000/playlist/all', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(userToken)
    });
    const result = await response.json();

    if(response.status===200){
        return result;

    }
    else {
        alert("server error")
    }

}

async function fetchUsername() {
    const id=await findID();
    const userInfo=await findUserInfo(id);
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
    } else if (response.status === 401) {
        alert(result.message);
    } else {
        alert(result.message);
    }
}

async function findUserInfo(id) {
    const response = await fetch(
        `http://130.185.120.192:5000/user/one/${id}`
    );
    const result = await response.json();
    if (response.status === 200) {
        return result;
    } else if (response.status === 400) {
        console.log(result.message);
    } else if (response.status === 404) {
        console.log(result.message);
    } else {
        console.log(result.message);
    }

}

async function fetchSong(songId) {
    const response = await fetch(
        `http://130.185.120.192:5000/song/one/${songId}`
    );
    const result = await response.json();
    if (response.status === 200) {
        return result.song;
    } else if (response.status === 400) {
        console.log(result.message);
    } else if (response.status === 404) {
        console.log(result.message);
    } else {
        console.log(result.message);
    }

}

export {fetchData,fetchPlaylist, fetchUsername, fetchSong};