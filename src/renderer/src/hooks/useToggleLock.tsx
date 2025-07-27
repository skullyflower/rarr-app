import { getHasLock, getIsLocked, lockLog } from '@renderer/scripts/logsAPI.mjs'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useLocked from '@renderer/scripts/zustand.mjs'

const useToggleLock = (): {
  toggleLock: () => void
  isLocked: boolean
  hasLock: boolean
  setIsLocked: (value: boolean) => void
} => {
  const { locked, setLocked } = useLocked((state) => state)
  const [hasLock, setHasLock] = useState<boolean>(false)
  const navigate = useNavigate()
  useEffect(() => {
    getHasLock().then((res) => {
      setHasLock(res)
    })
  })

  useEffect(() => {
    getIsLocked().then((res) => {
      setLocked(res)
    })
  }, [hasLock, setLocked])

  const toggleLock = (): void => {
    if (!locked) {
      lockLog().then((res) => {
        if (res) {
          setLocked(res)
        } else {
          //if it's still unlocked because there is no hash file.
          // go to sign in page to create lock file.
          navigate('unlock')
        }
      })
    } else {
      navigate('unlock')
    }
  }
  return { toggleLock, isLocked: locked, hasLock, setIsLocked: setLocked }
}
export default useToggleLock
