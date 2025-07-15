import { HStack, Input, Select, Stack, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { feelings } from './aca-tenth-constants.d'

const FeelingsStatement = ({
  setFeelingSentence
}: {
  setFeelingSentence: (value: string) => void
}): JSX.Element => {
  const [when, setWhen] = useState<string>()
  const [feeling, setFeeling] = useState<string>('')
  const [because, setBecause] = useState<string>('')

  useEffect(() => {
    if (feeling && when && because) {
      setFeelingSentence(`I feel ${feeling} when ${when} because ${because}.`)
    }
  }, [feeling, when, because, setFeelingSentence])

  return (
    <Stack gap={4}>
      <Text>Practice a feeling statement.</Text>

      <Stack gap={4}>
        <HStack gap={4} wrap={'wrap'}>
          <Text>I feel</Text>

          <Select
            placeholder="Select a feeling"
            transform={'capitalize'}
            value={feeling}
            onChange={(e) => setFeeling(e.target.value)}
          >
            {feelings.sort().map((value, index) => (
              <option key={index}>{value}</option>
            ))}
          </Select>
          <Text> when </Text>
          <Input value={when} onChange={(e) => setWhen(e.target.value)} />
          <Text> because </Text>
          <Input value={because} onChange={(e) => setBecause(e.target.value)} />
        </HStack>
      </Stack>
    </Stack>
  )
}
export default FeelingsStatement
