import type { LegacyWhatYouWroteProps } from './types'
import { TypedSectionsDisplay } from './typedSectionDisplay'
import { legacyPropsToTypedSections } from './legacyTypedSections'

/** On-screen blocks — same data and order as the clipboard string from `buildLegacyCopyText`. */
export function LegacyWhatYouWroteDisplay(p: LegacyWhatYouWroteProps): JSX.Element {
  return <TypedSectionsDisplay sections={legacyPropsToTypedSections(p)} />
}
