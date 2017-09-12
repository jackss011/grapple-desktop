import $ from 'jquery'
import chokidar from 'chokidar'
import path from 'path'

function reloadCss() {
    console.log('Reloading css...')
    $('#css-link').attr('href', './styles/main.css?date=' + Date.now())
}

module.exports = function cssWatcher(dir, pathTo) {
    chokidar.watch(path.join(dir, pathTo), { ignoreInitial: true })
        .on('all', () => reloadCss())
}
