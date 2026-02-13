import type { Language, RsvpFormData, GuestRelation } from '@/domain/types/wedding'
import { RSVP_CONTENT } from '@/domain/constants/content'

interface RsvpFormProps {
  language: Language
  formData: RsvpFormData
  onUpdateField: <K extends keyof RsvpFormData>(key: K, value: RsvpFormData[K]) => void
  onSubmit: () => void
  onBack: () => void
}

const RELATION_KEYS: GuestRelation[] = [
  'groomFriend',
  'brideFriend',
  'groomFamily',
  'brideFamily',
  'colleague',
  'other',
]

export function RsvpForm({ language, formData, onUpdateField, onSubmit, onBack }: RsvpFormProps) {
  const content = RSVP_CONTENT[language]
  const isJp = language === 'jp'
  const isAttending = formData.attendance === 'attending'

  const canSubmit = formData.name.trim() !== ''

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (canSubmit) onSubmit()
  }

  return (
    <div className="w-full max-w-lg mx-auto bg-wedding-paper p-8 md:p-12 shadow-2xl animate-fade-in-up relative">
      {/* Decorative Corner Borders */}
      <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-wedding-gold/30" />
      <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-wedding-gold/30" />
      <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-wedding-gold/30" />
      <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-wedding-gold/30" />

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <h2
          className={`text-center text-2xl tracking-[0.2em] text-gray-700 ${
            isJp ? 'font-jp font-bold' : 'font-cinzel'
          }`}
        >
          {content.title}
        </h2>

        {/* Attendance Selection */}
        <div className="space-y-3">
          <button
            type="button"
            onClick={() => onUpdateField('attendance', 'attending')}
            className={`w-full py-4 px-6 border-2 transition-all duration-300 ${
              isJp ? 'font-jp text-sm' : 'font-cinzel text-xs tracking-widest'
            } ${
              isAttending
                ? 'border-wedding-gold bg-wedding-gold/10 text-wedding-gold'
                : 'border-gray-200 text-gray-500 hover:border-gray-300'
            }`}
          >
            {content.attendLabel}
          </button>
          <button
            type="button"
            onClick={() => onUpdateField('attendance', 'declining')}
            className={`w-full py-4 px-6 border-2 transition-all duration-300 ${
              isJp ? 'font-jp text-sm' : 'font-cinzel text-xs tracking-widest'
            } ${
              formData.attendance === 'declining'
                ? 'border-gray-500 bg-gray-50 text-gray-600'
                : 'border-gray-200 text-gray-500 hover:border-gray-300'
            }`}
          >
            {content.declineLabel}
          </button>
        </div>

        {/* Form Fields - shown after attendance selection */}
        {formData.attendance && (
          <div className="space-y-5 animate-fade-in-up">
            <div className="w-12 h-[1px] bg-wedding-gold/40 mx-auto" />

            {/* Name */}
            <div className="space-y-1">
              <label className={`block text-xs text-gray-500 tracking-wider ${isJp ? 'font-jp' : 'font-cinzel'}`}>
                {content.nameLabel} <span className="text-wedding-gold">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => onUpdateField('name', e.target.value)}
                placeholder={content.namePlaceholder}
                className={`w-full border-b border-gray-300 bg-transparent py-2 text-gray-800 focus:outline-none focus:border-wedding-gold transition-colors placeholder:text-gray-300 ${
                  isJp ? 'font-jp' : 'font-serif'
                }`}
              />
            </div>

            {/* Name Kana (JP only) */}
            {isJp && (
              <div className="space-y-1">
                <label className="block text-xs text-gray-500 tracking-wider font-jp">
                  {content.nameKanaLabel}
                </label>
                <input
                  type="text"
                  value={formData.nameKana}
                  onChange={(e) => onUpdateField('nameKana', e.target.value)}
                  placeholder={content.nameKanaPlaceholder}
                  className="w-full border-b border-gray-300 bg-transparent py-2 text-gray-800 font-jp focus:outline-none focus:border-wedding-gold transition-colors placeholder:text-gray-300"
                />
              </div>
            )}

            {/* Relation */}
            <div className="space-y-1">
              <label className={`block text-xs text-gray-500 tracking-wider ${isJp ? 'font-jp' : 'font-cinzel'}`}>
                {content.relationLabel}
              </label>
              <div className="flex flex-wrap gap-2 pt-1">
                {RELATION_KEYS.map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => onUpdateField('relation', key)}
                    className={`px-3 py-1.5 text-xs border rounded-full transition-all duration-200 ${
                      isJp ? 'font-jp' : 'font-serif'
                    } ${
                      formData.relation === key
                        ? 'border-wedding-gold bg-wedding-gold/10 text-wedding-gold'
                        : 'border-gray-200 text-gray-500 hover:border-gray-300'
                    }`}
                  >
                    {content.relationOptions[key]}
                  </button>
                ))}
              </div>
            </div>

            {/* Companions (attending only) */}
            {isAttending && (
              <div className="space-y-1">
                <label className={`block text-xs text-gray-500 tracking-wider ${isJp ? 'font-jp' : 'font-cinzel'}`}>
                  {content.companionsLabel}
                  <span className="text-gray-400 ml-2">({content.companionsNote})</span>
                </label>
                <div className="flex items-center gap-4 pt-1">
                  <button
                    type="button"
                    onClick={() => onUpdateField('companions', Math.max(1, formData.companions - 1))}
                    className="w-9 h-9 border border-gray-300 text-gray-500 hover:border-wedding-gold hover:text-wedding-gold transition-colors rounded-full flex items-center justify-center"
                  >
                    -
                  </button>
                  <span className={`text-xl text-gray-800 w-8 text-center ${isJp ? 'font-jp' : 'font-cinzel'}`}>
                    {formData.companions}
                  </span>
                  <button
                    type="button"
                    onClick={() => onUpdateField('companions', Math.min(5, formData.companions + 1))}
                    className="w-9 h-9 border border-gray-300 text-gray-500 hover:border-wedding-gold hover:text-wedding-gold transition-colors rounded-full flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>
            )}

            {/* Allergy (attending only) */}
            {isAttending && (
              <div className="space-y-1">
                <label className={`block text-xs text-gray-500 tracking-wider ${isJp ? 'font-jp' : 'font-cinzel'}`}>
                  {content.allergyLabel}
                </label>
                <input
                  type="text"
                  value={formData.allergy}
                  onChange={(e) => onUpdateField('allergy', e.target.value)}
                  placeholder={content.allergyPlaceholder}
                  className={`w-full border-b border-gray-300 bg-transparent py-2 text-gray-800 focus:outline-none focus:border-wedding-gold transition-colors placeholder:text-gray-300 text-sm ${
                    isJp ? 'font-jp' : 'font-serif'
                  }`}
                />
              </div>
            )}

            {/* Message */}
            <div className="space-y-1">
              <label className={`block text-xs text-gray-500 tracking-wider ${isJp ? 'font-jp' : 'font-cinzel'}`}>
                {content.messageLabel}
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => onUpdateField('message', e.target.value)}
                placeholder={content.messagePlaceholder}
                rows={3}
                className={`w-full border-b border-gray-300 bg-transparent py-2 text-gray-800 focus:outline-none focus:border-wedding-gold transition-colors placeholder:text-gray-300 text-sm resize-none ${
                  isJp ? 'font-jp' : 'font-serif'
                }`}
              />
            </div>

            {/* Actions */}
            <div className="pt-4 space-y-3">
              <button
                type="submit"
                disabled={!canSubmit}
                className={`w-full py-4 px-8 tracking-widest uppercase transition-all shadow-lg text-xs md:text-sm disabled:opacity-40 disabled:cursor-not-allowed ${
                  isJp ? 'font-jp' : 'font-cinzel'
                } ${
                  isAttending
                    ? 'bg-gray-900 text-white hover:bg-gray-800'
                    : 'bg-gray-600 text-white hover:bg-gray-500'
                }`}
              >
                {content.submitButton}
              </button>
              <button
                type="button"
                onClick={onBack}
                className={`w-full py-3 text-gray-400 hover:text-gray-600 transition-colors text-sm ${
                  isJp ? 'font-jp' : 'font-serif'
                }`}
              >
                {content.backButton}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}
