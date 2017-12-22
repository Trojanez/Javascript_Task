	window.onload = function() {
		var buttons = document.getElementById('buttons').getElementsByTagName('button');

		for(var i = 0; i < buttons.length; i++) {
			buttons[0].addEventListener('click', showPrev);
			buttons[1].addEventListener('click', showNext);
		}

		var images = document.getElementById("images").getElementsByTagName('img');
		var i = 0;

		function showNext() {
			images[i].className = '';
			i++;

			if (i > images.length - 1) {
				i = 0;
			}

			images[i].className = 'visible';
		}

		function showPrev() {
			images[i].className = '';
			i--;

			if (i < 0) {
				i = images.length - 1;
			}

			images[i].className = 'visible';
		}
	}