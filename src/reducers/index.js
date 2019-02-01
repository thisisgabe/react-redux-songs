import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Shuggie", artist: "Foxygen", duration: "3:22" },
    { title: "Raspberry", artist: "Grouplove", duration: "3:16" },
    { title: "Going Native", artist: "Summer Salt", duration: "5:11" },
    { title: "Leave It In My Dreams", artist: "The Voidz", duration: "3:59" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
