import type { Language } from '@/domain/types/wedding'
import { CONTENT } from '@/domain/constants/content'

interface InvitationDetailsProps {
  language: Language
  isVisible: boolean
  onOpenAssistant: () => void
}

export function InvitationDetails({ language, isVisible, onOpenAssistant }: InvitationDetailsProps) {
  const content = CONTENT[language]

  if (!isVisible) return null

  return (
    <div className="w-full max-w-lg mx-auto bg-wedding-paper p-8 md:p-12 shadow-2xl animate-fade-in-up relative">
      {/* Decorative Corner Borders */}
      <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-wedding-gold/30" />
      <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-wedding-gold/30" />
      <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-wedding-gold/30" />
      <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-wedding-gold/30" />

      <div className="text-center space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h2
            className={`text-lg tracking-[0.3em] text-gray-500 uppercase ${
              language === 'jp' ? 'font-jp' : 'font-cinzel'
            }`}
          >
            {content.messageTitle}
          </h2>
        </div>

        {/* Names */}
        <h1
          className={`text-4xl md:text-6xl text-gray-800 ${
            language === 'jp' ? 'font-jp font-bold py-4' : 'font-script py-2'
          }`}
        >
          {content.names}
        </h1>

        {/* Date & Location */}
        <div className="flex flex-col items-center gap-4 py-4 border-t border-b border-gray-100">
          <div
            className={`flex items-center gap-2 text-xl md:text-2xl text-wedding-gold font-medium ${
              language === 'jp' ? 'font-jp' : 'font-cinzel'
            }`}
          >
            {content.date}
          </div>
          <div className={`text-gray-600 ${language === 'jp' ? 'font-jp' : 'font-serif italic'}`}>
            {content.location}
          </div>
        </div>

        {/* Body Text */}
        <p
          className={`text-gray-600 leading-loose whitespace-pre-line ${
            language === 'jp' ? 'font-jp text-sm' : 'font-serif text-base'
          }`}
        >
          {content.messageBody}
        </p>

        {/* Actions */}
        <div className="pt-8 space-y-4">
          <button className="w-full bg-gray-900 text-white py-4 px-8 tracking-widest uppercase hover:bg-gray-800 transition-colors shadow-lg font-cinzel text-xs md:text-sm">
            {content.rsvpButton}
          </button>

          <button
            onClick={onOpenAssistant}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-wedding-gold-light to-white border border-wedding-gold/30 py-3 px-8 text-wedding-gold hover:text-yellow-700 transition-all font-serif italic shadow-sm hover:shadow-md rounded-sm"
          >
            <span>✨</span>
            <span>{content.aiAssistantTitle}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
