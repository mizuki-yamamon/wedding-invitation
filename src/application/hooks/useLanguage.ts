import { useState } from 'react'
import type { Language } from '@/domain/types/wedding'

export function useLanguage(initial: Language = 'en') {
  const [language, setLanguage] = useState<Language>(initial)
  return { language, setLanguage } as const
}
