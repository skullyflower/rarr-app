import type { ReactNode } from 'react'
import type { doubleListItem } from '@renderer/components/form/DoubleListerInput'

/** One block of summary: shared between clipboard and on-screen display. */
export type WhatYouWroteSectionItem = {
  id: string
  toCopy: string
  content: ReactNode
}

/** Props for the original “kitchen sink” summary (ACA / Al-Anon / fears / serenity). */
export type LegacyWhatYouWroteProps = {
  praise?: string[]
  freedomText?: string
  feelingsSentence?: string
  listOfTools?: string[]
  traitQs?: string[]
  selectedTraits?: Record<string, string | undefined>
  canCannotControl?: doubleListItem[]
  fearsList?: doubleListItem[]
  gradteful?: string[]
  llTraits?: string[]
  selectedQuestions?: Record<string, string | undefined>
  characterAssets?: string[]
  characterDefects?: string[]
}

type WhatYouWroteBaseProps = {
  reset: () => void
  /** Replaces the default “Here is what you wrote.” heading. */
  heading?: ReactNode
  /** “Let go” modal after summary (10th-step style). Default true. */
  showReadyToLetGo?: boolean
}

/** Declarative sections (copy + UI stay in sync). Prefer for new pages. */
export type WhatYouWroteSectionsProps = WhatYouWroteBaseProps & {
  sections: WhatYouWroteSectionItem[]
}

/** Existing ACA / Al-Anon / fears / serenity field bundles. */
export type WhatYouWroteLegacyProps = WhatYouWroteBaseProps & LegacyWhatYouWroteProps

export type WhatYouWroteProps = WhatYouWroteSectionsProps | WhatYouWroteLegacyProps
