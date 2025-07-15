import { Icon, IconProps } from '@chakra-ui/react'

const SaveIcon = (props: IconProps): JSX.Element => (
  <Icon viewBox="0 0 256 256" {...props}>
    <rect width="256" height="256" fill="none" />
    <path
      d="M216,83.31V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H172.69a8,8,0,0,1,5.65,2.34l35.32,35.32A8,8,0,0,1,216,83.31Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="152"
      y1="72"
      x2="96"
      y2="72"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </Icon>
)

export default SaveIcon
