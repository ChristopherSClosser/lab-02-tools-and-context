'use strict';

const assert = require('assert');
const expect = require('chai').expect;
const song = require('../script/lib/song.js');

describe('song.js', function(){

  //test for new favsong
  describe('#FavSong()', function(){
    it('should return an object and have three key: value pairs', function(){
      let favSong = new song.FavSong('IIV', 'VII');
      let type = typeof favSong;
      let pairs = Object.keys(favSong).length;
      assert.equal(`${type}`, 'object');
      assert.equal(`${pairs}`, 3);
      console.log(`favSong is indeed an ${type} with ${pairs} key: value pairs & looks like... \n`, favSong);
    });
  });

  // test for new song
  describe('#Song()', function(){
    it('should return an object and have two key: value pairs', function(){
      let songOne = new song.Song('Don\'t Do It', 'STBP');
      let type = typeof songOne;
      let pairs = Object.keys(songOne).length;
      assert.equal(`${type}`, 'object');
      assert.equal(`${pairs}`, 2);
      console.log(`sonOne is indeed an ${type} with ${pairs} key: value pairs & looks like... \n`, songOne);
    });
  });

  //test for song list
  describe('#songs{[], ()}', function(){
    it('should return an object with an array and a function', function(){
      song.songs.addToList('songOne', 'favSong', 'No Good');
      let type = typeof song.songs;
      assert.equal(`${type}`, 'object');
      expect(song.songs).to.have.property('addToList');
    });
  });

  //test for bind
  describe('#FavSong.bind()', function(){
    it('should return a funtion', function(){
      assert.equal(typeof song.FavSong.bind(), 'function');
      expect(song.FavSong.bind()).to.contain.property('bind');
    });
  });
});
