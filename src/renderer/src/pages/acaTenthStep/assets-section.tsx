import CheckboxGroupBox from '@renderer/components/form/CheckBoxGroupBox'
import { HStack, Stack, Text } from '@chakra-ui/react'
import { assets } from './aca-tenth-constants.d'
import { useState } from 'react'
import CopyButton from '@renderer/components/form/copy-button'
import SaveButton from '@renderer/components/form/save-button'

const AssetsSection = (): JSX.Element => {
  const [praise, setSetPraise] = useState<string[]>([])
  const toCopy = `Praise Today: \n\t• I am ${praise.join(',\n\t• I am ')}`

  return (
    <Stack gap={4}>
      <HStack justifyContent={'space-between'}>
        <Text>Select Your Assets, include those you are not sure about or would like to have.</Text>
        <HStack gap={2}>
          <CopyButton text={toCopy} disabled={praise.length === 0} />
          <SaveButton text={toCopy} disabled={praise.length === 0} />
        </HStack>
      </HStack>
      <Text textAlign={'center'} color={'red.200'} size={'lg'} fontWeight={'bold'}>
        {praise.length < 10 && 'Select at least 10.'}
      </Text>
      <CheckboxGroupBox columns={3} valuesList={praise} options={assets} setter={setSetPraise} />
    </Stack>
  )
}
export default AssetsSection
