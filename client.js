const {ipcRenderer} = require('electron');

const button = document.getElementById('button');
const cityName = document.getElementById('city-name');
const output = document.getElementById('output');
const city = document.getElementById('city');
const bg = document.getElementById('bg');


button.addEventListener('click', () => {
	ipcRenderer.send('asynchronous-message', cityName.value);
});

cityName.addEventListener('keyup', (event) => {
	if (event.keyCode === 13) {
		ipcRenderer.send('asynchronous-message', cityName.value);

		cityName.value = "";
		city.style.opacity = 0;
		output.style.opacity = 0;
	}
});

// ipcRenderer.send('asynchronous-message', 'go');

ipcRenderer.on('asynchronous-reply', (event, arg) => {
	console.log(arg);

	if (!!arg.res[0]) {
		city.innerHTML = arg.res[0].current.observationpoint + ":"
		output.innerHTML = arg.res[0].current.temperature + "℃"

		city.style.opacity = 1;
		output.style.opacity = 1;
		bg.style.backgroundImage = 'url("' + arg.img[0].url + '")'
	} else {
		output.innerHTML = "Can not found city with name " + cityName.value
	}
});