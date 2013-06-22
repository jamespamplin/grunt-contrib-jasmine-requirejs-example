define(['src/Song'], function(Song) {
	describe('Song', function() {

		it('can create a Song', function() {
			var song = new Song('Daft Punk', 'Get Lucky');

			expect(song.artist).toBe('Daft Punk');
			expect(song.title).toBe('Get Lucky');
		});

		it('can favourite a Song', function() {
			var song = new Song('Florence + the Machine', 'No light, no light');

			expect(song.isFavourited()).toBe(false);

			song.persistFavoriteStatus(true);

			expect(song.isFavourited()).toBe(true);
		});

	});
});
