import type { TypedSection } from './typedSection'

export type TenthStepFields = {
  selectedQuestions: Record<string, string | undefined>
  characterAssets: string[]
  characterDefects: string[]
}

/** Shared by the AA and Al-Anon 10th-step pages (identical field shape).
 *  `qaSectionId` distinguishes the pages' Q&A section id. */
export function tenthStepFieldsToTypedSections(
  qaSectionId: string,
  fields: TenthStepFields
): TypedSection[] {
  const pairs = Object.entries(fields.selectedQuestions).filter(
    (e): e is [string, string] => e[1] !== undefined
  )
  return [
    {
      id: qaSectionId,
      kind: 'qaPairs',
      variant: 'alanon',
      displayHeading: 'Spot Check Q and A for today:',
      pairs
    },
    {
      id: 'character-defects',
      kind: 'characterBullets',
      variant: 'defects',
      items: fields.characterDefects
    },
    {
      id: 'character-assets',
      kind: 'characterBullets',
      variant: 'assets',
      items: fields.characterAssets
    }
  ]
}
