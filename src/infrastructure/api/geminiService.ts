import { GoogleGenAI } from '@google/genai'
import type { Language } from '@/domain/types/wedding'

const apiKey = (process.env.GEMINI_API_KEY as string) || ''
const ai = new GoogleGenAI({ apiKey })

const SYSTEM_INSTRUCTIONS: Record<Language, string> = {
  jp: 'あなたは結婚式のゲスト用AIアシスタントです。非常に丁寧で上品な日本語を使ってください。ゲストからの質問（服装、マナー、お祝いの言葉の作成など）に答えてください。',
  en: 'You are a helpful AI assistant for wedding guests. Use elegant and polite English. Help guests with questions about dress codes, etiquette, or writing congratulatory messages.',
}

const ERROR_MESSAGES: Record<Language, { noKey: string; generic: string }> = {
  jp: {
    noKey: 'APIキーが設定されていません。',
    generic: 'エラーが発生しました。もう一度お試しください。',
  },
  en: {
    noKey: 'API Key is missing.',
    generic: 'An error occurred. Please try again.',
  },
}

const FALLBACK_MESSAGES: Record<Language, string> = {
  jp: '申し訳ありません、応答できませんでした。',
  en: 'I apologize, I could not generate a response.',
}

export async function generateWeddingResponse(
  prompt: string,
  language: Language,
): Promise<string> {
  if (!apiKey) {
    return ERROR_MESSAGES[language].noKey
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTIONS[language],
      },
    })

    return response.text || FALLBACK_MESSAGES[language]
  } catch (error) {
    console.error('Gemini API Error:', error)
    return ERROR_MESSAGES[language].generic
  }
}
