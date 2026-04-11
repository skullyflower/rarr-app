import { Box } from '@chakra-ui/react'
import type { ReactNode } from 'react'
import type { WhatYouWroteSectionItem } from './types'
import {
  buildTypedSectionCopy,
  isTypedSectionEmpty,
  joinTypedSectionsCopy,
  type TypedSection
} from './typedSection'
import { TypedSectionDisplay } from './typedSectionDisplay'

/** One declarative spec → clipboard string + on-screen block (kept in sync). */
export function createWhatYouWroteSection(spec: TypedSection): WhatYouWroteSectionItem | null {
  if (isTypedSectionEmpty(spec)) return null
  return {
    id: spec.id,
    toCopy: buildTypedSectionCopy(spec),
    content: <TypedSectionDisplay section={spec} />
  }
}

export function createWhatYouWroteSections(specs: TypedSection[]): WhatYouWroteSectionItem[] {
  return specs.map(createWhatYouWroteSection).filter(Boolean) as WhatYouWroteSectionItem[]
}

/** Full summary: one copy string and a fragment of section boxes. */
export function createWhatYouWroteFromSpecs(specs: TypedSection[]): {
  toCopy: string
  content: ReactNode
} {
  const items = createWhatYouWroteSections(specs)
  return {
    toCopy: joinTypedSectionsCopy(specs.filter((s) => !isTypedSectionEmpty(s))),
    content: (
      <>
        {items.map((item) => (
          <Box key={item.id}>{item.content}</Box>
        ))}
      </>
    )
  }
}
