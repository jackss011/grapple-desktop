const BrowserWindow = require('electron').BrowserWindow
const url = require('url')
const path = require('path')
const express = require('express')
const server = express()

module.exports = class LoginWindow {
    constructor(parent, tokenCallback) {
        this.window = null
        this.parent = parent
        this.tokenCallback = tokenCallback
        this._startServer(this._onTokenReceived.bind(this))
    }

    show() {
        this.window = new BrowserWindow({
            width: 350, 
            height: 500, 
            parent: this.parent, 
            modal: true, 
            title: "Sign in"
        })
        
        //this.window.webContents.openDevTools()
        this.window.setMenu(null)
        this.window.on('closed', () => this.window = null)
        this.window.loadURL(url.format({
          pathname: 'localhost:3001/login.html',
          protocol: 'http',
          slashes: true
        }))
    }

    destroy() {
        if(this.window) {
            this.window.destroy()
            this.window = null
        }
    }

    _startServer(callback) {
        server.listen(3001)
        server.use('/', express.static(path.join(__dirname, '../../express')))
        server.get('/login/:token', (req, res) => {
            callback(req.params.token)
            res.send('')
        })
    }

    _onTokenReceived(token) {
        if(token === "error") {
            console.log("error during login")
        } else {
            this.destroy()
            this.tokenCallback(token)
        }
    }
}
