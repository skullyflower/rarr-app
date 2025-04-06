import CheckboxGroupBox from '@renderer/components/form/CheckBoxGroupBox'
import { Card, CardBody, HStack, Stack, Text } from '@chakra-ui/react'
import { assets } from './aca-tenth-constants'
import { useState } from 'react'
import CopyButton from '@renderer/components/form/copy-button'

const AssetsSection = () => {
  const [praise, setSetPraise] = useState<string[]>([])
  const toCopy = `Praise Today: \n I am ${praise.join(',\n I am ')}`

  return (
    <Card
      bg="pink.900"
      //color="purple.200"
      border={['none', '1px solid']}
    >
      <CardBody>
        <Stack gap={4}>
          <HStack justifyContent={'space-between'}>
            <Text>
              Select Your Assets, include those you are not sure about or would like to have.
            </Text>
            <CopyButton text={toCopy} disabled={praise.length === 0} />
          </HStack>
          <Text textAlign={'center'} color={'red.200'} size={'lg'} fontWeight={'bold'}>
            {praise.length < 10 && 'Select at least 10.'}
          </Text>
          <CheckboxGroupBox
            columns={3}
            valuesList={praise}
            options={assets}
            setter={setSetPraise}
          />
        </Stack>
      </CardBody>
    </Card>
  )
}
export default AssetsSection
