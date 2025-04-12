import { Box } from '@chakra-ui/react'
import ReactQuill from 'react-quill'
import { modules } from '@renderer/components/form/quillbits.mjs'
import './StyledTextInput.css'

interface StyledTextInputProps {
  value: string
  setter: (value: string) => void
}

const StyledTextInput = ({ value, setter }: StyledTextInputProps): JSX.Element => {
  return (
    <Box
      flexGrow={3}
      minH={20}
      borderWidth={1}
      borderStyle="solid"
      borderRadius={5}
      _focusWithin={{
        outline: '1px solid',
        outlineColor: 'purple.300',
        backgroundColor: 'pink.800'
      }}
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
