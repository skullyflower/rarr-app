import { Icon, IconProps } from '@chakra-ui/react'

const UnLockedIcon = (props: IconProps): JSX.Element => (
  <Icon viewBox="0 0 256 256" {...props}>
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
      d="M88,88V56a40,40,0,0,1,40-40c19.35,0,36.29,13.74,40,32"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
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
  </Icon>
)
export default UnLockedIcon
