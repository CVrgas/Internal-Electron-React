const { app, BrowserWindow, ipcMain } = require("electron"); // electron
const path = require("path");
const {
	checkIfDatabaseExists,
	createDatabase,
	getCoinsBy,
	saveCoin,
	getAllCoins,
	init,
} = require("./repository.cjs");
const CoinController = require("./Controller/coinController.cjs");

let mainWindow;

// Initializing the Electron Window
const createWindow = () => {
	mainWindow = new BrowserWindow({
		width: 1600, // width of window
		height: 1200, // height of window
		webPreferences: {
			preload: path.join(app.getAppPath(), "./public/preload.js"),
			contextIsolation: true,
		},
	});

	// Loading a webpage inside the electron window we just created
	mainWindow.loadURL("http://localhost:5173/");
};

// When the app is ready to load
app.whenReady().then(async () => {
	await createWindow();
	await init();
});

// Exiting the app
app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

// Activating the app
app.on("activate", () => {
	if (mainWindow.getAllWindows().length === 0) {
		createWindow();
	}
});

// Logging any exceptions

ipcMain.handle("get-all-coins", async (e, { option }) => {
	return await CoinController.getAll({ option });
});

ipcMain.handle("save-coin", async (e, coin) => {
	return await CoinController.Create({ coin });
});

ipcMain.handle("get-coins-By", async (e, id) => {
	return await CoinController.getById({ id: id });
});
