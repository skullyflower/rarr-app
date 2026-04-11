import type { TypedSection } from '@renderer/components/what-you-wrote/typedSection'

export type ResentmentSummaryFields = {
  Iresent: string
  because: string
  affectsMy: string[]
  myPart: string[]
  didWell: string[]
  learned: string
}

/** Declarative summary blocks: same order on screen and in the clipboard. */
export function resentmentFieldsToTypedSections(p: ResentmentSummaryFields): TypedSection[] {
  return [
    {
      id: 'resent',
      kind: 'plainBlock',
      displayHeading: 'I resent:',
      body: p.Iresent
    },
    {
      id: 'because',
      kind: 'plainBlock',
      displayHeading: 'Because:',
      body: p.because,
      preWrap: true
    },
    {
      id: 'affects',
      kind: 'bulletList',
      displayHeading: 'It affects my:',
      copyHeading: 'It affects my:',
      items: p.affectsMy,
      normalizeUnderscores: true,
      copyLayout: 'stacked'
    },
    {
      id: 'my-part',
      kind: 'bulletList',
      displayHeading: 'I contributed to the problem in these ways:',
      copyHeading: 'I contributed to the problem in these ways:',
      items: p.myPart,
      normalizeUnderscores: true,
      copyLayout: 'stacked'
    },
    {
      id: 'did-well',
      kind: 'bulletList',
      displayHeading: 'I did these things well:',
      copyHeading: 'I did these things well:',
      items: p.didWell,
      normalizeUnderscores: true,
      copyLayout: 'stacked'
    },
    {
      id: 'learned',
      kind: 'plainBlock',
      displayHeading: 'And after looking at it this way, I now see ...',
      copyHeading: 'And after looking at it this way, I now see ...',
      body: p.learned
    }
  ]
}
