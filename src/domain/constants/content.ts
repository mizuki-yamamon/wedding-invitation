import type { ContentText, Language } from '@/domain/types/wedding'

export const CONTENT: Record<Language, ContentText> = {
  en: {
    tapToOpen: 'Tap to Open',
    names: 'Olivia & James',
    date: 'October 24, 2024',
    location: "St. Patrick's Cathedral, New York",
    messageTitle: 'You are invited',
    messageBody:
      'Together with our families, we joyfully invite you to celebrate our wedding. We look forward to sharing this special day with you.',
    rsvpButton: 'RSVP Now',
    aiAssistantTitle: 'Wedding Assistant',
    aiAssistantPlaceholder: 'Ask about dress code, gift ideas...',
    aiAssistantWelcome:
      "Hello! I'm the wedding AI assistant. Can I help you write a message or answer questions about the venue?",
  },
  jp: {
    tapToOpen: 'タップして開封',
    names: '佐藤 健太 & 高橋 美咲',
    date: '2024年10月24日',
    location: 'グランドハイアット東京',
    messageTitle: '結婚式のご案内',
    messageBody:
      '謹啓\n皆様におかれましては清秋の候、ますますご清祥のこととお慶び申し上げます。\nこのたび私たちは結婚式を挙げることになりました。\nつきましては、日頃お世話になっている皆様に感謝の気持ちを込めて、ささやかな小宴を催したく存じます。',
    rsvpButton: '出欠確認',
    aiAssistantTitle: 'ウェディングアシスタント',
    aiAssistantPlaceholder: '服装やマナーについて聞く...',
    aiAssistantWelcome:
      'こんにちは！ウェディングAIアシスタントです。お祝いのメッセージの作成やお式に関する質問にお答えします。',
  },
}
