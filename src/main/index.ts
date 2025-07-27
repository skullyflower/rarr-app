import { app, shell, BrowserWindow, ipcMain, nativeTheme, safeStorage } from 'electron'
import { join } from 'path'
import { electronApp, optimizer } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import fs from 'node:fs'
import { createHash } from 'node:crypto'
import { registerRoute } from '../lib/electron-router-dom'
import path from 'node:path'

let locked = true
const canSafeStore = safeStorage.isEncryptionAvailable()

const logDir = join(app.getPath('home'), '.RARRLog')
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir)
}
const logFilePattern = new RegExp(/^\d{4}-\d{1,2}-\d{1,2}\.txt$/)

const hashfile = join(logDir, '.lock.txt')

const getSavedHash = (): string | false =>
  fs.existsSync(hashfile) && fs.readFileSync(hashfile, 'utf8')

function isLocked(): boolean {
  return fs.existsSync(hashfile) && locked // returns locked if there is a hash file
}

function lock(): boolean {
  locked = fs.existsSync(hashfile)
  return locked
}

function unlock(user: string, password: string): boolean {
  const hash = createHash('sha256')
  hash.update(`${user}${password}`)
  const encoded = canSafeStore
    ? safeStorage.encryptString(`${user}${password}`).toString('base64')
    : hash.digest('hex')

  if (fs.existsSync(hashfile)) {
    if (encoded === getSavedHash()) {
      locked = false
    } else {
      console.error('Invalid password')
      locked = true
    }
  } else {
    fs.writeFileSync(hashfile, encoded, 'utf8') //created
    locked = false
  }
  return locked
}

function getLogFilePath(fileName: string | undefined): string {
  const date = new Date()

  const fileNameString =
    fileName !== undefined
      ? fileName
      : `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  return join(logDir, `${fileNameString}.txt`)
}

function writeToLog(message: string, fileName?: string): boolean {
  //console.log('writeToLog', message, fileName)
  const date = new Date()
  const divider = '\n__________________________________\n'
  const stringToWrite = `${message}\n\n`
  const logFile = getLogFilePath(fileName)
  try {
    // append different sections to file
    const appendStyleString = `${divider}${stringToWrite}`
    if (fs.existsSync(logFile) && fileName === undefined) {
      if (canSafeStore) {
        const oldString = fs.readFileSync(logFile, { encoding: 'utf8' })
        const rewriteString = safeStorage.decryptString(Buffer.from(oldString, 'base64'))
        fs.writeFileSync(
          logFile,
          safeStorage.encryptString(`${rewriteString}${appendStyleString}`).toString('base64'),
          { encoding: 'utf8', flag: 'w' }
        )
      } else {
        fs.appendFileSync(logFile, appendStyleString)
      }
    } else {
      const overWriteStyleString = !fileName // new entry
        ? `${date.toLocaleDateString()}${divider}${stringToWrite}`
        : stringToWrite
      // overwrite file with edits.
      fs.writeFileSync(
        logFile,
        canSafeStore
          ? safeStorage.encryptString(overWriteStyleString).toString('base64')
          : overWriteStyleString, // save edits
        { encoding: 'utf8', flag: 'w' }
      )
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
      .filter((file) => logFilePattern.test(file))
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
  const logFile = join(logDir, `${fileName}.txt`)
  if (fs.existsSync(logFile)) {
    const storedValue = fs.readFileSync(logFile, { encoding: 'utf8' })
    return canSafeStore
      ? safeStorage.decryptString(Buffer.from(storedValue, 'base64'))
      : fs.readFileSync(logFile, { encoding: 'utf8' })
  } else {
    return ''
  }
}

function deletLogFile(fileName: string): boolean {
  const logFile = join(logDir, `${fileName}.txt`)
  if (fs.existsSync(logFile)) {
    try {
      fs.unlinkSync(logFile)
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  } else {
    return false
  }
}

function resetLog(): boolean {
  const files = fs.readdirSync(logDir)
  try {
    files.forEach((file) => {
      if (file.endsWith('.txt')) {
        try {
          fs.unlinkSync(join(logDir, file))
        } catch (error) {
          console.error(error)
        }
      }
    })
    return false // === unlocked
  } catch (error) {
    console.error(error)
    return true // still locked
  }
}
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
