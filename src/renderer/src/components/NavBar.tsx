import { ChevronDownIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  Stack,
  useColorMode
} from '@chakra-ui/react'
import { ReactNode } from 'react'

const NavItem = ({
  isActive,
  text,
  onClick,
  icon
}: {
  isActive: boolean
  text: string
  onClick: () => void
  icon?: ReactNode
}): JSX.Element => {
  const { colorMode } = useColorMode()
  const color = colorMode === 'dark' ? 'gray.100' : 'red.900'
  const bgcolor = colorMode === 'dark' ? '' : 'gray.100'
  const activebg = colorMode === 'dark' ? 'whiteAlpha.300' : 'purple.300'

  return (
    <Box
      width={['100%', 'auto']}
      fontSize={'sm'}
      fontWeight={'bold'}
      lineHeight={1}
      paddingBlock={1}
      paddingInline={2}
      backgroundColor={isActive ? activebg : bgcolor}
      color={color}
      borderRadius={5}
      border="2px solid"
      textTransform="uppercase"
      onClick={onClick}
      _hover={{ cursor: 'pointer', backgroundColor: activebg }}
    >
      {text} {icon}
    </Box>
  )
}

const MenuDDropDown = ({
  activePath,
  setActivePath
}: {
  activePath: string
  setActivePath: (value: string) => void
}): JSX.Element => {
  const { colorMode } = useColorMode()
  const color = colorMode === 'dark' ? 'gray.100' : 'red.900'
  const bgcolor = colorMode === 'dark' ? '' : 'gray.100'
  const activebg = colorMode === 'dark' ? 'whiteAlpha.300' : 'purple.300'

  return (
    <Menu defaultIsOpen>
      {({ isOpen }) => (
        <>
          <MenuButton
            as={Button}
            color={color}
            variant={'outline'}
            width={['100%', 'auto']}
            fontSize={'sm'}
            fontWeight={'bold'}
            lineHeight={1}
            paddingBlock={1}
            paddingInline={2}
            backgroundColor={isOpen ? activebg : bgcolor}
            _active={{ activebg }}
            textTransform="uppercase"
            borderRadius={5}
            border="2px solid"
            rightIcon={<ChevronDownIcon />}
          >
            Daily Inventories
          </MenuButton>
          <MenuList
            background={colorMode === 'dark' ? 'gray.900' : 'gray.50'}
            padding={2}
            border={0}
          >
            <Stack direction={['column', 'row']} gap={2} justifyContent={'center'}>
              <NavItem
                isActive={activePath === 'resent'}
                onClick={() => setActivePath('resent')}
                text="Trouble"
              />
              <NavItem
                isActive={activePath === 'aca10'}
                onClick={() => setActivePath('aca10')}
                text="Spawn of Trouble"
              />
              <NavItem
                isActive={activePath === 'serenity'}
                onClick={() => setActivePath('serenity')}
                text="Control"
              />
              <NavItem
                isActive={activePath === 'fear'}
                onClick={() => setActivePath('fear')}
                text="Fears"
              />
            </Stack>
          </MenuList>
        </>
      )}
    </Menu>
  )
}

const NavBar = ({
  activePath,
  setActivePath
}: {
  activePath: string
  setActivePath: (value: string) => void
}): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box p={4}>
      <HStack wrap="wrap" gap={2} justifyContent={'center'}>
        <Button size="sm" onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>

        <MenuDDropDown activePath={activePath} setActivePath={setActivePath} />
        <NavItem
          isActive={activePath === 'steps'}
          onClick={() => setActivePath('steps')}
          text="The Steps"
        />
        <NavItem
          isActive={activePath === 'log'}
          onClick={() => setActivePath('log')}
          text="My Log"
        />
      </HStack>
    </Box>
  )
}

export default NavBar
