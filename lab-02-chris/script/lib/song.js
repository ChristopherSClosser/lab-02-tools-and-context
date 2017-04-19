'use strict';

module.exports = exports = {};

//song constructor
exports.Song = function(title, artist) {
  this.title = title;
  this.artist = artist;
};

//favSong constructor
exports.FavSong = function(title, artist) {
  exports.Song.call(this, title, artist);
  this.loveSong = true;
};

exports.FavSong.bind('!!!');

exports.songs = {
  list: [],
  addToList: function(){
    Array.prototype.push.apply(this.list, arguments);
  },
};
