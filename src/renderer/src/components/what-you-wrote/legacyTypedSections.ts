import type { LegacyWhatYouWroteProps } from './types'
import type { TypedSection } from './typedSection'

/** Order matches legacy clipboard output from `buildLegacyCopyText`. */
export function legacyPropsToTypedSections(p: LegacyWhatYouWroteProps): TypedSection[] {
  const sections: TypedSection[] = []

  if (p.traitQs && p.traitQs.length > 0) {
    sections.push({
      id: 'aca-trait-qs',
      kind: 'acaTraitQs',
      traitQs: p.traitQs
    })
  }

  const traitAnswers = p.selectedTraits
    ? (Object.entries(p.selectedTraits).filter((e) => e[1] !== undefined) as [string, string][])
    : []
  if (traitAnswers.length > 0) {
    sections.push({
      id: 'trait-answers',
      kind: 'qaPairs',
      variant: 'traits',
      displayHeading: 'Traits I had today:',
      pairs: traitAnswers
    })
  }

  if (p.llTraits && p.llTraits.length > 0) {
    const flat = p.llTraits.flat()
    sections.push({
      id: 'laundry-list',
      kind: 'bulletList',
      displayHeading: 'Laundry List and Other Laundry List traits I had today:',
      copyHeading: 'Laundry List / Other Laundry List:',
      items: flat,
      copyLayout: 'laundry'
    })
  }

  if (p.freedomText) {
    sections.push({
      id: 'choice-level',
      kind: 'choiceLevel',
      body: p.freedomText
    })
  }

  if (p.feelingsSentence) {
    sections.push({
      id: 'feeling-statement',
      kind: 'feelingStatement',
      body: p.feelingsSentence
    })
  }

  if (p.listOfTools && p.listOfTools.length > 0) {
    sections.push({
      id: 'tools',
      kind: 'bulletList',
      displayHeading: 'Tools I used today:',
      copyHeading: 'Recovery Tools just for today:',
      items: p.listOfTools,
      normalizeUnderscores: true,
      copyLayout: 'tools'
    })
  }

  if (p.praise && p.praise.length > 0) {
    sections.push({
      id: 'praise',
      kind: 'affirmationBullets',
      displayHeading: "Today's Affirmations:",
      copyHeading: 'Praise Today:',
      items: p.praise
    })
  }

  if (p.canCannotControl && p.canCannotControl.length > 0) {
    sections.push({
      id: 'control',
      kind: 'controlPairs',
      displayHeading: 'My (lack of) Serentity today:',
      pairs: p.canCannotControl
    })
  }

  if (p.fearsList && p.fearsList.length > 0) {
    sections.push({
      id: 'fears',
      kind: 'fearPairs',
      displayHeading: "Today's fears:",
      pairs: p.fearsList
    })
  }

  if (p.gradteful && p.gradteful.length > 0) {
    sections.push({
      id: 'grateful',
      kind: 'gratefulLines',
      lines: p.gradteful
    })
  }

  const questionAnswers = p.selectedQuestions
    ? (Object.entries(p.selectedQuestions).filter((e) => e[1] !== undefined) as [string, string][])
    : []
  if (questionAnswers.length > 0) {
    sections.push({
      id: 'alanon-spot',
      kind: 'qaPairs',
      variant: 'alanon',
      displayHeading: 'Alanon Spot Check for today:',
      pairs: questionAnswers
    })
  }

  if (p.characterDefects && p.characterDefects.length > 0) {
    sections.push({
      id: 'character-defects',
      kind: 'characterBullets',
      variant: 'defects',
      items: p.characterDefects
    })
  }

  if (p.characterAssets && p.characterAssets.length > 0) {
    sections.push({
      id: 'character-assets',
      kind: 'characterBullets',
      variant: 'assets',
      items: p.characterAssets
    })
  }

  return sections
}
