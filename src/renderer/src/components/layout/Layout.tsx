import { Box, Image, Stack, useColorMode, LinkBox } from '@chakra-ui/react'
import NavBar from '../NavBar'
import rarrLogo from '@renderer/assets/RarrLogo.png'
import { Link as ReactRouterLink, Outlet } from 'react-router-dom'
import useToggleLock from '@renderer/hooks/useToggleLock'
import UnlockInventory from '@renderer/pages/UnlockInventory'
import Privacy from '@renderer/components/Privacy'

function Layout(): JSX.Element {
  const { isLocked } = useToggleLock()

  const { colorMode } = useColorMode()
  return (
    <Box
      bg={colorMode === 'light' ? 'whiteAlpha.800' : undefined}
      width="100%"
      height="100vh"
      //position={'fixed'}
      overflow={'auto'}
    >
      <Stack
        justifyContent="center"
        alignItems={'stretch'}
        w={{ base: '100%', md: '95%' }}
        marginInline={['0', 'auto']}
      >
        <header>
          <Stack
            direction={'row'}
            width={'100%'}
            paddingInline={4}
            justifyContent="space-between"
            alignItems={'flex-start'}
          >
            <LinkBox
              as={ReactRouterLink}
              width="120px"
              to={'/'}
              _hover={{ cursor: 'pointer' }}
              p={2}
              title="Ragers and Rampagers, Recovering"
            >
              <Image src={rarrLogo} alt="Ragers and Rampagers, Recovering" />
            </LinkBox>
            <NavBar />
          </Stack>
        </header>
        <Box maxW={'1500px'} width={'100%'} marginInline={'auto'}>
          {isLocked ? <UnlockInventory /> : <Outlet />}
        </Box>
        <footer id="pagefoot">
          <Privacy />
        </footer>
      </Stack>
    </Box>
  )
}
export default Layout
