export type Language = 'en' | 'jp'

export interface ContentText {
  tapToOpen: string
  names: string
  date: string
  location: string
  messageTitle: string
  messageBody: string
  rsvpButton: string
  aiAssistantTitle: string
  aiAssistantPlaceholder: string
  aiAssistantWelcome: string
}

export interface Message {
  role: 'user' | 'model'
  text: string
}
