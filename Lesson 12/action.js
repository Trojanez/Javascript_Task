	var buttons = document.getElementsByTagName('input');

	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', action);
	}

	var buttonKeeper = {};

	function action() {
		for (var key in buttonKeeper) {
		if (key == this.name) {
			buttonKeeper[this.name]++;
		}
	}

	if(!(buttonKeeper[this.name])) {
			buttonKeeper[this.name] = 1;
		}
	}

	var a = setInterval(logger, 3000);



	function logger() {
	    var string = "";
	    for(var i in buttonKeeper) {
	    string = string + "Button " + i + " was pushed "+ buttonKeeper[i] + 'times' + '\n';
	}
    console.log(string)
}