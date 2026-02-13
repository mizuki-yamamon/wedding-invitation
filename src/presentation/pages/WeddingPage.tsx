import { useState } from 'react'
import { useLanguage } from '@/application/hooks/useLanguage'
import { useEnvelope } from '@/application/hooks/useEnvelope'
import { LanguageToggle } from '@/presentation/components/LanguageToggle/LanguageToggle'
import { Envelope } from '@/presentation/components/Envelope/Envelope'
import { InvitationDetails } from '@/presentation/components/InvitationDetails/InvitationDetails'
import { WeddingAssistant } from '@/presentation/components/WeddingAssistant/WeddingAssistant'

export function WeddingPage() {
  const { language, setLanguage } = useLanguage()
  const { isOpened, open } = useEnvelope()
  const [showAssistant, setShowAssistant] = useState(false)

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-wedding-cream relative overflow-hidden transition-colors duration-1000">
      {/* Background Texture/Gradient */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-wedding-gold/5 pointer-events-none" />

      <LanguageToggle currentLang={language} onToggle={setLanguage} />

      <main className="z-10 w-full px-4 flex flex-col items-center">
        {/* Phase 1: The Envelope */}
        {!isOpened && (
          <div className="animate-fade-in-up">
            <Envelope language={language} onOpenComplete={open} />
          </div>
        )}

        {/* Phase 2: The Card Content */}
        {isOpened && (
          <InvitationDetails
            language={language}
            isVisible={isOpened}
            onOpenAssistant={() => setShowAssistant(true)}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="absolute bottom-4 text-gray-300 text-[10px] tracking-widest font-cinzel">
        © 2024 Olivia & James Wedding
      </footer>

      {/* Assistant Modal */}
      <WeddingAssistant
        isOpen={showAssistant}
        onClose={() => setShowAssistant(false)}
        language={language}
      />
    </div>
  )
}
