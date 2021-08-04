function addCard(likeIconSrc,song) {
    return `<div class="card">
                              <a href="Song.html">
                                  <img src=${song.src} alt="Avatar" style="width:100%"/>
                              </a>
                              <div class="container">
                                <h4>
                                 <a href="Song.html"><b>${song.name}</b></a>
                                </h4>
                              <img
                                src=${likeIconSrc}
                                id="${song.id}"
                                class="favorite"
                                width="30"
                                height="27"
                                alt="Add to favorite"
                                />
                              <p>${song.singer}</p>
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
export {addCard,findIndex};