export default class Validate {
    static projectName(name) {
        if(typeof name ==! 'string') return 'Invalid input type'
        if(name.length <= 0) return 'Project name can\'t be null'
        if(name.length >= 15) return 'Project name is too long'

        return null
    }
}
