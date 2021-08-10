import { fetchData, fetchPlaylist } from "./fetchData.js";

const songArr = [...(await fetchData())];
let playlistArr = [...(await fetchPlaylist())];

export { songArr, playlistArr };
