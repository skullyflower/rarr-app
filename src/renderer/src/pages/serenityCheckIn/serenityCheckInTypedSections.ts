import type { TypedSection } from '@renderer/components/what-you-wrote/typedSection'
import type { doubleListItem } from '@renderer/components/form/DoubleListerInput'

export type SerenityFields = {
  canCannotControl: doubleListItem[]
}

export function serenityFieldsToTypedSections(p: SerenityFields): TypedSection[] {
  return [
    {
      id: 'control',
      kind: 'controlPairs',
      displayHeading: 'My (lack of) Serenity today:',
      pairs: p.canCannotControl
    }
  ]
}
