import { safeStorage } from 'electron'
import { join } from 'path'
import fs from 'node:fs'
import { createHash } from 'node:crypto'
import { canSafeStore } from './index'
import { logDir } from './logStuff'

export const hashfile = join(logDir, '.lock.txt')
let locked = true

export const getSavedHash = (): string | false =>
  fs.existsSync(hashfile) && fs.readFileSync(hashfile, 'utf8')

export function isLocked(): boolean {
  return fs.existsSync(hashfile) && locked // returns locked if there is a hash file
}

export function lock(): boolean {
  locked = fs.existsSync(hashfile)
  return locked
}

export function unlock(user: string, password: string): boolean {
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
