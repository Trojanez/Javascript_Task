	$('#main').draggable();

	function changeColor() {
		$('#main #second').animate({
			backgroundColor: 'red'
		}, 500, function() {
			$('#main #second').animate({
			backgroundColor: 'blue'
			}, 500);
		});

	}

	function changeSecondColor() {
		$('#main #third').animate({
			backgroundColor: 'yellow'
		}, 500, function() {
			$('#main #second').animate({
			backgroundColor: 'green'
			}, 500);
		});

	}

	function move() {
		$('#main').find('#second').animate({
		left: 150,
		top: 150
	}, 800, function() {
		$('#main').find('#second').animate({
			left: 0,
			top: 0
		}, 800);
	});
}

function moveSecond() {
		$('#main').find('#third').animate({
		right: 150,
		top: 150
	}, 800, function() {
		$('#main').find('#third').animate({
			right: 0,
			top: 0
		}, 800);
	});
}

	var first = setInterval(move, 1000);
	var second = setInterval(changeColor, 1000);
	var third = setInterval(moveSecond, 1000);
	var fourth = setInterval(changeSecondColor, 1000);