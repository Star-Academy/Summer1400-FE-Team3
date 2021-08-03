function addCard(song) {
    return `<div class="card">
                              <a href="Song.html">
                                  <img src=${song.cover} alt="Avatar" style="width:100%"/>
                              </a>
                              <div class="container">
                                <h4>
                                 <a href="Song.html"><b>${song.name}</b></a>
                                </h4>
                              <img
                                src="../assets/images/filled-heart.png"
                                id="${song.id}"
                                class="favorite"
                                width="30"
                                height="27"
                                alt="Add to favorite"
                                />
                              <p>${song.artist}</p>
                            </div>
                          </div>`;
}

function addPlaylist(playlist,) {
    return `<div class="card">
                              <a href="Song.html">
                                  <img src="../assets/images/playlist.jpg" alt="Avatar" style="width:100%"/>
                              </a>
                              <div class="container">
                                <h4>
                                 <a href="Song.html"><b>${playlist.name}</b></a>
                                </h4>   
                                <img
                                src="../assets/images/remove2.png"
                                id="${playlist.name}"
                                class="delete"
                                width="30"
                                height="27"
                                alt="delete playlist"
                                />                       
                            </div>
                          </div>`;
}


function findIndex(id,array) {
    let index=-1;
    array.forEach((song, songIndex) => {
        if (song.id === id) {
            index= songIndex;
        }
    });
    return index;
}
export {addCard,findIndex,addPlaylist};