(function() {

const {ipcRenderer} = require('electron');
const drag = require('electron-drag');
const remote = require('electron').remote;

const clear = drag('#drag-area');

if(!drag.supported) {
  document.querySelector('#drag-area').style['-webkit-app-region'] = 'drag';
}

const close = document.querySelector(".button-close");
const expand = document.querySelector(".button-close");
const turn = document.querySelector(".button-turn");

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

const image = document.querySelector(".header-background-img");
const weather = document.querySelector(".weather");

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

})();
// img.addEventListener('load', function() {
	// var vibrant = new Vibrant(img);
	// var swatches = vibrant.swatches();
	// console.log(swatches);
// });

// const button = document.getElementById('button');
// const cityName = document.getElementById('city-name');
// const output = document.getElementById('output');
// const city = document.getElementById('city');
// const bg = document.getElementById('bg');

// button.addEventListener('click', () => {
// 	ipcRenderer.send('asynchronous-message', cityName.value);
// });

// cityName.addEventListener('keyup', (event) => {
// 	if (event.keyCode === 13) {
// 		ipcRenderer.send('asynchronous-message', cityName.value);

// 		cityName.value = "";
// 		city.style.opacity = 0;
// 		output.style.opacity = 0;
// 	}
// });

// ipcRenderer.on('asynchronous-reply', (event, arg) => {
// 	console.log(arg);

// 	if (!!arg.res[0]) {
// 		city.innerHTML = arg.res[0].current.observationpoint + ":"
// 		output.innerHTML = arg.res[0].current.temperature + "℃"

// 		city.style.opacity = 1;
// 		output.style.opacity = 1;
// 		bg.style.backgroundImage = 'url("' + arg.img[0].url + '")'
// 	} else {
// 		output.innerHTML = "Can not found city with name " + cityName.value
// 	}
// });
