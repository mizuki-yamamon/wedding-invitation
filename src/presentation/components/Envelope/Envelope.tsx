import { useState } from 'react'
import type { Language } from '@/domain/types/wedding'
import { CONTENT } from '@/domain/constants/content'

interface EnvelopeProps {
  language: Language
  onOpenComplete: () => void
}

export function Envelope({ language, onOpenComplete }: EnvelopeProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isCardVisible, setIsCardVisible] = useState(false)
  const content = CONTENT[language]

  const handleOpen = () => {
    if (isOpen) return
    setIsOpen(true)
    setTimeout(() => {
      setIsCardVisible(true)
    }, 800)
    setTimeout(() => {
      onOpenComplete()
    }, 2000)
  }

  return (
    <div
      className={`relative mx-auto w-[340px] md:w-[400px] h-[240px] md:h-[280px] perspective-1000 transition-all duration-1000 ${
        isCardVisible
          ? 'translate-y-[200px] opacity-0 pointer-events-none'
          : 'translate-y-0 opacity-100'
      }`}
    >
      <div
        className="relative w-full h-full cursor-pointer group"
        onClick={handleOpen}
      >
        {/* Envelope Body (Back) - z-0 */}
        <div className="absolute inset-0 bg-[#e3dcd2] rounded-lg shadow-2xl border border-[#d6cfc5]" />

        {/* Invitation Card (Inside) - above flap when open */}
        <div
          className={`envelope-card z-10 w-[90%] h-[90%] bg-white shadow-sm flex flex-col items-center justify-center border border-gray-100 px-4
          ${isOpen ? 'envelope-card--open' : ''}`}
        >
          <div className="text-center w-full p-4 opacity-80">
            <h1
              className={`text-2xl md:text-3xl text-gray-800 ${
                language === 'jp' ? 'font-jp font-bold' : 'font-script'
              }`}
            >
              {language === 'jp' ? '招待状' : 'Invitation'}
            </h1>
            <div className="w-8 h-[1px] bg-wedding-gold mx-auto my-2" />
            <p
              className={`text-xs text-gray-500 uppercase tracking-widest ${
                language === 'jp' ? 'font-jp' : 'font-cinzel'
              }`}
            >
              {content.names}
            </p>
          </div>
        </div>

        {/* Side Flap Left - z-20 */}
        <div className="absolute top-0 left-0 w-0 h-0 border-t-[120px] md:border-t-[140px] border-b-[120px] md:border-b-[140px] border-l-[170px] md:border-l-[200px] border-t-transparent border-b-transparent border-l-[#ede7df] z-20 pointer-events-none" />

        {/* Side Flap Right - z-20 */}
        <div className="absolute top-0 right-0 w-0 h-0 border-t-[120px] md:border-t-[140px] border-b-[120px] md:border-b-[140px] border-r-[170px] md:border-r-[200px] border-t-transparent border-b-transparent border-r-[#ede7df] z-20 pointer-events-none" />

        {/* Envelope Front (Pocket) - z-30 */}
        <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[170px] md:border-l-[200px] border-r-[170px] md:border-r-[200px] border-b-[140px] md:border-b-[160px] border-l-transparent border-r-transparent border-b-[#f0ebe3] z-30 rounded-b-lg drop-shadow-md pointer-events-none" />

        {/* Envelope Flap (Top) - isolated 3D context for rotation */}
        <div className={`absolute inset-0 pointer-events-none perspective-1000 ${isOpen ? 'z-0' : 'z-40'}`}>
          <div
            className={`absolute top-0 left-0 w-0 h-0 border-l-[170px] md:border-l-[200px] border-r-[170px] md:border-r-[200px] border-t-[130px] md:border-t-[150px] border-l-transparent border-r-transparent border-t-[#e8e2d9] origin-top transition-transform duration-1000 ease-in-out drop-shadow-md rounded-t-lg
            ${isOpen ? 'rotate-x-180' : 'rotate-x-0 group-hover:brightness-105'}`}
          >
            {/* Wax Seal */}
            <div
              className={`absolute top-[-15px] left-[-24px] md:left-[-24px] w-12 h-12 bg-wedding-gold rounded-full flex items-center justify-center shadow-lg transition-opacity duration-500 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <span className="font-script text-white text-xl pt-1">W</span>
            </div>
          </div>
        </div>

        {/* Tap Instruction */}
        {!isOpen && (
          <div className="absolute -bottom-8 left-0 w-full text-center text-gray-400 text-sm tracking-widest uppercase animate-bounce font-cinzel z-50">
            {content.tapToOpen}
          </div>
        )}
      </div>
    </div>
  )
}
