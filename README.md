# Grapple-*desktop*

A dunno what i'm actually doing jff app.

### Frameworks

Framework | Purpose
--- | ---
Electron  | Desktop framework
React | UI framework
Redux | State management
Gulp | Build tool


### Prerequisites
Install [Node.js](https://nodejs.org/en).



### How to build

##### 1. Install gulp and electron globally
Run in the terminal: `npm install gulp -g` and `npm install electron -g`.

##### 2. Install npm local packages
Run in the terminal: `npm install`.

##### 2. Use gulp
Run `gulp build` to build the application
or run `gulp run` to build **and run** the application.



### Gulp usefull tasks
#### `gulp build`
Builds application files in build subfolder.

#### `gulp run`
Runs `gulp build` and launchs the application through electron.

#### `gulp nodemon`
Runs `gulp run` and watchs for js or html changes to rebuild and
restart the application.

#### `gulp style`
Runs `gulp run` and watchs for sass changes to refresh css only.
The application state is preserved (i.e. the application is not restarted).
