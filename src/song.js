define(function() {

	'use strict';


	function Song(artist, title) {
		this.artist = artist;
		this.title = title;
	}

	Song.prototype.isFavourited = function() {
		return this.favourited === true;
	};


	Song.prototype.persistFavoriteStatus = function(value) {
		this.favourited = value;
	};

	return Song;
});
