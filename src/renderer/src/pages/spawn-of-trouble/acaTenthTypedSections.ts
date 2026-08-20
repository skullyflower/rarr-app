import type { TypedSection } from '@renderer/components/what-you-wrote/typedSection'

export type AcaTenthFields = {
  praise: string[]
  freedomText: string
  feelingsSentence: string
  listOfTools: string[]
  // Not currently wired to any input on the page (see aca-tenth-step-page.tsx) — always empty today.
  traitQs: string[]
  selectedTraits: Record<string, string | undefined>
  llTraits: string[]
}

export function acaTenthFieldsToTypedSections(p: AcaTenthFields): TypedSection[] {
  const traitAnswers = Object.entries(p.selectedTraits).filter(
    (e): e is [string, string] => e[1] !== undefined
  )

  return [
    {
      id: 'aca-trait-qs',
      kind: 'acaTraitQs',
      traitQs: p.traitQs
    },
    {
      id: 'trait-answers',
      kind: 'qaPairs',
      variant: 'traits',
      displayHeading: 'Traits I had today:',
      pairs: traitAnswers
    },
    {
      id: 'laundry-list',
      kind: 'bulletList',
      displayHeading: 'Laundry List and Other Laundry List traits I had today:',
      copyHeading: 'Laundry List / Other Laundry List:',
      items: p.llTraits,
      copyLayout: 'laundry'
    },
    {
      id: 'choice-level',
      kind: 'choiceLevel',
      body: p.freedomText
    },
    {
      id: 'feeling-statement',
      kind: 'feelingStatement',
      body: p.feelingsSentence
    },
    {
      id: 'tools',
      kind: 'bulletList',
      displayHeading: 'Tools I used today:',
      copyHeading: 'Recovery Tools just for today:',
      items: p.listOfTools,
      normalizeUnderscores: true,
      copyLayout: 'tools'
    },
    {
      id: 'praise',
      kind: 'affirmationBullets',
      displayHeading: "Today's Affirmations:",
      copyHeading: 'Praise Today:',
      items: p.praise
    }
  ]
}
