import firebase from 'firebase'


class Database {
    constructor() {
        this._onProjects = null
        this._uidCache = null
    }

    initialize() {
        firebase.auth().onAuthStateChanged(user => {
            
            if(user) {
                this._uidCache = user && user.uid

                this._projectsListener = this.ref('projects').on('value', snapshot => {
                    if(this.onProjects) this.onProjects(snapshot.val())
                })
            }
            else if(this.uidCache) {
                this.ref('projects').off('value', this._projectsListener)
            }
        })
    }

    get onProjects() { return this._onProjects }

    set onProjects(callback) {
        if(callback && typeof callback !== 'function') throw 'callback must be a function'
        this._onProjects = callback
    }

    get uid() { return firebase.auth().currentUser.uid }

    get uidCache() { return this._uidCache}

    ref(path) { return firebase.database().ref(`users/${this.uidCache}/${path}`) }

    addProject(name, description) {
        // firebase.database().ref(`users/${this.uid}/projects`)
        //     .push().set({name, description})
    }
}

export default Database