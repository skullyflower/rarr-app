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
  ResponsiveValue,
  Stack,
  Switch,
  Tooltip,
  useColorMode
} from '@chakra-ui/react'
import useToggleLock from '@renderer/hooks/useToggleLock'
import { toggleFontMode } from '@renderer/scripts/logsAPI.mjs'
import { Link, useMatch } from 'react-router-dom'
import { ReactNode } from 'react'

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

const MenuDDropDown = ({
  buttonText,
  children,
  size = 'sm'
}: {
  buttonText: string
  children: ReactNode[]
  size?: ResponsiveValue<'sm' | 'md' | 'lg' | 'xs'>
}): JSX.Element => {
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
            size={size}
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
            textAlign={'left'}
            borderRadius={5}
            border="2px solid"
            rightIcon={<ChevronDownIcon />}
          >
            {buttonText}
          </MenuButton>
          <MenuList
            background={colorMode === 'dark' ? 'gray.900' : 'gray.50'}
            padding={2}
            border={0}
          >
            <Stack direction={['column', 'row']} gap={2} justifyContent={'center'}>
              {children}
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
          <Tooltip hasArrow label={`Switch Font Mode`}>
            <Button size={'sm'} onClick={toggleFontMode}>
              Az
            </Button>
          </Tooltip>
          <Tooltip hasArrow label={`Switch Color Mode`}>
            <Button size="sm" onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Tooltip>
          {isApp && (
            <Tooltip hasArrow label={`Lock your log`}>
              <FormControl width={'auto'} display="flex" alignItems="center" gap={1}>
                <FormLabel htmlFor="lock" m="0">
                  <LockIcon aria-label="Lock your log" />
                </FormLabel>
                <Switch isChecked={isLocked} id="lock" onChange={toggleLock} />
              </FormControl>
            </Tooltip>
          )}
        </HStack>

        <HStack wrap="wrap" gap={2} justifyContent={'flex-start'}>
          <MenuDDropDown buttonText="Daily Inventories" size={'md'}>
            <NavItem to="inventory" text="Trouble" />
            <NavItem to="aca-tenth-step" text="Spawn of Trouble" />
            <NavItem to="serenity" text="Control" />
            <NavItem to="fears" text="Fear" />
          </MenuDDropDown>
          <MenuDDropDown buttonText="Literature">
            <NavItem to="steps" text="The Steps" />
            <NavItem to="literature" text="Stories" />
          </MenuDDropDown>
          {isApp && <NavItem to="log" text="My Log" />}
        </HStack>
      </Stack>
    </Box>
  )
}

export default NavBar
