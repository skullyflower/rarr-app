import { Box, Card, CardBody, CardHeader, Heading, useColorMode } from '@chakra-ui/react'

const PageCard = ({
  children,
  header
}: {
  children: React.ReactNode
  header?: React.ReactNode
}): JSX.Element => {
  const { colorMode } = useColorMode()

  const showHeader = header != null && header !== ''

  return (
    <Card
      width={'100%'}
      color={colorMode === 'dark' ? 'gray.100' : 'gray.900'}
      background={colorMode === 'dark' ? 'whiteAlpha.300' : 'whiteAlpha.800'}
      maxH={'74vh'}
    >
      {showHeader && (
        <CardHeader paddingBottom={2}>
          {typeof header === 'string' ? (
            <Heading
              as="h2"
              size="lg"
              textAlign="center"
              textShadow={'1px 1px 2px rgba(0, 0, 0, 0.5)'}
              paddingInline={4}
            >
              {header}
            </Heading>
          ) : (
            <Box width="100%">{header}</Box>
          )}
        </CardHeader>
      )}
      <CardBody overflowY="auto" paddingTop={2}>
        {children}
      </CardBody>
    </Card>
  )
}
export default PageCard
