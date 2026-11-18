import type { TypedSection } from '@renderer/components/what-you-wrote/typedSection'
import type { doubleListItem } from '@renderer/components/form/DoubleListerInput'

export type FearsFields = {
  fearsList: doubleListItem[]
  fearful: string[]
  grateful: string[]
}

export function fearsFieldsToTypedSections(p: FearsFields): TypedSection[] {
  return [
    {
      id: 'fears',
      kind: 'fearPairs',
      displayHeading: "Today's fears:",
      pairs: p.fearsList
    },
    {
      id: 'fearful',
      kind: 'fearfulLines',
      lines: p.fearful
    },
    {
      id: 'grateful',
      kind: 'gratefulLines',
      lines: p.grateful
    }
  ]
}
