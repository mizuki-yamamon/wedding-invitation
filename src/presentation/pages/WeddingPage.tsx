import { useState } from 'react'
import { CONTENT } from '@/domain/constants/content'
import { useLanguage } from '@/application/hooks/useLanguage'
import { useEnvelope } from '@/application/hooks/useEnvelope'
import { useRsvp } from '@/application/hooks/useRsvp'
import { LanguageToggle } from '@/presentation/components/LanguageToggle/LanguageToggle'
import { Envelope } from '@/presentation/components/Envelope/Envelope'
import { InvitationDetails } from '@/presentation/components/InvitationDetails/InvitationDetails'
import { RsvpForm } from '@/presentation/components/RsvpForm/RsvpForm'
import { RsvpThankYou } from '@/presentation/components/RsvpThankYou/RsvpThankYou'

type Phase = 'envelope' | 'invitation' | 'rsvp' | 'thankYou'

export function WeddingPage() {
  const { language, setLanguage } = useLanguage()
  const { isOpened, open } = useEnvelope()
  const { formData, isSubmitted, updateField, submit, reset } = useRsvp()
  const [phase, setPhase] = useState<Phase>('envelope')

  const handleEnvelopeOpen = () => {
    open()
    setPhase('invitation')
  }

  const handleBackToInvitation = () => {
    reset()
    setPhase('invitation')
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-wedding-cream relative overflow-hidden transition-colors duration-1000">
      {/* Background Texture/Gradient */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-wedding-gold/5 pointer-events-none" />

      <LanguageToggle currentLang={language} onToggle={setLanguage} />

      <main className="z-10 w-full px-4 flex flex-col items-center py-12">
        {/* Phase 1: Envelope */}
        {!isOpened && phase === 'envelope' && (
          <div className="animate-fade-in-up">
            <Envelope language={language} onOpenComplete={handleEnvelopeOpen} />
          </div>
        )}

        {/* Phase 2: Invitation Details */}
        {phase === 'invitation' && (
          <InvitationDetails
            language={language}
            isVisible
            onOpenRsvp={() => setPhase('rsvp')}
          />
        )}

        {/* Phase 3: RSVP Form */}
        {phase === 'rsvp' && !isSubmitted && (
          <RsvpForm
            language={language}
            formData={formData}
            onUpdateField={updateField}
            onSubmit={() => {
              submit()
              setPhase('thankYou')
            }}
            onBack={handleBackToInvitation}
          />
        )}

        {/* Phase 4: Thank You */}
        {phase === 'thankYou' && isSubmitted && (
          <RsvpThankYou
            language={language}
            attendance={formData.attendance}
            onBackToInvitation={handleBackToInvitation}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="absolute bottom-4 text-gray-300 text-[10px] tracking-widest font-cinzel">
        © 2024 {CONTENT.en.names} Wedding
      </footer>
    </div>
  )
}
