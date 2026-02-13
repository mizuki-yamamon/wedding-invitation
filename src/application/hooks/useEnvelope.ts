import { useState, useCallback } from 'react'

export function useEnvelope() {
  const [isOpened, setIsOpened] = useState(false)

  const open = useCallback(() => {
    setIsOpened(true)
  }, [])

  return { isOpened, open } as const
}
