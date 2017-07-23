const electron = require('electron');
const path = require('path');
const url = require('url');
const weather = require('weather-js');
const GoogleImages = require('google-images');

const {ipcMain} = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const client = new GoogleImages('001462481511008949931:vvhugxvyp6u', 'AIzaSyBSljMrRqro1HpWZobmnAHddw2bNtZOyMU');

let mainWindow;

// Only for dev
require('electron-reload')(__dirname, {
	electron: require('electron-prebuilt')
});

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (mainWindow === null) {
		createWindow();
	}
});

ipcMain.on('asynchronous-message', (event, arg) => {
	weather.find({search: arg, degreeType: 'C'}, (err, result) => {
		if (err) console.log(err);

		client.search(arg)
			.then(images => {
				event.sender.send('asynchronous-reply', {res: result, img: images})
			})
			.catch(err => {
				console.log(err);
			});
		});
});

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 800, 
		height: 600, 
		icon: path.join(__dirname, 'public/img/cloud.png'),
		frame: false,
		minHeight: 500,
		minWidth: 400,
	});

	mainWindow.setMenu(null);

	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true,
	}));

	mainWindow.webContents.openDevTools();

	mainWindow.on('closed', () => {
		mainWindow = null;
	});
}