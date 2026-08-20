import type { ReactNode } from 'react'

/** One block of summary: shared between clipboard and on-screen display. */
export type WhatYouWroteSectionItem = {
  id: string
  toCopy: string
  content: ReactNode
}

type WhatYouWroteBaseProps = {
  reset: () => void
  /** Replaces the default “Here is what you wrote.” heading. */
  heading?: ReactNode
  /** “Let go” modal after summary (10th-step style). Default true. */
  showReadyToLetGo?: boolean
}

/** Declarative sections (copy + UI stay in sync). */
export type WhatYouWroteSectionsProps = WhatYouWroteBaseProps & {
  sections: WhatYouWroteSectionItem[]
}

export type WhatYouWroteProps = WhatYouWroteSectionsProps
