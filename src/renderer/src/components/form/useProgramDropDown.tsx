import { CheckIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Button, HStack, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { useState } from "react";

const useProgramDropDown = (programOptions: string[]) => {
  const [selectedProgram, setSelectedProgram] = useState(programOptions[0]);

  const ProgramDropDown = () => {
    return (
      <HStack
        fontSize="larger"
        gap={4}>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}>
            {selectedProgram}
          </MenuButton>
          <MenuList bgColor={"purple.600"}>
            {programOptions.map((program) => (
              <MenuItem
                icon={selectedProgram === program ? <CheckIcon /> : undefined}
                bgColor={"purple.600"}
                _hover={{ bg: "purple.800" }}
                onClick={() => setSelectedProgram(program)}>
                {program}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </HStack>
    );
  };
  return { ProgramDropDown, selectedProgram };
};
export default useProgramDropDown;
