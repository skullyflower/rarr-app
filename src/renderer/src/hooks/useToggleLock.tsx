import { getIsLocked, lockLog } from '@renderer/scripts/logsAPI.mjs'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const useToggleLock = (): {
  toggleLock: () => void
  isLocked: boolean
  setIsLocked: (value: boolean) => void
} => {
  const [isLocked, setIsLocked] = useState<boolean>(true)
  const navigate = useNavigate()

  useEffect(() => {
    getIsLocked().then((res) => {
      setIsLocked(res)
    })
  }, [])

  const toggleLock = (): void => {
    if (!isLocked) {
      lockLog().then((res) => {
        if (!res) {
          navigate('unlock')
        }
        setIsLocked(res)
      })
    } else {
      navigate('unlock')
    }
  }
  return { toggleLock, isLocked, setIsLocked }
}
export default useToggleLock
