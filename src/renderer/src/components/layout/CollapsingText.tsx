import { Box, Button, Collapse, HStack } from '@chakra-ui/react'
import { useState, ReactElement } from 'react'

const CollapsingText = ({ children }: { children: ReactElement }): JSX.Element => {
  const [show, setShow] = useState(false)
  const handleToggle = (): void => setShow(!show)

  return (
    <HStack gap={4} alignItems={'flex-end'}>
      <Collapse startingHeight={0} in={show}>
        {children}
      </Collapse>
      <Box textAlign={'right'} flexGrow={2}>
        <Button variant={'link'} size="sm" onClick={handleToggle}>
          {show ? 'Show Less' : 'More Info'}
        </Button>
      </Box>
    </HStack>
  )
}
export default CollapsingText
