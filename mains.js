const {
  app,
  BrowserWindow
} = require('electron')


let win

function createWindow() {
  win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    width: 852,
    // width: 1252,
    height: 700,
    frame: true,
    resizable: false,
    maximizable: false,
    darkTheme: true,
    icon: "./files/icon.png",
    autoHideMenuBar: true,
    //transparent: true
  })

  win.loadFile('index.html')

  // win.webContents.openDevTools()

  win.setMenu(null);

  win.on('closed', () => {
    win = null
  })
}




app.on('ready', createWindow)


app.on('window-all-closed', () => {
  app.quit()
})

app.on('activate', () => {
  createWindow()
})
