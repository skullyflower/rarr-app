import { Box, Image, VStack, Stack, HStack, FormControl, FormLabel, Switch } from '@chakra-ui/react'
import NavBar from '../NavBar'
import rarrLogo from '@renderer/assets/RarrLogo.svg'
import { ReactElement } from 'react'
import { LockIcon } from '@chakra-ui/icons'

interface LayoutProps {
  children: ReactElement
  activePath: string
  setActivePath: (value: string) => void
  isLocked: boolean
  toggleLock: () => void
}

function Layout({
  children,
  activePath,
  setActivePath,
  isLocked,
  toggleLock
}: LayoutProps): JSX.Element {
  return (
    <VStack
      justifyContent="center"
      alignItems={'stretch'}
      w={{ base: '100%', md: '95%' }}
      marginInline={['0', 'auto']}
      maxW={'900px'}
    >
      <header>
        <Stack
          direction={['column', 'row']}
          width={'100%'}
          paddingInline={4}
          justifyContent="space-between"
          alignItems={['center', 'flex-start']}
        >
          <Box
            width="120px"
            onClick={() => setActivePath('home')}
            _hover={{ cursor: 'pointer' }}
            p={2}
            title="Ragers and Rampagers, Recovering"
          >
            <Image src={rarrLogo} alt="Ragers and Rampagers, Recovering" />
          </Box>
          <HStack wrap="wrap" gap={2} justifyContent={'center'}>
            <NavBar activePath={activePath} setActivePath={setActivePath} />
            <FormControl width={'auto'} display="flex" alignItems="center">
              <FormLabel htmlFor="lock" mb="0">
                <LockIcon aria-label="Lock your log" />
              </FormLabel>
              <Switch isChecked={isLocked} id="lock" onChange={toggleLock} />
            </FormControl>
          </HStack>
        </Stack>
      </header>
      <Box>{children}</Box>
      <footer id="pagefoot"></footer>
    </VStack>
  )
}
export default Layout
