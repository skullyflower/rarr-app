import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Card,
  CardBody,
  Heading,
  HStack
} from '@chakra-ui/react'
import React from 'react'

interface AccordionSectionProps {
  title: string
  children: React.ReactNode
}
const AccordionSection: React.FC<AccordionSectionProps> = ({ title, children }) => {
  return (
    <AccordionItem>
      <AccordionButton
        color={'purple.300'}
        backgroundColor={'pink.900'}
        _expanded={{
          //filter: 'grayscale(40%)',
          backgroundColor: 'pink.800',
          borderColor: 'purple.300'
        }}
        _hover={{
          backgroundColor: 'pink.800',
          borderColor: 'purple.300'
        }}
        borderRadius={6}
        border={'1px solid'}
      >
        <HStack width={'100%'} justifyContent={'space-between'}>
          <Heading
            color="inherit"
            as="h2"
            fontWeight={'normal'}
            size="lg"
            textShadow={'1px 1px 2px rgba(0, 0, 0, 0.3)'}
          >
            {title}
          </Heading>
          <AccordionIcon />
        </HStack>
      </AccordionButton>
      <AccordionPanel>
        <Card bg="pink.900" borderStyle={'solid'} borderWidth={1} borderColor="purple.300">
          <CardBody>{children}</CardBody>
        </Card>
      </AccordionPanel>
    </AccordionItem>
  )
}
export default AccordionSection
