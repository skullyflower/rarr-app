import ReadyToLetGo from '@renderer/components/form/ready-to-let-go'
import { createWhatYouWroteFromSpecs } from '@renderer/components/what-you-wrote/typedSectionFactories'
import { resentmentFieldsToTypedSections } from './resentmentTypedSections'
import { Box, Button, Heading, HStack, Stack } from '@chakra-ui/react'
import SaveButton from '@renderer/components/buttons/save-button'
import CopyButton from '@renderer/components/buttons/copy-button'
import PageCard from '@renderer/components/layout/page-card'
import ColorBox from '@renderer/components/layout/color-box'

interface ResentBeGoneProps {
  Iresent: string
  because: string
  affectsMy: string[]
  myPart: string[]
  didWell: string[]
  learned: string
  isLettingGo: boolean
  onCloseLetGo: () => void
  reset: () => void
}

function ResentBeGone({
  Iresent,
  because,
  affectsMy,
  myPart,
  didWell,
  learned,
  isLettingGo,
  onCloseLetGo,
  reset
}: ResentBeGoneProps): JSX.Element {
  const { toCopy, content } = createWhatYouWroteFromSpecs(
    resentmentFieldsToTypedSections({
      Iresent,
      because,
      affectsMy,
      myPart,
      didWell,
      learned
    })
  )

  return (
    <PageCard
      header={
        <HStack justifyContent="space-between" align="center" width="100%">
          <Heading fontSize="h3" fontWeight={700}>
            Here is what you wrote.
          </Heading>
          <HStack gap={4}>
            <CopyButton text={toCopy} />
            {Boolean(window.api) && <SaveButton text={toCopy} bigbutton />}
          </HStack>
        </HStack>
      }
    >
      <ColorBox>
        <Stack gap={4}>
          <Stack gap={4} id="ToCopy">
            {content}
          </Stack>
          <Box textAlign="center">
            <Button onClick={reset}>Start Over</Button>
          </Box>
          <ReadyToLetGo isOpen={isLettingGo} onClose={onCloseLetGo} />
        </Stack>
      </ColorBox>
    </PageCard>
  )
}
export default ResentBeGone
