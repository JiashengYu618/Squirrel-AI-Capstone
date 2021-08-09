const { app, BrowserWindow,Menu } = require("electron");
let win = null;
function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      nodeIntegration: true,// integrate Nodejs or not
      contextIsolation: true
    },
  });
  Menu.setApplicationMenu(null);
  win.webContents.openDevTools();
  win.loadFile("index.html");
}
app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
