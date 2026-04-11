import { Stack, Text } from '@chakra-ui/react'
import { useCallback, useState } from 'react'
import useKeyCapture from '@renderer/hooks/useKeyCapture'
import ListerInput from '@renderer/components/form/ListerInput'

function GratitudeList(): JSX.Element {
  const [listOfGrats, setListOfGrats] = useState<string[]>([])
  const [oneGrat, setOneGrat] = useState<string>()

  const addGrat = useCallback(() => {
    if (oneGrat) {
      setListOfGrats([...listOfGrats, oneGrat])
      setOneGrat('')
    }
  }, [oneGrat, listOfGrats])

  useKeyCapture({ key: 'Enter', callback: addGrat })

  return (
    <Stack gap={4}>
      <Text>What are you feeling grateful for today?</Text>
      <ListerInput list={listOfGrats} setList={setListOfGrats} placeholder="Add a gratitude..." />
    </Stack>
  )
}
export default GratitudeList
