import {
  Box,
  Editable,
  EditablePreview,
  EditableTextarea,
  HStack,
  IconButton,
  Tooltip,
  useEditableControls
} from '@chakra-ui/react'
import { useState } from 'react'
import SaveButton from './form/save-button'
import { EditIcon, CloseIcon } from '@chakra-ui/icons'

interface SemiSafeContentProps {
  rawContent: string | TrustedHTML
  fileName?: string
}
function SemiSafeContent({ rawContent, fileName }: SemiSafeContentProps): JSX.Element {
  const [text, setText] = useState<string>(rawContent as string)
  function EditableControls(): JSX.Element {
    const { isEditing, getCancelButtonProps, getEditButtonProps } = useEditableControls()

    return isEditing ? (
      <Tooltip hasArrow label={`Cancel`}>
        <IconButton
          aria-label="Cancel"
          size={'xs'}
          icon={<CloseIcon />}
          {...getCancelButtonProps()}
        />
      </Tooltip>
    ) : (
      <Tooltip hasArrow label={`Edit`}>
        <IconButton aria-label="Edit" size={'xs'} icon={<EditIcon />} {...getEditButtonProps()} />
      </Tooltip>
    )
  }

  return (
    <Editable
      value={text}
      style={{ whiteSpace: 'pre-wrap' }}
      onChange={setText}
      isPreviewFocusable={false}
    >
      <Box textAlign={'right'}>
        <HStack gap={2} justifyContent={'end'}>
          <EditableControls />
          <SaveButton text={text} fileName={fileName} disabled={rawContent === text} />
        </HStack>
      </Box>
      <EditablePreview />
      <EditableTextarea minHeight={'65vh'} />
    </Editable>
  )
}

export default SemiSafeContent
