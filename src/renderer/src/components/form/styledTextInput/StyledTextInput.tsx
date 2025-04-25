import { Textarea } from '@chakra-ui/react'
// import ReactQuill from 'react-quill'
// import { modules } from '@renderer/components/form/quillbits.mjs'
import './StyledTextInput.css'

interface StyledTextInputProps {
  value: string
  setter: (value: string) => void
}

const StyledTextInput = ({ value, setter }: StyledTextInputProps): JSX.Element => {
  return <Textarea value={value} onChange={(ev) => setter(ev.target.value)} />
}
export default StyledTextInput
