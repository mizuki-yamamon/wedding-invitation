import type { Language } from '@/domain/types/wedding'

interface LanguageToggleProps {
  currentLang: Language
  onToggle: (lang: Language) => void
}

export function LanguageToggle({ currentLang, onToggle }: LanguageToggleProps) {
  return (
    <div className="absolute top-6 right-6 z-50 flex space-x-2">
      <button
        onClick={() => onToggle('en')}
        className={`px-3 py-1 rounded-full text-xs tracking-widest transition-all duration-300 ${
          currentLang === 'en'
            ? 'bg-wedding-gold text-white shadow-md'
            : 'bg-white/50 text-gray-600 hover:bg-white'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => onToggle('jp')}
        className={`px-3 py-1 rounded-full text-xs tracking-widest transition-all duration-300 ${
          currentLang === 'jp'
            ? 'bg-wedding-gold text-white shadow-md'
            : 'bg-white/50 text-gray-600 hover:bg-white'
        }`}
      >
        JP
      </button>
    </div>
  )
}
