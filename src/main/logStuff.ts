import { app, safeStorage } from 'electron'
import { join } from 'path'
import fs from 'node:fs'
import { canSafeStore } from './index'

const logFilePattern = new RegExp(/^\d{4}-\d{1,2}-\d{1,2}\.txt$/)
export const logDir = join(app.getPath('home'), '.RARRLog')
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir)
}

export function getLogFilePath(fileName: string | undefined): string {
  const date = new Date()

  const fileNameString =
    fileName !== undefined
      ? fileName
      : `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  return join(logDir, `${fileNameString}.txt`)
}

export function writeToLog(message: string, fileName?: string): boolean {
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

export function getLogList(): string[] {
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

export function readFromLog(fileName: string): string {
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

export function deletLogFile(fileName: string): boolean {
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

export function resetLog(): boolean {
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
