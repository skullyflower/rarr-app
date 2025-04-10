import { Card, CardBody } from '@chakra-ui/react'

const PageCard = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <Card background={'whiteAlpha.300'} maxH={'74vh'} overflowY="auto">
      <CardBody>{children}</CardBody>
    </Card>
  )
}
export default PageCard
