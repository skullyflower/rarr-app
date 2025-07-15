import { Icon, IconProps } from '@chakra-ui/react'

const PrintIcon = (props: IconProps): JSX.Element => (
  <Icon viewBox="0 0 256 256" {...props}>
    <rect width="256" height="256" fill="none" />
    <polyline
      points="64 80 64 40 192 40 192 80"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="64"
      y="152"
      width="128"
      height="64"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M64,176H24V96c0-8.84,7.76-16,17.33-16H214.67C224.24,80,232,87.16,232,96v80H192"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="188" cy="116" r="12" />
  </Icon>
)

export default PrintIcon
