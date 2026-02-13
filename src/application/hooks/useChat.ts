import { useState, useCallback, useRef } from 'react'
import type { Message, Language } from '@/domain/types/wedding'
import { CONTENT } from '@/domain/constants/content'
import { generateWeddingResponse } from '@/infrastructure/api/geminiService'

export function useChat(language: Language) {
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const initialized = useRef(false)

  const initialize = useCallback(() => {
    if (!initialized.current) {
      setMessages([{ role: 'model', text: CONTENT[language].aiAssistantWelcome }])
      initialized.current = true
    }
  }, [language])

  const sendMessage = useCallback(
    async (text: string) => {
      if (!text.trim() || isLoading) return

      setMessages((prev) => [...prev, { role: 'user', text }])
      setIsLoading(true)

      const responseText = await generateWeddingResponse(text, language)

      setMessages((prev) => [...prev, { role: 'model', text: responseText }])
      setIsLoading(false)
    },
    [isLoading, language],
  )

  return { messages, isLoading, initialize, sendMessage } as const
}
