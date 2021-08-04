// this is song card
function addCard(song) {
    return `<div class="card" id="${song.id}">
                              <a class="songImage " name="${song.id}">
                                  <img src=${song.cover} alt="Avatar" style="width:100%"/>
                              </a>
                              <div class="container">
                                <h4>
                                 <a class="songName" name="${song.id}"><b>${song.name}</b></a>
                                </h4>
                              <img
                                src="../assets/images/filled-heart.png"
                      
                                class="favorite"
                                name="${song.id}"
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