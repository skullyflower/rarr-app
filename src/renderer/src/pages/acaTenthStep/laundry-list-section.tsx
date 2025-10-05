import CheckboxGroupBox from '@renderer/components/form/CheckBoxGroupBox'
import { Box, Link, Stack, Text } from '@chakra-ui/react'
import strings from '@renderer/data/aca-tenth.json'

const bothLaundryLists = strings.laundryLists

const LaundryListSection = ({
  llTraits,
  setLLTraits
}: {
  llTraits: string[]
  setLLTraits: (value: string[]) => void
}): JSX.Element => {
  return (
    <Stack gap={4}>
      <Text>
        Select the Laundry List and Other Laundry List traits that you experienced today.
        <Link href="https://adultchildren.org/literature/laundry-list/" target="literature">
          Go to adultchildren.org more information.
        </Link>
      </Text>
      {bothLaundryLists.map((traitOptions, i) => (
        <Box key={`trait${i}`}>
          <Text>Traits {i + 1}</Text>
          <CheckboxGroupBox
            columns={2}
            valuesList={llTraits}
            options={traitOptions}
            setter={setLLTraits}
          />
        </Box>
      ))}
    </Stack>
  )
}
export default LaundryListSection
