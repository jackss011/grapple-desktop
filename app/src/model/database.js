import firebase from 'firebase'


class Database {
    constructor() {}

    get uid() { return firebase.auth().currentUser && firebase.auth().currentUser.uid }

    addProject(name, description) {
        console.log(this.uid)
    }
}

export default Database