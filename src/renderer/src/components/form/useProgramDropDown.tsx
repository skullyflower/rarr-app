import { CheckIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Button, HStack, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'

import { useState } from 'react'

const useProgramDropDown = (
  programOptions: string[]
): { ProgramDropDown: () => JSX.Element; selectedProgram: string } => {
  const [selectedProgram, setSelectedProgram] = useState(programOptions[0])

  const ProgramDropDown = (): JSX.Element => {
    return (
      <HStack fontSize="larger" gap={4}>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {selectedProgram}
          </MenuButton>
          <MenuList bgColor={'purple.600'}>
            {programOptions.map((program) => (
              <MenuItem
                key={program}
                icon={selectedProgram === program ? <CheckIcon /> : <Box padding={2} />}
                bgColor={'purple.600'}
                _hover={{ bg: 'purple.800' }}
                onClick={() => setSelectedProgram(program)}
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
