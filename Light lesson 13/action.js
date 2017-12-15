	var color = ['red', 'yellow', 'green'];
	var time = [5, 2, 4];
	var count = 2;

	changeLightColor();

	function changeLightColor() {

		var light = document.getElementById('main').getElementsByTagName('div');

		light[count].style.backgroundColor = '';

			if(++count > 2) {
				count = 0;
			}

		light[count].style.backgroundColor = color[count];

		setTimeout(changeLightColor, time[count] * 1000);
	}

	/*function countdown() {
			var timer = document.getElementById('time1');

					timer.innerHTML--;

				if (timer.innerHTML == 0) {
					timer.innerHTML = "";
				} else {
					setTimeout(countdown, 1000);
				}

		} setTimeout(countdown, 1000);*/