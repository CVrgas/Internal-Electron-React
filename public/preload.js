const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("api", {
	getCoinsBy: ({ id }) => ipcRenderer.invoke("get-coins-By", { id }),
	saveCoin: (coin) => ipcRenderer.invoke("save-coin", coin),
	getAllCoins: ({ option }) => ipcRenderer.invoke("get-all-coins", { option }),
});
