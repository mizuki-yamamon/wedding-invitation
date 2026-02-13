import { useState, useCallback } from 'react'
import type { Attendance, RsvpFormData } from '@/domain/types/wedding'

const initialFormData: RsvpFormData = {
  attendance: null,
  name: '',
  nameKana: '',
  relation: '',
  companions: 1,
  allergy: '',
  message: '',
}

export function useRsvp() {
  const [formData, setFormData] = useState<RsvpFormData>(initialFormData)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const setAttendance = useCallback((attendance: Attendance) => {
    setFormData((prev) => ({ ...prev, attendance }))
  }, [])

  const updateField = useCallback(<K extends keyof RsvpFormData>(key: K, value: RsvpFormData[K]) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }, [])

  const submit = useCallback(() => {
    setIsSubmitted(true)
  }, [])

  const reset = useCallback(() => {
    setFormData(initialFormData)
    setIsSubmitted(false)
  }, [])

  return { formData, isSubmitted, setAttendance, updateField, submit, reset } as const
}
