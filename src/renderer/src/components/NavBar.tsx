import { ChevronDownIcon, LockIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  LinkBox,
  Menu,
  MenuButton,
  MenuList,
  Stack,
  Switch,
  useColorMode
} from '@chakra-ui/react'
import useToggleLock from '@renderer/hooks/useToggleLock'
import { toggleFontMode } from '@renderer/scripts/logsAPI.mjs'
import { Link, useMatch } from 'react-router-dom'

const NavItem = ({ text, to }: { text: string; to: string }): JSX.Element => {
  const { colorMode } = useColorMode()
  const color = colorMode === 'dark' ? 'gray.100' : 'red.900'
  const bgcolor = colorMode === 'dark' ? '' : 'gray.100'
  const activebg = colorMode === 'dark' ? 'whiteAlpha.300' : 'purple.300'
  return (
    <LinkBox
      as={Link}
      width={['100%', 'auto']}
      fontSize={'sm'}
      fontWeight={'bold'}
      lineHeight={1}
      paddingBlock={1}
      paddingInline={2}
      borderRadius={5}
      border="2px solid"
      backgroundColor={useMatch(to) ? activebg : bgcolor}
      color={color}
      textTransform="uppercase"
      _hover={{ cursor: 'pointer', backgroundColor: activebg }}
      to={to}
    >
      {text}
    </LinkBox>
  )
}

const MenuDDropDown = (): JSX.Element => {
  const { colorMode } = useColorMode()
  const color = colorMode === 'dark' ? 'gray.100' : 'red.900'
  const bgcolor = colorMode === 'dark' ? '' : 'gray.100'
  const activebg = colorMode === 'dark' ? 'whiteAlpha.300' : 'purple.300'
  return (
    <Menu>
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
              <NavItem to="/inventory" text="Trouble" />
              <NavItem to="/aca-tenth-step" text="Spawn of Trouble" />
              <NavItem to="serenity" text="Control" />
              <NavItem to="fears" text="Fear" />
            </Stack>
          </MenuList>
        </>
      )}
    </Menu>
  )
}

const NavBar = (): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { toggleLock, isLocked } = useToggleLock()
  const isApp = Boolean(window.api)

  return (
    <Box p={4} minW={'65%'}>
      <Stack gap={2}>
        <HStack wrap="wrap" gap={2} justifyContent={'flex-end'}>
          <Button size={'sm'} onClick={toggleFontMode}>
            Az
          </Button>
          <Button size="sm" onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
          {isApp && (
            <FormControl width={'auto'} display="flex" alignItems="center" gap={1}>
              <FormLabel htmlFor="lock" m="0">
                <LockIcon aria-label="Lock your log" />
              </FormLabel>
              <Switch isChecked={isLocked} id="lock" onChange={toggleLock} />
            </FormControl>
          )}
        </HStack>

        <HStack wrap="wrap" gap={2} justifyContent={'flex-start'}>
          <MenuDDropDown />
          <NavItem to="steps" text="The Steps" />
          {!isApp && <NavItem to="literature" text="literature" />}
          {isApp && <NavItem to="log" text="My Log" />}
        </HStack>
      </Stack>
    </Box>
  )
}

export default NavBar
