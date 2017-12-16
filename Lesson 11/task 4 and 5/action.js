	makeCounter();

	function makeCounter() {

		var counterValue = 1;

		return function() {
			return counterValue++;
		}

	}

	setTimeout(makeCounter, 2000);

	/*window.onload = function() {
		var res = document.getElementById("res");
		res.addEventListener("click", );
	}*/
