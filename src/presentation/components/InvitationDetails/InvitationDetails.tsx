import type { Language } from '@/domain/types/wedding'
import { CONTENT } from '@/domain/constants/content'

interface InvitationDetailsProps {
  language: Language
  isVisible: boolean
  onOpenRsvp: () => void
}

export function InvitationDetails({ language, isVisible, onOpenRsvp }: InvitationDetailsProps) {
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

        {/* RSVP Button */}
        <div className="pt-8">
          <button
            onClick={onOpenRsvp}
            className={`w-full bg-gray-900 text-white py-4 px-8 tracking-widest uppercase hover:bg-gray-800 transition-colors shadow-lg text-xs md:text-sm ${
              language === 'jp' ? 'font-jp' : 'font-cinzel'
            }`}
          >
            {content.rsvpButton}
          </button>
        </div>
      </div>
    </div>
  )
}
