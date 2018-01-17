jQuery(function($) {
	var updateJoke = function() {
			var joke = localStorage.getItem('latestJoke');

			if (joke !== null) {
				joke = JSON.parse(joke);

				$('#jokeImg').prop('src', joke.icon_url);
				$('#jokeText').text(joke.value);
				$('#jokeLink').prop('href', joke.url);
			}
		};

	updateJoke();

	$.ajax ({
		'url': 'https://api.chucknorris.io/jokes/random',
		'method': 'GET',
		'dataType': 'json'
	}).done(function(joke) {
		localStorage.setItem('latestJoke', JSON.stringify(joke));
	}).always(function() {
		updateJoke();
		$('.joke').removeClass('is-hidden');
	});
});
