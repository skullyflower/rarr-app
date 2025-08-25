import { getContents } from '@renderer/pages/resentments/copyContents.mjs'
import ReadyToLetGo from '@renderer/components/form/ready-to-let-go'
import { Box, Button, HStack, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react'
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
  onLettingGo: () => void
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
  const stringToWrite = getContents()
  return (
    <PageCard>
      <ColorBox>
        <Stack gap={4}>
          <HStack justifyContent="space-between">
            <Text>Here is what you wrote.</Text>
            <HStack gap={4}>
              <CopyButton text={stringToWrite} />
              {Boolean(window.api) && <SaveButton text={stringToWrite} bigbutton />}
            </HStack>
          </HStack>
          <Stack gap={4} id="ToCopy">
            <Text fontWeight={700}>I resent: </Text>
            <Box paddingInlineStart={4}>
              <Text>{Iresent}</Text>
            </Box>
            <Text fontWeight={700}>Because:</Text>
            <Box paddingInlineStart={4}>
              <Text style={{ whiteSpace: 'pre-wrap' }}>{because}</Text>
            </Box>
            <Text fontWeight={700}>It affects my:</Text>
            <UnorderedList paddingInlineStart={4}>
              {affectsMy.map((effect, indx) => (
                <ListItem key={`affects${indx}`}>{effect.replaceAll('_', ' ')}</ListItem>
              ))}
            </UnorderedList>
            <Text fontWeight={700}>I contributed to the problem in these ways:</Text>
            <UnorderedList paddingInlineStart={4}>
              {myPart.map((part, indx) => (
                <ListItem key={`part${indx}`}>{part.replaceAll('_', ' ')}</ListItem>
              ))}
            </UnorderedList>
            <Text fontWeight={700}>I did these things well:</Text>
            <UnorderedList paddingInlineStart={4}>
              {didWell.map((part, indx) => (
                <ListItem key={`part${indx}`}>{part.replaceAll('_', ' ')}</ListItem>
              ))}
            </UnorderedList>
            <Text fontWeight={700}>And after looking at it this way, I now see ...</Text>
            <Box paddingInlineStart={4}>
              <Text>{learned}</Text>
            </Box>
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
