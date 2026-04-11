import { Box, Button, CloseButton, Heading, HStack, Stack } from '@chakra-ui/react'
import SaveButton from '@renderer/components/buttons/save-button'
import CopyButton from '@renderer/components/buttons/copy-button'
import PageCard from './layout/page-card'
import ColorBox from './layout/color-box'
import ReadyToLetGo from './form/ready-to-let-go'
import { useState, type ReactNode } from 'react'
import { buildLegacyCopyText } from './what-you-wrote/legacyCopyText'
import { LegacyWhatYouWroteDisplay } from './what-you-wrote/legacySections'
import type { WhatYouWroteProps, WhatYouWroteSectionsProps } from './what-you-wrote/types'

function isSectionsProps(props: WhatYouWroteProps): props is WhatYouWroteSectionsProps {
  return 'sections' in props && props.sections !== undefined
}

function WhatYouWrote(props: WhatYouWroteProps): JSX.Element {
  const [isLettingGo, setIsLettingGo] = useState(true)

  let reset: () => void
  let heading: ReactNode | undefined
  let showReadyToLetGo: boolean
  let stringToWrite: string
  let summaryBody: ReactNode

  if (isSectionsProps(props)) {
    const { reset: r, heading: h, showReadyToLetGo: srtl = true, sections } = props
    reset = r
    heading = h
    showReadyToLetGo = srtl
    stringToWrite = sections
      .map((s) => s.toCopy)
      .filter(Boolean)
      .join('\n\n')
    summaryBody = (
      <>
        {sections.map((s) => (
          <Box key={s.id}>{s.content}</Box>
        ))}
      </>
    )
  } else {
    const { reset: r, heading: h, showReadyToLetGo: srtl = true, ...legacy } = props
    reset = r
    heading = h
    showReadyToLetGo = srtl
    stringToWrite = buildLegacyCopyText(legacy)
    summaryBody = <LegacyWhatYouWroteDisplay {...legacy} />
  }

  return (
    <PageCard
      header={
        <HStack justifyContent="space-between" align="center" width="100%">
          <Heading fontSize={'h3'} fontWeight={700}>
            {heading ?? 'Here is what you wrote.'}
          </Heading>
          <HStack gap={4}>
            <CopyButton text={stringToWrite} />
            {Boolean(window.api) && <SaveButton text={stringToWrite} bigbutton={true} />}
            <CloseButton onClick={reset} />
          </HStack>
        </HStack>
      }
    >
      <ColorBox>
        <Stack gap={4}>
          <Stack gap={4} id="ToCopy">
            {summaryBody}
          </Stack>
          <Box textAlign="center">
            <Button onClick={reset}>Start Over</Button>
          </Box>
        </Stack>
      </ColorBox>
      {showReadyToLetGo && (
        <ReadyToLetGo isOpen={isLettingGo} onClose={() => setIsLettingGo(false)} />
      )}
    </PageCard>
  )
}

export default WhatYouWrote
export type { WhatYouWroteSectionItem, WhatYouWroteProps } from './what-you-wrote/types'
