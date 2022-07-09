const electron = require('electron');
const { app, BrowserWindow, ipcMain } = require('electron');
const Tray = electron.Tray



app.on('ready', () => {
    const appIcon = new Tray(__dirname+'/logo.png');

    let mainWindow = new BrowserWindow({
        width: 900,
        height: 600,
        icon: __dirname+'/logo.png'
        
    });

    mainWindow.loadURL(`file://${__dirname}/app/index.html`);

    
});

app.on('fechar-janelas', () => {

    app.quit();

});
