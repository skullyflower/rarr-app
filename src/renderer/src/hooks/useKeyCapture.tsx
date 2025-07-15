import { useEffect } from 'react'

function useKeyCapture({ key, callback }: { key: string; callback: () => void }): void {
  function handleKeyDown(event: KeyboardEvent): void {
    if (event.key === key) {
      callback()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return (): void => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [key, callback])
}

export default useKeyCapture
