import type { Language, Attendance } from '@/domain/types/wedding'
import { RSVP_CONTENT, CONTENT } from '@/domain/constants/content'

interface RsvpThankYouProps {
  language: Language
  attendance: Attendance
  onBackToInvitation: () => void
}

export function RsvpThankYou({ language, attendance, onBackToInvitation }: RsvpThankYouProps) {
  const rsvp = RSVP_CONTENT[language]
  const main = CONTENT[language]
  const isJp = language === 'jp'

  return (
    <div className="w-full max-w-lg mx-auto bg-wedding-paper p-8 md:p-12 shadow-2xl animate-fade-in-up relative text-center">
      {/* Decorative Corner Borders */}
      <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-wedding-gold/30" />
      <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-wedding-gold/30" />
      <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-wedding-gold/30" />
      <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-wedding-gold/30" />

      <div className="space-y-8">
        {/* Check icon */}
        <div className="w-16 h-16 mx-auto rounded-full border-2 border-wedding-gold/40 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-wedding-gold"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        {/* Title */}
        <h2
          className={`text-2xl md:text-3xl text-gray-800 ${
            isJp ? 'font-jp font-bold' : 'font-script'
          }`}
        >
          {rsvp.thankYouTitle}
        </h2>

        <div className="w-12 h-[1px] bg-wedding-gold/40 mx-auto" />

        {/* Message */}
        <p
          className={`text-gray-600 leading-relaxed ${
            isJp ? 'font-jp text-sm' : 'font-serif'
          }`}
        >
          {attendance === 'attending' ? rsvp.thankYouAttending : rsvp.thankYouDeclining}
        </p>

        {/* Event info reminder (attending only) */}
        {attendance === 'attending' && (
          <div className="py-4 border-t border-b border-gray-100 space-y-2">
            <p className={`text-wedding-gold font-medium ${isJp ? 'font-jp' : 'font-cinzel'}`}>
              {main.date}
            </p>
            <p className={`text-gray-500 text-sm ${isJp ? 'font-jp' : 'font-serif italic'}`}>
              {main.location}
            </p>
          </div>
        )}

        {/* Back button */}
        <button
          onClick={onBackToInvitation}
          className={`text-gray-400 hover:text-gray-600 transition-colors text-sm ${
            isJp ? 'font-jp' : 'font-serif'
          }`}
        >
          {rsvp.backToInvitation}
        </button>
      </div>
    </div>
  )
}
