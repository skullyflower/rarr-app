import { Card, CardBody, useColorMode } from '@chakra-ui/react'

const PageCard = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const { colorMode } = useColorMode()

  return (
    <Card
      width={'100%'}
      color={colorMode === 'dark' ? 'gray.100' : 'gray.900'}
      background={colorMode === 'dark' ? 'whiteAlpha.300' : 'whiteAlpha.800'}
      maxH={'74vh'}
      overflowY="auto"
    >
      <CardBody>{children}</CardBody>
    </Card>
  )
}
export default PageCard
