export const SUBJECTS = [
  { value: "collaboration", label: "Collaboration" },
  { value: "press", label: "Press & Media" },
  { value: "feedback", label: "Feedback" },
  { value: "other", label: "Other" },
] as const

export type SubjectValue = (typeof SUBJECTS)[number]["value"]
