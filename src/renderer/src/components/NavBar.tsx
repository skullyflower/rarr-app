import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Button, HStack, Menu, MenuButton, MenuList, Stack } from '@chakra-ui/react'

const NavItem = ({ text, onClick }: { text: string; onClick: () => void }): JSX.Element => {
  return (
    <Box
      width={['100%', 'auto']}
      fontSize={'sm'}
      fontWeight={'bold'}
      lineHeight={1}
      paddingBlock={1}
      paddingInline={2}
      borderRadius={5}
      border="2px solid"
      textTransform="uppercase"
      onClick={onClick}
      _hover={{ cursor: 'pointer', backgroundColor: 'whiteAlpha.400' }}
    >
      {text}
    </Box>
  )
}

const MenuDDropDown = ({
  setActivePath
}: {
  setActivePath: (value: string) => void
}): JSX.Element => {
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            as={Button}
            variant={'outline'}
            width={['100%', 'auto']}
            fontSize={'sm'}
            fontWeight={'bold'}
            lineHeight={1}
            paddingBlock={1}
            paddingInline={2}
            backgroundColor={isOpen ? 'whiteAlpha.300' : 'whiteAlpha.100'}
            textTransform="uppercase"
            borderRadius={5}
            border="2px solid"
            rightIcon={<ChevronDownIcon />}
          >
            Daily Inventories
          </MenuButton>
          <MenuList background={'gray.900'} padding={2} border={0}>
            <Stack direction={['column', 'row']} gap={2} justifyContent={'center'}>
              <NavItem onClick={() => setActivePath('resent')} text="Troubles" />
              <NavItem onClick={() => setActivePath('aca10')} text="Self Care" />
              <NavItem onClick={() => setActivePath('serenity')} text="Serenity" />
            </Stack>
          </MenuList>
        </>
      )}
    </Menu>
  )
}

const NavBar = ({ setActivePath }: { setActivePath: (value: string) => void }): JSX.Element => {
  return (
    <Box p={4}>
      <HStack wrap="wrap" gap={2} justifyContent={'center'}>
        <MenuDDropDown setActivePath={setActivePath} />
        <NavItem onClick={() => setActivePath('steps')} text="The Steps" />
        <NavItem onClick={() => setActivePath('log')} text="My Log" />
      </HStack>
    </Box>
  )
}

export default NavBar
