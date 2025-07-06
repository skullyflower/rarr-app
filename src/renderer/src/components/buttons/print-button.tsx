import { Button, IconButton, Tooltip } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import PrintIcon from '../Icons/PrintIcon'
import { printLog } from '@renderer/scripts/logsAPI.mjs'

interface PrintButtonProps {
  fileName?: string
  disabled?: boolean
  bigbutton?: boolean
}
const PrintButton = ({ fileName, disabled, bigbutton }: PrintButtonProps): JSX.Element => {
  const [printed, setPrinted] = useState(false)

  return (
    <Tooltip hasArrow label={`Print this log`}>
      {bigbutton ? (
        <Button
          leftIcon={printed ? <CheckIcon /> : <PrintIcon />}
          disabled={disabled}
          size={'sm'}
          onClick={() => printLog(fileName).then((res) => setPrinted(res))}
        >
          Print
        </Button>
      ) : (
        <IconButton
          aria-label="Print this log"
          icon={printed ? <CheckIcon /> : <PrintIcon />}
          disabled={disabled}
          size={'sm'}
          onClick={() => printLog(fileName).then((res) => setPrinted(res))}
        />
      )}
    </Tooltip>
  )
}
export default PrintButton
