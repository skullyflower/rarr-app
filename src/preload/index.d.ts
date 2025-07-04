import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      writeLog: (message: string, fileName?: string) => Promise<boolean>
      readLog: (fileName: string) => Promise<string>
      deleteLog: (fileName: string) => Promise<boolean>
      getLogList: () => Promise<string[]>
      toggleDarkMode: () => Promise<boolean>
      setSystemTheme: () => Promise<void>
      lockLog: () => Promise<boolean>
      unlockLog: (user: string, password: string) => Promise<boolean>
      isLocked: () => Promise<boolean>
      reset: () => Promise<boolean>
      print: (fileName?: string) => Promise<boolean>
    }
  }
}
