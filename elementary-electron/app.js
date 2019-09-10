var electron = require('electron');

electron.app.on('ready', () => {
    var mainWin = new electron.BrowserWindow({width: 600, height: 800});
    mainWin.loadURL('file:///'+__dirname+'/index.html');
});