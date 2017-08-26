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
    let {x, y, width, height} = retrieveWindowPos()

    mainWindow = new BrowserWindow({x, y, width, height, title: "Grapple"})
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
    storage.save('window_bounds', window.getBounds())
}

function retrieveWindowPos() {
    return storage.get('window_bounds') || 0
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
