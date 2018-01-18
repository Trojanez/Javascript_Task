	var time = [0.5, 0.5, 0.5, 0.5];
	var color = ['green', 'yellow', 'blue', 'white'];
	var count = 3;

	changeLight();

	function changeLight() {
		var light = document.getElementsByClassName('light');

		light[count].style.background = '';

		if(++count > 3) {
			count = 0;
		}

		light[count].style.background = color[count];

		setTimeout(changeLight, time[count] * 1000);
	}

	var elem = document.getElementById('go');

	elem.onmousedown = function(e) {
		elem.style.position = 'absolute';
		elem.style.background = 'red';
		elem.style.border = '3px solid black';

		move(e);

		document.body.appendChild(elem);

		elem.style.zIndex = 1000; 

		function move(e) {
			elem.style.left = e.pageX - elem.offsetWidth / 2 + "px";
			elem.style.top = e.pageY - elem.offsetHeight / 2 + "px";
		}

		document.onmousemove = function(e) {
			move(e);
		}

		elem.onmouseup = function() {
		    document.onmousemove = null;
		    elem.onmouseup = null;
		    elem.style.background = '';
		    elem.style.border = '';
  		}
	}