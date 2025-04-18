import { copyContents } from '@renderer/pages/resentments/copyContents.mjs'
import ReadyToLetGo from '@renderer/components/form/ready-to-let-go'
import SemiSafeContent from '@renderer/components/SemiSafeContent'
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  ListItem,
  Stack,
  Text,
  UnorderedList
} from '@chakra-ui/react'
import { useState } from 'react'

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
}

function ResentBeGone({
  Iresent,
  because,
  affectsMy,
  myPart,
  didWell,
  learned,
  isLettingGo,
  onCloseLetGo
}: ResentBeGoneProps): JSX.Element {
  const [copied, setCopied] = useState(false)
  return (
    <Card bg="whiteAlpha.300" border={['none', '1px solid']}>
      <CardBody>
        <Card
          bg="pink.900"
          color="purple.300"
          border="1px solid"
          maxW={800}
          marginInline="auto"
          marginBlock={4}
        >
          <CardHeader>
            <HStack justifyContent="space-between">
              <Text>Here is what you wrote.</Text>
              <Button onClick={() => setCopied(copyContents())}>
                {copied ? 'copied' : 'copy'}
              </Button>
            </HStack>
          </CardHeader>
          <CardBody border="1px solid">
            <Stack gap={4} id="ToCopy">
              <Text fontWeight={700}>I resent:</Text>
              <Box paddingInline={4}>
                <Text> {Iresent}</Text>
              </Box>
              <Text fontWeight={700}>Because:</Text>
              <Box paddingInline={4}>
                <SemiSafeContent rawContent={because} />
              </Box>
              <Text fontWeight={700}>It affects my:</Text>
              <UnorderedList>
                {affectsMy.map((effect, indx) => (
                  <ListItem key={`affects${indx}`}>{effect.replace('_', ' ')}</ListItem>
                ))}
              </UnorderedList>
              <Text fontWeight={700}>I contributed to the problem in these ways:</Text>
              <UnorderedList>
                {myPart.map((part, indx) => (
                  <ListItem key={`part${indx}`}>{part.replace('_', ' ')}</ListItem>
                ))}
              </UnorderedList>
              <Text fontWeight={700}>I did these things well:</Text>
              <UnorderedList>
                {didWell.map((part, indx) => (
                  <ListItem key={`part${indx}`}>{part.replace('_', ' ')}</ListItem>
                ))}
              </UnorderedList>
              <Text fontWeight={700}>And after looking at it this way, I now see ...</Text>
              <Box paddingInline={4}>
                <SemiSafeContent rawContent={learned} />
              </Box>
            </Stack>
          </CardBody>
          <CardFooter textAlign="center">
            <Button onClick={() => window.location.reload()}>Start Over</Button>
          </CardFooter>
          <ReadyToLetGo isOpen={isLettingGo} onClose={onCloseLetGo} />
        </Card>
      </CardBody>
    </Card>
  )
}
export default ResentBeGone
