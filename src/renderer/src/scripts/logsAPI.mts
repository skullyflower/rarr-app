declare global {
  interface Window {
    api:
      | {
          getLogList: () => Promise<string[]>
          readLog: (fileName: string) => Promise<string>
          writeLog: (text: string, fileName?: string) => Promise<boolean>
          print: (fileName?: string) => Promise<boolean>
          deleteLog: (toDelete: string) => Promise<boolean>
          isLocked: () => Promise<boolean>
          lockLog: () => Promise<boolean>
          unlockLog: (user: string, password: string) => Promise<boolean>
          reset: () => Promise<boolean>
        }
      | undefined
  }
}

const browser = window ?? new Window()
const getStoredObj = (): Record<string, string> =>
  JSON.parse(browser.localStorage.getItem('rarr_log') || '{}')

const saveText = (text: string, valueKey?: string): boolean => {
  if (!text) return false
  const date = new Date()

  const storeKey =
    valueKey !== undefined
      ? valueKey
      : `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

  const storedObject = getStoredObj()
  const oldValue = storedObject[storeKey] ?? ''

  const newvalue = valueKey ? text : `${oldValue}__________________________________\n${text}`
  if (newvalue) {
    browser.localStorage.setItem(
      'rarr_log',
      JSON.stringify({ ...storedObject, [storeKey]: newvalue })
    )
    return true
  }
  return false
}

const getLogs = (): string[] => {
  const rarrObj = getStoredObj()
  return Object.keys(rarrObj)
}

const getLogsContent = (logDate: string): string => {
  const rarrObj = getStoredObj()
  if (rarrObj[logDate]) {
    return rarrObj[logDate]
  }
  return ''
}

const deleteWebLog = (logDate: string): boolean => {
  const rarrObj = getStoredObj()
  if (rarrObj && rarrObj[logDate]) {
    //do something and return true
    return true
  }
  return false
}

export const getLogList = (): Promise<string[]> => {
  if (window.api) return window.api?.getLogList()
  return Promise.resolve(getLogs())
}

export const readLog = (fileName: string): Promise<string> => {
  if (window.api) return window.api?.readLog(fileName)
  return Promise.resolve(getLogsContent(fileName))
}

export const writeLog = (text: string, fileName?: string): Promise<boolean> => {
  if (window.api) return window.api?.writeLog(text, fileName)
  const webSaved = saveText(text, fileName)
  return Promise.resolve(webSaved)
}

export const printLog = (fileName?: string): Promise<boolean> => {
  if (window.api) return window.api?.print(fileName)
  window.print()
  return Promise.resolve(true)
}

// unfinished business below
export const deleteLog = (toDelete: string): Promise<boolean> => {
  if (window.api) return window.api?.deleteLog(toDelete)
  return Promise.resolve(deleteWebLog(toDelete))
}

export const getIsLocked = (): Promise<boolean> => {
  if (window.api) return window.api?.isLocked()
  return Promise.resolve(false)
}

export const lockLog = (): Promise<boolean> => {
  if (window.api) return window.api.lockLog()
  return Promise.resolve(false)
}

export const unlockLog = (user: string, password: string): Promise<boolean> => {
  if (window.api) return window.api.unlockLog(user, password)
  return Promise.resolve(false)
}

export const resetLogs = (): Promise<boolean> => {
  if (window.api) return window.api.reset()
  return Promise.resolve(false)
}

export const toggleFontMode = (): void => {
  const usePlainFonts = JSON.parse(window.localStorage.getItem('UseRegFonts') || 'false')
  window.localStorage.setItem('UseRegFonts', JSON.stringify(!usePlainFonts))
  window.location.reload()
}
