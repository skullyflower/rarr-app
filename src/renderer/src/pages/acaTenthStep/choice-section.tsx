import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Stack,
  Text
} from '@chakra-ui/react'
import { useState } from 'react'
import { choiceLevels } from './aca-tenth-constants.d'

const ChoiceSection = ({
  freedomText,
  setFreedomText
}: {
  freedomText: string
  setFreedomText: (value: string) => void
}): JSX.Element => {
  const [freedomValue, setFreedomValue] = useState<number>(50)

  const handleSelected = (value: number): void => {
    setFreedomValue(value)
    const combos = Object.entries(choiceLevels)
    const stringValue = combos.find(([, val]) => val === value)?.[0] || ''
    setFreedomText(stringValue)
  }
  return (
    <Stack gap={4}>
      <Text>Where are you on the discernment scale, today?</Text>
      <Text fontWeight={'bold'} textAlign={'center'}>
        {freedomText}
      </Text>

      <Box bgColor={'blackAlpha.100'} borderRadius={6} padding={8}>
        <Stack gap={4}>
          <Slider
            aria-label="slider-ex-5"
            step={16.5}
            value={freedomValue}
            onChange={(val) => handleSelected(val)}
          >
            <SliderMark value={0} mt="3" ml="-1em" fontSize="sm">
              Denial
            </SliderMark>
            <SliderMark
              display={{ base: 'none', md: 'block' }}
              value={33}
              mt="3"
              ml="-1.8em"
              fontSize="sm"
            >
              Some Choice
            </SliderMark>
            <SliderMark
              display={{ base: 'none', md: 'block' }}
              value={66}
              mt="3"
              ml="-2.5em"
              fontSize="sm"
            >
              Greater Choice
            </SliderMark>
            <SliderMark value={100} mt="3" ml="-3em" fontSize="sm">
              Discernment
            </SliderMark>
            <SliderTrack backgroundColor="red.400" w={3}>
              <SliderFilledTrack backgroundColor="green.400" />
            </SliderTrack>
            <SliderThumb w={6} h={6} />
          </Slider>
        </Stack>
      </Box>
    </Stack>
  )
}
export default ChoiceSection
