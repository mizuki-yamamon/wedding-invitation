import type { ContentText, Language, RsvpContent } from '@/domain/types/wedding'

const groomEn = import.meta.env.VITE_GROOM_NAME_EN || 'James'
const brideEn = import.meta.env.VITE_BRIDE_NAME_EN || 'Olivia'
const groomJp = import.meta.env.VITE_GROOM_NAME_JP || '新郎'
const brideJp = import.meta.env.VITE_BRIDE_NAME_JP || '新婦'

export const CONTENT: Record<Language, ContentText> = {
  en: {
    tapToOpen: 'Tap to Open',
    names: `${brideEn} & ${groomEn}`,
    date: 'October 24, 2024',
    location: "St. Patrick's Cathedral, New York",
    messageTitle: 'You are invited',
    messageBody:
      'Together with our families, we joyfully invite you to celebrate our wedding. We look forward to sharing this special day with you.',
    rsvpButton: 'RSVP Now',
  },
  jp: {
    tapToOpen: 'タップして開封',
    names: `${groomJp} & ${brideJp}`,
    date: '2024年10月24日',
    location: 'グランドハイアット東京',
    messageTitle: '結婚式のご案内',
    messageBody:
      '謹啓\n皆様におかれましては清秋の候、ますますご清祥のこととお慶び申し上げます。\nこのたび私たちは結婚式を挙げることになりました。\nつきましては、日頃お世話になっている皆様に感謝の気持ちを込めて、ささやかな小宴を催したく存じます。',
    rsvpButton: '出欠確認',
  },
}

export const RSVP_CONTENT: Record<Language, RsvpContent> = {
  en: {
    title: 'RSVP',
    attendLabel: 'Joyfully Accept',
    declineLabel: 'Regretfully Decline',
    nameLabel: 'Your Name',
    namePlaceholder: 'Full name',
    nameKanaLabel: 'Name (Phonetic)',
    nameKanaPlaceholder: 'Phonetic reading',
    relationLabel: 'Relationship',
    relationOptions: {
      groomFriend: "Groom's Friend",
      brideFriend: "Bride's Friend",
      groomFamily: "Groom's Family",
      brideFamily: "Bride's Family",
      colleague: 'Colleague',
      other: 'Other',
    },
    companionsLabel: 'Number of Guests',
    companionsNote: 'Including yourself',
    allergyLabel: 'Food Allergies',
    allergyPlaceholder: 'Please list any allergies or dietary restrictions',
    messageLabel: 'Message to the Couple',
    messagePlaceholder: 'Your congratulatory message...',
    submitButton: 'Send RSVP',
    backButton: 'Back',
    thankYouTitle: 'Thank You!',
    thankYouAttending:
      'We are thrilled that you will be joining us on our special day. We look forward to celebrating with you!',
    thankYouDeclining:
      'We are sorry you cannot make it, but we truly appreciate your warm wishes. You will be missed!',
    backToInvitation: 'Back to Invitation',
  },
  jp: {
    title: '出欠確認',
    attendLabel: '喜んで出席させていただきます',
    declineLabel: '残念ながら欠席いたします',
    nameLabel: 'お名前',
    namePlaceholder: '山田 太郎',
    nameKanaLabel: 'ふりがな',
    nameKanaPlaceholder: 'やまだ たろう',
    relationLabel: 'ご関係',
    relationOptions: {
      groomFriend: '新郎友人',
      brideFriend: '新婦友人',
      groomFamily: '新郎親族',
      brideFamily: '新婦親族',
      colleague: '会社関係',
      other: 'その他',
    },
    companionsLabel: 'ご出席人数',
    companionsNote: 'ご本人を含む',
    allergyLabel: 'アレルギー・苦手な食材',
    allergyPlaceholder: 'アレルギーや苦手な食材がございましたらご記入ください',
    messageLabel: 'お祝いのメッセージ',
    messagePlaceholder: 'おふたりへのメッセージをどうぞ...',
    submitButton: '送信する',
    backButton: '戻る',
    thankYouTitle: 'ありがとうございます',
    thankYouAttending:
      'ご出席いただけるとのこと、大変嬉しく存じます。当日お会いできることを心より楽しみにしております。',
    thankYouDeclining:
      'ご欠席とのこと、残念ではございますが、温かいお気持ちに心より感謝申し上げます。',
    backToInvitation: '招待状に戻る',
  },
}
