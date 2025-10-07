import { useEffect } from 'react'

interface keyCapureProps {
  key: string
  combo?: boolean
  callback: () => void
}

function useKeyCapture({ key, combo, callback }: keyCapureProps): void {
  function handleKeyDown(event: KeyboardEvent): void {
    if (
      (combo && (event.ctrlKey || event.metaKey) && event.key === key) ||
      (!combo && event.key === key)
    ) {
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
