const { app, BrowserWindow, Tray } = require("electron");
const windowStateKeeper = require("electron-window-state");
const platform = require("electron-platform");
// TODO: Implement a store to save notes
// const Store = require('electron-store');
// const store = new Store();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindowState = null;
let tray = null;
let window;
let url;

if (process.env.NODE_ENV === "DEV") {
  url = "http://localhost:8888/";
} else {
  url = `file://${process.cwd()}/dist/index.html`;
}

// Don't show the app in the dock on osx
if (platform.isDarwin) {
  app.dock.hide();
}

function toggleWindow() {
  if (window.isVisible()) {
    window.hide();
  } else {
    window.show();
    window.focus();
  }
}

function createTray() {
  tray = new Tray("./src/assets/tray-icon_24x24.png");
  tray.setToolTip("note-ify");
  tray.on("double-click", toggleWindow);
}

function createWindow() {
  if (!mainWindowState) {
    mainWindowState = windowStateKeeper({
      defaultWidth: 350,
      defaultHeight: 400
    });

    manageWindow();
  } else {
    manageWindow();
  }
}

function manageWindow() {
  // Create the browser window.
  window = new BrowserWindow({
    x: mainWindowState.x,
    y: mainWindowState.y,
    width: mainWindowState.width,
    height: mainWindowState.height,
    titleBarStyle: "hiddenInset"
  });

  // Create icon tray
  createTray();

  // Manage the window state to retain window location and size
  mainWindowState.manage(window);

  // and load the index.html of the app.
  window.loadURL(url);

  // Open the DevTools.
  if (process.env.NODE_ENV === 'DEV') window.webContents.openDevTools();

  // Emitted when the window is closed.
  window.on("closed", () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    window = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (window === null) {
    createWindow();
  }
});
