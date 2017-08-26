const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const ipcMain = electron.ipcMain
const LoginWindow = require('./src/electron/login-window')
const shortcuts = electron.globalShortcut

const path = require('path')
const url = require('url')

const LocalStorage = require('./src/electron/local-storage')
const storage = new LocalStorage()

let mainWindow = null
let loginWindow = null

function createWindow () {
    let [x, y, w, h] = retrieveWindowPos()

    mainWindow = new BrowserWindow({x: x, y: y, width: w, height: h, title: "Grapple"})
    mainWindow.setMenu(null)
    mainWindow.on('closed', () => mainWindow = null)
    mainWindow.on('resize', () => saveWindowPos(mainWindow))
    mainWindow.on('move', () => saveWindowPos(mainWindow))

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }))

    shortcuts.register('CmdOrCtrl+B', () => mainWindow.webContents.openDevTools())
    loginWindow = new LoginWindow(mainWindow, onLoginResult)
}

function onLoginResult(token) {
    if(token === "error") {
        console.log("error during login")
    } else {
        mainWindow.webContents.send('login-popup-token', token)
    }
}

function saveWindowPos(window) {
    let b = window.getBounds();
    console.log("saving:", b);
    storage.saveAll({lw_x: b.x, lw_y: b.y, lw_w: b.width, lw_h: b.height})
}

function retrieveWindowPos() {
    let b =storage.getAll('lw_x', 'lw_y', 'lw_w', 'lw_h')
    console.log("get:", b);
    return b
}


// IPC SETUP
ipcMain.on('login-popup', (event) => {
    loginWindow.show()
})


// APP SETUP
app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
