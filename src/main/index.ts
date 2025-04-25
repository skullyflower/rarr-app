import { app, shell, BrowserWindow, ipcMain, nativeTheme } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import fs from 'node:fs'

const logDir = join(app.getPath('home'), 'Library', 'RARRLog')

function writeToLog(message: string): boolean {
  const now = new Date()
  const stringToWrite = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}\n${message}\n\n`
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir)
  }
  const logFile = join(logDir, `${now.getFullYear()}${now.getMonth() + 1}${now.getDate()}.txt`)
  try {
    if (fs.existsSync(logFile)) {
      fs.appendFileSync(logFile, stringToWrite)
    } else {
      fs.writeFileSync(logFile, stringToWrite, { encoding: 'utf8', flag: 'w' })
    }
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}

function getLogList(): string[] {
  if (fs.existsSync(logDir)) {
    const files = fs.readdirSync(logDir)
    return files
      .filter((file) => file.endsWith('.txt'))
      .map((file) => file.replace('.txt', ''))
      .sort((a, b) => {
        const dateA = new Date(a)
        const dateB = new Date(b)
        return dateB.getTime() - dateA.getTime()
      })
  }
  return []
}

function readFromLog(fileName: string): string {
  const logFile = join(logDir, fileName)
  if (fs.existsSync(logFile)) {
    return fs.readFileSync(logFile, { encoding: 'utf8' })
  } else {
    return ''
  }
}

function createWindow(): void {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 785,
    height: 775,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  ipcMain.handle('write-log', (_event, message): boolean => {
    return writeToLog(message)
  })

  ipcMain.handle('read-log', (_event, fileName): string => {
    return readFromLog(fileName)
  })

  ipcMain.handle('get-log-list', (): string[] => {
    return getLogList()
  })

  ipcMain.handle('dark-mode:toggle', () => {
    if (nativeTheme.shouldUseDarkColors) {
      nativeTheme.themeSource = 'light'
    } else {
      nativeTheme.themeSource = 'dark'
    }
    return nativeTheme.shouldUseDarkColors
  })

  ipcMain.handle('dark-mode:system', () => {
    nativeTheme.themeSource = 'system'
  })

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
