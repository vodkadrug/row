var F = $('.field'),
	colors = [ '#cccccc',
			'#ffff00',
			'#ffffff',
			'#ffab40',
			'#e51c23',
			'#ff5177',
			'#b2ff59',
			'#3f51b5',
			'#e040fb',
			'#000000'
		]
function randomize () {
	return Math.floor(Math.random()*(10))
}
function generator () {
	// document.write('<div class="gameover">Wasted</div>');
	for (i=0; i<245; i++) {
			document.write('<div class="field"></div>');
		};
	};

var field = {
	color: function () {
		this.style.backgrounColor(colors(randomize()))
	}
}

F.each().color;