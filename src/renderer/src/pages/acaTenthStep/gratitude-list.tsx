import CopyButton from '@renderer/components/form/copy-button'
import { HStack, Stack, Text } from '@chakra-ui/react'
import { useCallback, useState } from 'react'
import useKeyCapture from '@renderer/components/hooks/useKeyCapture'
import SaveButton from '@renderer/components/form/save-button'
import ListerInput from '@renderer/components/form/ListerInput'

function GratitudeList(): JSX.Element {
  const [listOfGrats, setListOfGrats] = useState<string[]>([])
  const [oneGrat, setOneGrat] = useState<string>()
  const tocopy = `Today I am grateful for:\n- ${listOfGrats.join(', \n- ')}`

  const addGrat = useCallback(() => {
    if (oneGrat) {
      setListOfGrats([...listOfGrats, oneGrat])
      setOneGrat('')
    }
  }, [oneGrat, listOfGrats])

  useKeyCapture('Enter', addGrat)

  return (
    <Stack gap={4}>
      <HStack justifyContent={'space-between'}>
        <Text>What are you feeling grateful for today?</Text>
        <HStack gap={2}>
          <CopyButton text={tocopy} disabled={listOfGrats.length === 0} />
          <SaveButton text={tocopy} disabled={listOfGrats.length === 0} />
        </HStack>
      </HStack>
      <ListerInput list={listOfGrats} setList={setListOfGrats} placeholder="Add a gratitude..." />
    </Stack>
  )
}
export default GratitudeList
