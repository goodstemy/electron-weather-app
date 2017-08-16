const electron = require('electron');
const path = require('path');
const url = require('url');
const yahooWeather = require('yahoo-weather');

const {ipcMain} = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

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

ipcMain.on('city-name', (event, arg) => {
  console.log('server received', arg);

  yahooWeather(arg).then(data => {
    console.log(data.item.forecast);
    return event.sender.send('city-data', data);
  }).catch(err => {
    return event.sender.send('city-error', err);
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
		maxHeight: 500,
		maxWidth: 800,
		center: true,
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