const { app, BrowserWindow } = require('electron')

function createWindow() 
{
	const win = new BrowserWindow ({
			width: 700,
			height: 500,
			//resizable: false,
	});

	win.loadFile("src/index.html");
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit()
})
