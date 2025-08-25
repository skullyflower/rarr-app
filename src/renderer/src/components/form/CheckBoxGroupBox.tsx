import {
  Checkbox,
  CheckboxGroup,
  Box,
  SimpleGrid,
  HStack,
  Badge,
  useColorMode
} from '@chakra-ui/react'
import { useEffect } from 'react'

interface CheckboxGroupBoxProps {
  columns?: number
  valuesList: string[]
  options: Record<string, string> | string[]
  setter: (newvalue: string[]) => void
}
export default function CheckboxGroupBox({
  columns,
  valuesList,
  options,
  setter
}: CheckboxGroupBoxProps): JSX.Element {
  const { colorMode } = useColorMode()

  const optionsList = Array.isArray(options) ? options : Object.entries(options)

  const handleCBChange = (list: string[], value: string): string[] => {
    return list.includes(value) ? list.filter((a) => a !== value) : [...list, value]
  }

  const updateValueList = (oldValue: string[], newValue: string) => (): void => {
    setter(handleCBChange(oldValue, newValue))
  }

  useEffect(
    function () {
      setter([])
    },
    [options, setter]
  )

  return (
    <Box borderWidth={1} borderStyle="solid" borderRadius={5} p={15} gap={2} className="content">
      <HStack gap={2} padding={2} wrap={'wrap'}>
        {valuesList.map((value) => (
          <Badge variant="outline" borderRadius={2} key={value}>
            {value.replaceAll('_', ' ')}
          </Badge>
        ))}
      </HStack>
      <CheckboxGroup colorScheme="pink" value={valuesList}>
        <SimpleGrid columns={{ sm: 1, md: columns ?? 2 }} gap={4}>
          {optionsList.map((part) => (
            <Checkbox
              //alignItems="start"
              border="1px solid"
              borderColor="purple.700"
              color={colorMode === 'dark' ? 'gray.100' : 'purple:700'}
              gap={4}
              borderRadius={7}
              _checked={{ backgroundColor: colorMode === 'dark' ? 'pink.800' : 'gray.50' }}
              _hover={{
                backgroundColor: colorMode === 'dark' ? 'pink.800' : 'gray.50',
                borderColor: 'purple.300'
              }}
              p={2}
              key={typeof part === 'string' ? part : part[0]}
              value={typeof part === 'string' ? part : part[0]}
              onChange={updateValueList(valuesList, typeof part === 'string' ? part : part[0])}
            >
              {typeof part === 'string' ? (
                part
              ) : (
                <>
                  <b>( {part[0].replaceAll('_', ' ')} )</b> {part[1]}
                </>
              )}
            </Checkbox>
          ))}
        </SimpleGrid>
      </CheckboxGroup>
    </Box>
  )
}
