import { Box, Button, Collapse } from '@chakra-ui/react'
import { useState, ReactElement } from 'react'

const CollapsingText = ({ children }: { children: ReactElement }): JSX.Element => {
  const [show, setShow] = useState(false)
  const handleToggle = (): void => setShow(!show)

  return (
    <Box>
      <Box textAlign={'center'}>
        <Button variant={'link'} size="sm" onClick={handleToggle}>
          {show ? 'Show Less' : 'More Info'}
        </Button>
      </Box>
      <Collapse startingHeight={0} in={show}>
        {children}
      </Collapse>
    </Box>
  )
}
export default CollapsingText
