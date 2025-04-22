import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      writeLog: (message: string) => Promise<boolean>
      readLog: (fileName: string) => Promise<string>
      toggleDarkMode: () => Promise<boolean>
      setSystemTheme: () => Promise<void>
    }
  }
}
