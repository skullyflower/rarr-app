import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Button, HStack, Menu, MenuButton, MenuList, Stack } from '@chakra-ui/react'
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
  return (
    <Box
      width={['100%', 'auto']}
      fontSize={'sm'}
      fontWeight={'bold'}
      lineHeight={1}
      paddingBlock={1}
      paddingInline={2}
      backgroundColor={isActive ? 'whiteAlpha.400' : undefined}
      borderRadius={5}
      border="2px solid"
      textTransform="uppercase"
      onClick={onClick}
      _hover={{ cursor: 'pointer', backgroundColor: 'whiteAlpha.100' }}
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
  return (
    <Menu defaultIsOpen>
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
              <NavItem
                isActive={activePath === 'resent'}
                onClick={() => setActivePath('resent')}
                text="Troubles"
              />
              <NavItem
                isActive={activePath === 'aca10'}
                onClick={() => setActivePath('aca10')}
                text="Emotional Sobriety"
              />
              <NavItem
                isActive={activePath === 'serenity'}
                onClick={() => setActivePath('serenity')}
                text="Serenity"
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
  return (
    <Box p={4}>
      <HStack wrap="wrap" gap={2} justifyContent={'center'}>
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
