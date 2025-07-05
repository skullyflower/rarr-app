import CheckboxGroupBox from '@renderer/components/form/CheckBoxGroupBox'
import { HStack, Link, Stack, Text } from '@chakra-ui/react'
import { laundryLists } from '@renderer/pages/acaTenthStep/aca-tenth-constants.d'
import CopyButton from '@renderer/components/buttons/copy-button'
import SaveButton from '@renderer/components/buttons/save-button'
const bothLaundryLists = laundryLists.flat()
const LaundryListSection = ({
  llTraits,
  setLLTraits
}: {
  llTraits: string[]
  setLLTraits: (value: string[]) => void
}): JSX.Element => {
  const toCopy = `Today I: \n\t• ${llTraits.join(',\n\t• ')}`

  return (
    <Stack gap={4}>
      <HStack justifyContent={'space-between'}>
        <Text>
          Select the Laundry List and Other Laundry List traits that you experienced today.{' '}
          <Link href="https://adultchildren.org/literature/laundry-list/" target="literature">
            Go to adultchildren.org more information.
          </Link>
        </Text>
        <HStack gap={2}>
          <CopyButton text={toCopy} disabled={llTraits.length === 0} />
          <SaveButton text={toCopy} disabled={llTraits.length === 0} />
        </HStack>
      </HStack>
      <CheckboxGroupBox
        columns={2}
        valuesList={llTraits}
        options={bothLaundryLists}
        setter={setLLTraits}
      />
    </Stack>
  )
}
export default LaundryListSection
