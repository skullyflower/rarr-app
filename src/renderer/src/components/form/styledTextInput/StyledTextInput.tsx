import { Box } from '@chakra-ui/react'
import ReactQuill from 'react-quill'
import { modules } from '@renderer/components/form/quillbits.ts'
import './StyledTextInput.css'

interface StyledTextInputProps {
  value: string
  setter: (value: string) => void
}

const StyledTextInput = ({ value, setter }: StyledTextInputProps) => {
  return (
    <Box
      flexGrow={3}
      minH={20}
      borderWidth={1}
      borderStyle="solid"
      borderRadius={5}
      _focusWithin={{ outline: '2px solid' }}
      className="content"
    >
      <ReactQuill
        theme="snow"
        modules={modules}
        value={value}
        onChange={(value) => setter(value)}
      />
    </Box>
  )
}
export default StyledTextInput
