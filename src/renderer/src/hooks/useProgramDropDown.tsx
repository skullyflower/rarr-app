import { CheckIcon, ChevronDownIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode
} from '@chakra-ui/react'

import { useState } from 'react'

const useProgramDropDown = (
  programOptions: string[]
): { ProgramDropDown: () => JSX.Element; selectedProgram: string } => {
  const [selectedProgram, setSelectedProgram] = useState(programOptions[0])

  const ProgramDropDown = (): JSX.Element => {
    const { colorMode } = useColorMode()
    return (
      <HStack fontSize="larger" gap={4}>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            _active={{
              bg: colorMode === 'dark' ? 'purple.700' : 'purple.100'
            }}
          >
            {selectedProgram}
          </MenuButton>
          <MenuList
            bgColor={colorMode === 'dark' ? 'purple.600' : 'purple.200'}
            _active={{
              bg: colorMode === 'dark' ? 'purple.700' : 'purple.100'
            }}
          >
            {programOptions.map((program) => (
              <MenuItem
                key={program}
                icon={selectedProgram === program ? <CheckIcon /> : <Box padding={2} />}
                color={colorMode === 'dark' ? 'red.100' : 'red.900'}
                bg={colorMode === 'dark' ? 'purple.600' : 'purple.200'}
                _hover={{
                  bg: colorMode === 'dark' ? 'purple.700' : 'purple.100'
                }}
                onClick={() => setSelectedProgram(program)}
                fontSize={'md'}
              >
                {program}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </HStack>
    )
  }
  return { ProgramDropDown, selectedProgram }
}
export default useProgramDropDown
