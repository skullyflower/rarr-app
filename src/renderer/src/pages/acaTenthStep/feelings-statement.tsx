import { HStack, Input, Select, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { feelings } from './aca-tenth-constants.d'
import CopyButton from '@renderer/components/form/copy-button'

const FeelingsStatement = (): JSX.Element => {
  const [when, setWhen] = useState<string>()
  const [feeling, setFeeling] = useState<string>('')
  const [because, setBecause] = useState<string>('')
  const toCopy = `Today's Feeling Statement:\nI feel ${feeling} when ${when} because ${because}`
  return (
    <Stack gap={4}>
      <HStack justifyContent={'space-between'}>
        <Text>Practice a feeling statement.</Text>
        <CopyButton text={toCopy} disabled={!feeling || !when || !because} />
      </HStack>

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
