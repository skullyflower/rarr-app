import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  writeLog: (message: string): Promise<boolean> => {
    return ipcRenderer.invoke('write-log', message)
  },
  getLogList: (): Promise<string[]> => {
    return ipcRenderer.invoke('get-log-list')
  },
  readLog: (fileName: string): Promise<string> => {
    return ipcRenderer.invoke('read-log', fileName)
  },
  toggleDarkMode: (): Promise<boolean> => {
    return ipcRenderer.invoke('dark-mode:toggle')
  },
  setSystemTheme: (): Promise<void> => {
    return ipcRenderer.invoke('dark-mode:system')
  }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
