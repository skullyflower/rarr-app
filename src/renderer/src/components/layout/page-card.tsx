import { Card, CardBody } from '@chakra-ui/react'

const PageCard = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <Card
      background={'whiteAlpha.300'}
      border={['none', '1px solid']}
      maxH={'580px'}
      overflowY="auto"
    >
      <CardBody>{children}</CardBody>
    </Card>
  )
}
export default PageCard
