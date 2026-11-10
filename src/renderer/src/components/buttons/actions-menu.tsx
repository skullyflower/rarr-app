import {
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Tooltip,
  useDisclosure
} from '@chakra-ui/react'
import { CheckIcon, CopyIcon, DeleteIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'
import PrintIcon from '../Icons/PrintIcon'
import Confirm from '../Confirm'
import copyText from '@renderer/scripts/copyText.mjs'
import { deleteLog, printLog } from '@renderer/scripts/logsAPI.mjs'

const DotsIcon = (): JSX.Element => (
  <Icon viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="5" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="12" cy="19" r="2" />
  </Icon>
)

interface ActionsMenuProps {
  text: string
  fileName?: string
  afterdelete?: (what: string) => void
}

const ActionsMenu = ({ text, fileName, afterdelete }: ActionsMenuProps): JSX.Element => {
  const [copied, setCopied] = useState(false)
  const [printed, setPrinted] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    setCopied(false)
  }, [text])

  const handleDelete = (): void => {
    if (!fileName) return
    deleteLog(fileName).then(() => {
      afterdelete?.(fileName)
      onClose()
    })
  }

  return (
    <>
      <Menu>
        <Tooltip hasArrow label="More actions">
          <MenuButton as={IconButton} aria-label="More actions" size="sm" icon={<DotsIcon />} />
        </Tooltip>
        <MenuList>
          <MenuItem
            icon={copied ? <CheckIcon /> : <CopyIcon />}
            closeOnSelect={false}
            onClick={() => {
              copyText(text)
              setCopied(true)
            }}
          >
            Copy
          </MenuItem>
          {window.api?.shareText && (
            <MenuItem
              icon={<ExternalLinkIcon />}
              closeOnSelect={false}
              onClick={() => window.api?.shareText(text)}
            >
              Share
            </MenuItem>
          )}
          <MenuItem
            icon={printed ? <CheckIcon /> : <PrintIcon />}
            onClick={() => printLog(fileName).then((res) => setPrinted(res))}
          >
            Print
          </MenuItem>
          {fileName && afterdelete && (
            <>
              <MenuDivider />
              <MenuItem icon={<DeleteIcon />} onClick={onOpen}>
                Delete
              </MenuItem>
            </>
          )}
        </MenuList>
      </Menu>
      <Confirm
        isOpen={isOpen}
        onClose={onClose}
        title="Delete Entry"
        message="Are you sure you want to delete this entry?"
        onConfirm={handleDelete}
      />
    </>
  )
}
export default ActionsMenu
