import CheckboxGroupBox from '@renderer/components/form/CheckBoxGroupBox'
import { Stack, Text } from '@chakra-ui/react'
import { assets } from './aca-tenth-constants.d'

const AssetsSection = ({
  praise,
  setSetPraise
}: {
  praise: string[]
  setSetPraise: (value: string[]) => void
}): JSX.Element => {
  return (
    <Stack gap={4}>
      <Text>Select Your Assets, include those you are not sure about or would like to have.</Text>
      <Text textAlign={'center'} color={'red.200'} size={'lg'} fontWeight={'bold'}>
        {praise.length < 10 && 'Select at least 10.'}
      </Text>
      <CheckboxGroupBox columns={3} valuesList={praise} options={assets} setter={setSetPraise} />
    </Stack>
  )
}
export default AssetsSection
