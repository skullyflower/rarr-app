import {
  app,
  Menu,
  MenuItem,
  shell,
  BrowserWindow,
  ipcMain,
  nativeTheme,
  safeStorage
} from 'electron'

import { join } from 'path'
import { electronApp, optimizer } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import fs from 'node:fs'
import { registerRoute } from '../lib/electron-router-dom'
import path from 'node:path'
import {
  deletLogFile,
  getLogList,
  getLogFilePath,
  readFromLog,
  resetLog,
  writeToLog
} from './logStuff'
import { hashfile, isLocked, lock, unlock } from './lockStuff'

export const canSafeStore = safeStorage.isEncryptionAvailable()

//
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
      sandbox: false,
      spellcheck: true
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  mainWindow.webContents.on('context-menu', (_event, params) => {
    const menu = new Menu()

    // Add each spelling suggestion
    for (const suggestion of params.dictionarySuggestions) {
      menu.append(
        new MenuItem({
          label: suggestion,
          click: (): void => mainWindow.webContents.replaceMisspelling(suggestion)
        })
      )
    }

    menu.popup()
  })
  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  // if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
  //   mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  // } else {
  //   mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  // }
  registerRoute({
    id: 'main',
    browserWindow: mainWindow,
    htmlFile: path.join(__dirname, '../renderer/index.html')
  })
}

function createPrintWindow(logFile: string): void {
  let child: BrowserWindow | undefined = new BrowserWindow({ show: false, autoHideMenuBar: true })
  child.loadFile(logFile)
  const titleDate = logFile.match(/\d{4}-\d{1,2}-\d{1,2}/)
  child.once('ready-to-show', () => {
    child?.show()
    child?.setTitle(`RARR-${titleDate}`)
    child?.webContents.print({}, (success) => {
      child?.close()
      return success
    })
  })
  child.on('closed', () => {
    child = undefined // Remove the reference
  })
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

  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

ipcMain.handle('has-lock', (): boolean => {
  return fs.existsSync(hashfile)
})

ipcMain.handle('is-locked', (): boolean => {
  return isLocked()
})

ipcMain.handle('lock', (): boolean => {
  return lock()
})

ipcMain.handle('unlock', (_event, user, password): boolean => {
  return unlock(user, password)
})

ipcMain.handle('write-log', (_event, message, fileName): boolean => {
  return writeToLog(message, fileName)
})

ipcMain.handle('read-log', (_event, fileName): string => {
  return readFromLog(fileName)
})

ipcMain.handle('get-log-list', (): string[] => {
  return getLogList()
})

ipcMain.handle('delete-log', (_event, fileName): boolean => {
  return deletLogFile(fileName)
})

ipcMain.handle('reset-log', (): boolean => {
  return resetLog()
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

ipcMain.handle('print-page', (_event, fileName) => {
  if (fileName) {
    const logFile = getLogFilePath(fileName)
    createPrintWindow(logFile)
  }
})
