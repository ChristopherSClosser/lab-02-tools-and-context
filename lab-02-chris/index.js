'use strict';

let song = require('./script/lib/song.js');

console.log(new song.Song('Don\'t Do It', 'STBP'));
console.log(new song.FavSong('IIV', 'VII'));
song.songs.addToList('songOne', 'favSong', 'No Good');
console.log(song.songs.list);
