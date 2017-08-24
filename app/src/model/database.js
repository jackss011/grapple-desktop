import firebase from 'firebase'


class Database {
    constructor() {
        this._onProjects = null
        this._uidCache = null

        this.submitProject = this.submitProject.bind(this)
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

    get uid() { return firebase.auth().currentUser.uid }

    get uidCache() { return this._uidCache}

    get hasUser() { return firebase.auth().currentUser != null }

    ref(path) { return firebase.database().ref(`users/${this.uidCache}/${path}`) }


    // PROJECTS

    get onProjects() { return this._onProjects }

    set onProjects(callback) {
        if(callback && typeof callback !== 'function') throw 'callback must be a function'
        this._onProjects = callback
    }

    submitProject(name, description) {
        if(this.hasUser) {
            let newProject = firebase.database()
                .ref(`users/${this.uid}/projects`).push()
            newProject.set({name, description})

            return newProject.key
        }
    }

    deleteProject(uid) {
        if(this.hasUser) {
            return this.ref(`projects/${uid}`).remove()
        }
    }
}

export default Database
