	var res = document.getElementsByTagName('button');

	for (var i = 0; i < res.length; i++) {
		res[i].addEventListener('click', function() {

		});
	}

	function makeCounter() {

		var counterValue = 1;

		return function() {
			return counterValue++
		}

	}

	setTimeout(makeCounter, 1000);
