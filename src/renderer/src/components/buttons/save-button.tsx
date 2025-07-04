import { Button, IconButton, Tooltip } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'
import SaveIcon from '../Icons/SaveIcon'

interface SaveButtonProps {
  text: string
  fileName?: string
  disabled?: boolean
  bigbutton?: boolean
}
const SaveButton = ({ text, fileName, disabled, bigbutton }: SaveButtonProps): JSX.Element => {
  const [saved, setSaved] = useState(false)

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
          onClick={() => window.api.writeLog(text, fileName).then((res) => setSaved(res))}
        >
          Save
        </Button>
      ) : (
        <IconButton
          aria-label="Save to Today's Log"
          icon={saved ? <CheckIcon /> : <SaveIcon />}
          disabled={disabled}
          size={'sm'}
          onClick={() => window.api.writeLog(text, fileName).then((res) => setSaved(res))}
        />
      )}
    </Tooltip>
  )
}
export default SaveButton
