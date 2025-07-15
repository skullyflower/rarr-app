import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react'
import RarrSplash from '@renderer/assets/RARR_Splash.png'
import ColorBox from '@renderer/components/layout/color-box'

function HomePage(): JSX.Element {
  return (
    <Stack gap={2}>
      <Heading as="h2" size="lg" textAlign="center">
        Welcome to Ragers and Rampagers Recovering
      </Heading>
      <ColorBox>
        <Box position={'relative'}>
          <Stack spacing={4} align="center">
            <Stack
              position={'relative'}
              direction={{ base: 'column', md: 'row' }}
              justifyContent="end"
              width="100%"
            >
              <Box
                backgroundColor="purple.300"
                color={'pink.900'}
                borderRadius="md"
                padding={8}
                width={{ base: '100%', md: '43%' }}
                maxH="fit-content"
                textAlign="left"
                position={{ base: 'static', md: 'absolute' }}
                left="50px"
                bottom="30px"
                fontSize={['lg', 'xl']}
              >
                <Text>Tired of the angry crowds with pitchforks and torches?</Text>
                <Text>Do mothers clutch their children when you walk by?</Text>
                <Text>WE KNOW HOW YOU FEEL!</Text>
              </Box>
              <Image width={{ base: '100%', md: '65%' }} src={RarrSplash} alt="Welcome Home" />
            </Stack>
            <Text>Real recovery for fictitious creatures.</Text>
          </Stack>
        </Box>
      </ColorBox>
    </Stack>
  )
}

export default HomePage
