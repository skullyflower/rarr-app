import type { LegacyWhatYouWroteProps } from './types'
import { joinTypedSectionsCopy } from './typedSection'
import { legacyPropsToTypedSections } from './legacyTypedSections'

/** Plain-text summary — same formatting as the original `toCopy()` implementation. */
export function buildLegacyCopyText(p: LegacyWhatYouWroteProps): string {
  return joinTypedSectionsCopy(legacyPropsToTypedSections(p))
}
