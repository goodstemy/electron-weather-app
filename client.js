const {ipcRenderer} = require('electron');
const drag = require('electron-drag');
const remote = require('electron').remote;

const clear = drag('#drag-area');

const close = document.querySelector(".button-close");
const expand = document.querySelector(".button-close");
const turn = document.querySelector(".button-turn");
const image = document.querySelector(".header-background-img");
const weather = document.querySelector(".weather");
const search = document.querySelector('.header-input-search');

if(!drag.supported) {
  document.querySelector('#drag-area').style['-webkit-app-region'] = 'drag';
}

close.addEventListener("click", (e) => {
	const window = remote.getCurrentWindow();
	window.close();
});

expand.addEventListener("click", (e) => {
	const window = remote.getCurrentWindow();
	if (!window.isMaximized()) {
		window.maximize();
	} else {
		window.unmaximize();
	}
});

turn.addEventListener("click", (e) => {
	const window = remote.getCurrentWindow();
	window.minimize();
});

image.addEventListener('load', function() {
	const vibrant = new Vibrant(image);
	const swatches = vibrant.swatches();
	const gradient = [];

	for (let swatch in swatches) {
		if (swatches[swatch]) {
			prettifyRgb(gradient, swatches[swatch].getRgb());
		}
	}

	weather.style.background = getGradient(gradient);
});

search.addEventListener('keyup', (e) => {
	if (e.keyCode === 13 && !!search.value) {
		ipcRenderer.send('asynchronous-message', search.value);

		search.value = "";
	}
});

ipcRenderer.on('asynchronous-reply', (event, arg) => {
	console.log(arg);
});

function prettifyRgb(gradient, rgb) {
	const color = 'rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',.5' + ')';
	gradient.push(color);
}

function getGradient(gradient) {
	let style = 'linear-gradient(90deg';

	for (let i = 0; i < gradient.length; i++) {
		style += ',' + gradient[i];
	}

	style += ')';

	return style;
}


