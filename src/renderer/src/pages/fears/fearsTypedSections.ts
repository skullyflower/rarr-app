import type { TypedSection } from '@renderer/components/what-you-wrote/typedSection'
import type { doubleListItem } from '@renderer/components/form/DoubleListerInput'

export type FearsFields = {
  fearsList: doubleListItem[]
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
      id: 'grateful',
      kind: 'gratefulLines',
      lines: p.grateful
    }
  ]
}
