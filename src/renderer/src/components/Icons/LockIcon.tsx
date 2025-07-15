import { Icon, IconProps } from '@chakra-ui/react'

const LockedIcon = (props: IconProps): JSX.Element => (
  <Icon viewBox="0 0 256 256" {...props}>
    <rect width="256" height="256" fill="none" />
    <circle
      cx="128"
      cy="140"
      r="20"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="160"
      x2="128"
      y2="184"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="40"
      y="88"
      width="176"
      height="128"
      rx="8"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M88,88V56a40,40,0,0,1,80,0V88"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </Icon>
)
export default LockedIcon
