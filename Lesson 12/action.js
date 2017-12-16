	window.onload = function() {
		var buttons = document.getElementById("buttons").getElementsByTagName("button");

		console.log(buttons);

		for (var i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener("click", getNames);
		}

		var container = {};

		function getNames() {

			for (var key in container) {
				if (key == this.name) {
					container[this.name]++;
				}
			}
				if (!(container[this.name])) {
					container[this.name] = 1;
				}
		}

		setTimeout(counterButtons, 1 * 5000);

		function counterButtons() {

			var string = "";

			for (var i in container) {
				string = string + i + " was pushed " + container[i] + " times." + '\n';
			}

			console.log(string);

		}

	}