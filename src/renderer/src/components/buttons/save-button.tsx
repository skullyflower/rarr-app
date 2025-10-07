import { Button, IconButton, Tooltip } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'
import SaveIcon from '../Icons/SaveIcon'
import { writeLog } from '@renderer/scripts/logsAPI.mjs'
import useKeyCapture from '@renderer/hooks/useKeyCapture'

interface SaveButtonProps {
  text: string
  fileName?: string
  disabled?: boolean
  bigbutton?: boolean
}
const SaveButton = ({ text, fileName, disabled, bigbutton }: SaveButtonProps): JSX.Element => {
  const [saved, setSaved] = useState(false)
  const saveLog = (): Promise<void> => writeLog(text, fileName).then((res) => setSaved(res))

  useKeyCapture({ key: 's', combo: true, callback: () => saveLog() })

  useEffect(() => {
    setSaved(false)
  }, [text])

  return (
    <Tooltip hasArrow label={`Save to ${fileName ? fileName : "Today's Log"}`}>
      {bigbutton ? (
        <Button
          leftIcon={saved ? <CheckIcon /> : <SaveIcon />}
          disabled={disabled}
          size={'sm'}
          onClick={saveLog}
        >
          Save
        </Button>
      ) : (
        <IconButton
          aria-label="Save to Today's Log"
          icon={saved ? <CheckIcon /> : <SaveIcon />}
          disabled={disabled}
          size={'sm'}
          onClick={saveLog}
        />
      )}
    </Tooltip>
  )
}
export default SaveButton
