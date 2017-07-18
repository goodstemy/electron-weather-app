const electron = require('electron');
const path = require('path');
const url = require('url');
const weather = require('weather-js');
const GoogleImages = require('google-images');
const drag = require('electron-drag');

const {ipcMain} = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const client = new GoogleImages('001462481511008949931:vvhugxvyp6u', 'AIzaSyBSljMrRqro1HpWZobmnAHddw2bNtZOyMU');

require('electron-reload')(__dirname, {
	electron: require('electron-prebuilt')
});

let mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 800, 
		height: 600, 
		icon: path.join(__dirname, 'static/images/cloud.png'),
		frame: false,
	});

	mainWindow.setMenu(null);

	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true,
	}));

	mainWindow.webContents.openDevTools()

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

	mainWindow.on('closed', () => {
		mainWindow = null;
	});
}

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
