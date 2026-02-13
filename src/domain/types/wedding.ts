export type Language = 'en' | 'jp'

export type Attendance = 'attending' | 'declining' | null

export type GuestRelation = 'groomFriend' | 'brideFriend' | 'groomFamily' | 'brideFamily' | 'colleague' | 'other'

export interface ContentText {
  tapToOpen: string
  names: string
  date: string
  location: string
  messageTitle: string
  messageBody: string
  rsvpButton: string
}

export interface RsvpContent {
  title: string
  attendLabel: string
  declineLabel: string
  nameLabel: string
  namePlaceholder: string
  nameKanaLabel: string
  nameKanaPlaceholder: string
  relationLabel: string
  relationOptions: Record<GuestRelation, string>
  companionsLabel: string
  companionsNote: string
  allergyLabel: string
  allergyPlaceholder: string
  messageLabel: string
  messagePlaceholder: string
  submitButton: string
  backButton: string
  thankYouTitle: string
  thankYouAttending: string
  thankYouDeclining: string
  backToInvitation: string
}

export interface RsvpFormData {
  attendance: Attendance
  name: string
  nameKana: string
  relation: GuestRelation | ''
  companions: number
  allergy: string
  message: string
}
