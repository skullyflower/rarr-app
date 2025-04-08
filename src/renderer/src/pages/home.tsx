import { Box, Card, CardBody, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react'
import RarrSplash from '@renderer/assets/RARR_Splash.png'

function HomePage(): JSX.Element {
  return (
    <Stack gap={2}>
      <Heading as="h2" size="lg" textAlign="center">
        Welcome to Ragers and Rampagers Recovering
      </Heading>
      <Card bg="pink.900" color="purple.300" border="1px solid" marginInline="auto" marginBlock={4}>
        <CardBody>
          <Stack spacing={4} align="center">
            <HStack gap={2} position={'relative'} justifyContent="center" width="100%">
              <Box
                backgroundColor="purple.300"
                color={'pink.900'}
                borderRadius="md"
                padding={8}
                width="400px"
                textAlign="left"
                position={'relative'}
                left="50px"
                top="100px"
                fontSize={['lg', 'xl']}
              >
                <Text>Tired of the angry crowds with pitchforks and torches?</Text>
                <Text>Do mothers clutch their children when you walk by?</Text>
                <Text>WE KNOW HOW YOU FEEL!</Text>
              </Box>
              <Image width={'65%'} src={RarrSplash} alt="Welcome Home" />
            </HStack>
            <Text>Real recovery for ficticious creatures.</Text>
          </Stack>
        </CardBody>
      </Card>
    </Stack>
  )
}

export default HomePage
