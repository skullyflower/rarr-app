import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Card,
  CardBody,
  Heading,
  HStack,
  useColorMode
} from '@chakra-ui/react'
import React from 'react'

interface AccordionSectionProps {
  title: string
  children: React.ReactNode
}
const AccordionSection: React.FC<AccordionSectionProps> = ({ title, children }) => {
  const { colorMode } = useColorMode()

  return (
    <AccordionItem>
      <AccordionButton
        color={colorMode === 'dark' ? 'purple.300' : 'purple:700'}
        backgroundColor={colorMode === 'dark' ? 'pink.900' : 'gray.300'}
        _expanded={{
          backgroundColor: colorMode === 'dark' ? 'pink.800' : 'gray.300',
          borderColor: 'purple.300'
        }}
        _hover={{
          backgroundColor: colorMode === 'dark' ? 'pink.800' : 'gray.50',
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
        <Card
          color={colorMode === 'dark' ? 'purple.300' : 'purple:700'}
          bg={colorMode === 'dark' ? 'pink.900' : 'gray.200'}
          borderStyle={'solid'}
          borderWidth={1}
          borderColor="purple.300"
        >
          <CardBody>{children}</CardBody>
        </Card>
      </AccordionPanel>
    </AccordionItem>
  )
}
export default AccordionSection
