const electron = require('electron');
const path = require('path');
const url = require('url');
const yahooWeather = require('yahoo-weather');
const YQL = require('yql');
const Notification = require('electron-native-notification');

const {ipcMain} = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

// Only for dev
// require('electron-reload')(__dirname, {
// 	electron: require('electron-prebuilt')
// });

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

  const query = new YQL(
    `select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${arg}") and u='c'`);

  query.exec((err, resp) => {
    if (err) {
      // TODO: handle error
      let notification = new Notification('Error', {
        body: `Error: ${err}`,
      });

      return;
    }

    if (!resp.query.results) {
      let notification = new Notification('Error', {
        body: `City ${arg} not found`,
      });

      return;
    }

    return event.sender.send('city-data', resp);
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

	// Only for dev
	// mainWindow.webContents.openDevTools();

	mainWindow.on('closed', () => {
		mainWindow = null;
	});
}