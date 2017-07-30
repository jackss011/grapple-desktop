import fs from 'fs'
import path from 'path'

const homedir = require('os').homedir()
const folderName = 'grapple'


module.exports = class LocalStorage {
    constructor() {
        this.data = {};
        this.saving = false;
        this.needsSave = false;
        this.loadStoreFile();
    }

    loadStoreFile() {
        try{
            let content = fs.readFileSync(this.storePath)
            if(content) {
                try {
                    this.data = JSON.parse(content);
                }
                catch(err) {console.log('bad-format')}
            }
        } catch(err) {}
    }

    saveStoreFile() {
        if(!this.saving) {
            this.saving = true;
            fs.writeFile(this.storePath, JSON.stringify(this.data), err => {
                this.saving = false;
                if(err) {
                    console.log(err);
                }
                if(this.needsSave) {
                    this.needsSave = false;
                    this.saveStoreFile();
                }
            })
        } else {
            this.needsSave = true;
        }
    }

    get storePath() { return path.join(__dirname, 'store.json') }

    save(key, value) {
        let obj = {};
        obj[key] = value;
        this.saveAll(obj)
    }

    saveAll(obj) {
        Object.assign(this.data, obj)
        this.saveStoreFile()
    }

    get(key) { return this.data[key] }

    getAll(...keys) {
        return keys.map(k => this.data[k])
    }
}
