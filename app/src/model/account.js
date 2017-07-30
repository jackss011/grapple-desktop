import firebase from 'firebase'
import config from './firebase-config'
import {ipcRenderer} from 'electron'

class Account {
    constructor() {
        this._onAuthStateChanged = null

        ipcRenderer.on('login-popup-token', (event, token) => {
            if(token) {
                this.signInWithToken(token) //TODO this is bad
            }
        })
    }

    set onAuthStateChanged(callback) {
        if(callback && typeof callback !== 'function') throw 'callback must be a function'
        this._onAuthStateChanged = callback
    }

    initialize() {
        firebase.initializeApp(config)

        firebase.auth().onAuthStateChanged(user => {
            if(this._onAuthStateChanged)
                this._onAuthStateChanged(this.makeUserInfo(user))
        });
    }

    signInWithToken(token) {
        let credential = firebase.auth.GoogleAuthProvider.credential(token, null);

        firebase.auth().signInWithCredential(credential).catch(error => {
            console.log(error) //TODO handle token error
        });
    }

    showLoginPopup() {
        ipcRenderer.send('login-popup')
    }

    signOut() {
        firebase.auth().signOut()
    }

    isSignedIn() {
        return firebase.auth().currentUser != null
    }

    makeUserInfo(user) {
        return user ?
            {displayName: user.displayName, photoURL: user.photoURL}
            : null
    }
}

export default Account
