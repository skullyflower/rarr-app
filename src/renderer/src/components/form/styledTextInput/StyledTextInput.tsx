import { Textarea, TextareaProps } from '@chakra-ui/react'

interface StyledTextInputProps extends TextareaProps {
  value: string
  setter: (value: string) => void
}

const StyledTextInput = ({ value, setter, ...rest }: StyledTextInputProps): JSX.Element => {
  return <Textarea value={value} onChange={(ev) => setter(ev.target.value)} {...rest} />
}
export default StyledTextInput
