import strings from '@renderer/data/aca-tenth.json'
import type { doubleListItem } from '@renderer/components/form/DoubleListerInput'

const traitList = strings.traitList

function answersFromTraitQs(Qs: string[]): string {
  const As: string[] = []
  Qs.forEach((Q) => {
    const trait = traitList.find((t) => t.Q === Q)
    As.push(trait ? trait.A : '')
  })
  return As.join('\n\t• ')
}

/** Discriminated union: one section = one heading + one data shape. */
export type TypedSection =
  | PlainBlockSection
  | BulletListSection
  | QaPairsSection
  | AcaTraitQsSection
  | ChoiceLevelSection
  | FeelingStatementSection
  | AffirmationBulletsSection
  | ControlPairsSection
  | FearPairsSection
  | GratefulLinesSection
  | CharacterBulletSection

export type PlainBlockSection = {
  id: string
  kind: 'plainBlock'
  displayHeading: string
  /** Defaults to `displayHeading`. */
  copyHeading?: string
  body: string
  /** Use pre-wrap for multi-line free text (e.g. resentment “Because”). */
  preWrap?: boolean
}

export type BulletListSection = {
  id: string
  kind: 'bulletList'
  displayHeading: string
  copyHeading: string
  items: string[]
  /** Replace `_` with spaces in each line (display + copy). */
  normalizeUnderscores?: boolean
  copyLayout: 'stacked' | 'tools' | 'laundry'
}

export type QaPairsSection = {
  id: string
  kind: 'qaPairs'
  variant: 'traits' | 'alanon'
  displayHeading: string
  pairs: [string, string][]
}

export type AcaTraitQsSection = {
  id: string
  kind: 'acaTraitQs'
  /** Question strings stored in state (matches `aca-tenth` trait `Q` fields). */
  traitQs: string[]
}

export type ChoiceLevelSection = {
  id: string
  kind: 'choiceLevel'
  body: string
}

export type FeelingStatementSection = {
  id: string
  kind: 'feelingStatement'
  body: string
}

export type AffirmationBulletsSection = {
  id: string
  kind: 'affirmationBullets'
  displayHeading: string
  copyHeading: string
  items: string[]
}

export type ControlPairsSection = {
  id: string
  kind: 'controlPairs'
  displayHeading: string
  pairs: doubleListItem[]
}

export type FearPairsSection = {
  id: string
  kind: 'fearPairs'
  displayHeading: string
  pairs: doubleListItem[]
}

export type GratefulLinesSection = {
  id: string
  kind: 'gratefulLines'
  lines: string[]
}

export type CharacterBulletSection = {
  id: string
  kind: 'characterBullets'
  variant: 'defects' | 'assets'
  items: string[]
}

export function isTypedSectionEmpty(s: TypedSection): boolean {
  switch (s.kind) {
    case 'plainBlock':
      return !s.body.trim()
    case 'bulletList':
      return s.items.length === 0
    case 'qaPairs':
      return s.pairs.length === 0
    case 'acaTraitQs':
      return s.traitQs.length === 0
    case 'choiceLevel':
    case 'feelingStatement':
      return !s.body.trim()
    case 'affirmationBullets':
      return s.items.length === 0
    case 'controlPairs':
    case 'fearPairs':
      return s.pairs.length === 0
    case 'gratefulLines':
      return s.lines.length === 0
    case 'characterBullets':
      return s.items.length === 0
    default: {
      const _x: never = s
      return _x
    }
  }
}

/** Plain-text block for clipboard / save — matches prior `buildLegacyCopyText` formatting. */
export function buildTypedSectionCopy(s: TypedSection): string {
  if (isTypedSectionEmpty(s)) return ''

  switch (s.kind) {
    case 'plainBlock': {
      const h = s.copyHeading ?? s.displayHeading
      return `${h}\n${s.body}`
    }
    case 'bulletList': {
      const items = s.normalizeUnderscores ? s.items.map((i) => i.replaceAll('_', ' ')) : s.items
      if (s.copyLayout === 'laundry') {
        return `${s.copyHeading}\n\t• ${items.join(',\n\t• ')}`
      }
      if (s.copyLayout === 'tools') {
        return `${s.copyHeading}\n\t• ${items.join(', \n\t• ')}`
      }
      return `${s.copyHeading}\n\t• ${items.join('\n\t• ')}`
    }
    case 'qaPairs': {
      if (s.variant === 'traits') {
        return `Traits I had today:\n ${s.pairs
          .map((trait) => `\t• ${trait[0]}\n\t ${trait[1]}`)
          .join('\n\n')}\n`
      }
      return `Alanon Spot Check for today:\n ${s.pairs
        .map((q) => `\t• ${q[0]}\n\t ${q[1]}`)
        .join('\n\n ')}\n`
    }
    case 'acaTraitQs':
      return `ACAD Traits I had today:\n\t• ${answersFromTraitQs(s.traitQs)}`
    case 'choiceLevel':
      return `Choice Level:\nToday I was capable of: ${s.body}`
    case 'feelingStatement':
      return `Today's Feeling Statement:\n\t${s.body}`
    case 'affirmationBullets':
      return `Praise Today: \n\t• I am ${s.items.join(',\n\t• I am ')}`
    case 'controlPairs':
      return `Control:\n\t ${s.pairs
        .map(
          (pair) =>
            ` Today I want to control, but cannot control:\n\t ${pair[0]}\n   While I could and probably should: \n\t ${pair[1]}`
        )
        .join('\n\n')}`
    case 'fearPairs':
      return `Today I fear:\n ${s.pairs
        .map((pair) => `\t• Fear: ${pair[0]}\n\t\tBut grateful: ${pair[1]}`)
        .join('\n\n')}`
    case 'gratefulLines':
      return `...and grateful:\n ${s.lines.map((grat) => `\t• ${grat}`).join('\n')}`
    case 'characterBullets': {
      const label =
        s.variant === 'defects' ? 'Character Defects for today:' : 'Character Assets for today:'
      return `${label}\n ${s.items.join('\n\t• ')}\n`
    }
    default: {
      const _x: never = s
      return _x
    }
  }
}

export function joinTypedSectionsCopy(sections: TypedSection[]): string {
  return sections
    .map(buildTypedSectionCopy)
    .filter((chunk) => chunk.length > 0)
    .join('\n\n')
}
