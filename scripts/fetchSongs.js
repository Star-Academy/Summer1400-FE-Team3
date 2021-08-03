async function fetchSongs() {
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

export {fetchSongs,fetchPlaylist};