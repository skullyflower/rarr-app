import { CloseIcon, DeleteIcon } from '@chakra-ui/icons'
import {
  Box,
  Card,
  CardBody,
  HStack,
  IconButton,
  Stack,
  Text,
  Tooltip,
  useDisclosure
} from '@chakra-ui/react'
import Confirm from '@renderer/components/Confirm'
import SemiSafeContent from '@renderer/components/SemiSafeContent'
import { useEffect, useState } from 'react'

interface oneEntry {
  filename: string
  content: string
}
const InventoryJoural = (): JSX.Element => {
  const [entries, setEntries] = useState<string[]>([])
  const [selectedEntry, setSelectedEntry] = useState<oneEntry | null>(null)
  const [toDelete, setToDelete] = useState<string | null>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const triggerDelete = (entry: string): void => {
    setToDelete(entry)
    onOpen()
  }
  const handleDelete = (): void => {
    if (!toDelete) return
    window.api.deleteLog(toDelete).then(() => {
      setEntries((prev) => prev.filter((e) => e !== toDelete))
      setToDelete(null)
      setSelectedEntry(null)
      onClose()
    })
  }

  useEffect(() => {
    window.api.getLogList().then((res) => {
      setEntries(res)
    })
  }, [])

  const getContents = (filename): void => {
    window.api.readLog(filename).then((res) => {
      setSelectedEntry({ filename: filename, content: res })
    })
  }
  const formatTitle = (title: string): string => {
    const datePattern = /(\d{4})-(\d{1,2})-(\d{1,2})/
    if (datePattern.test(title)) {
      return new Date(title).toDateString()
    }
    return title
  }

  const LogHeader = (): JSX.Element => {
    return (
      <HStack width={'100%'} justifyContent="start">
        <Text>Inventory Journal</Text>
      </HStack>
    )
  }

  const DeleteButton = ({ what }: { what: string }): JSX.Element => {
    return (
      <Tooltip hasArrow label={`Delete ${formatTitle(what)}`}>
        <IconButton
          variant={'ghost'}
          size={'sm'}
          aria-label="Delete Entry"
          icon={<DeleteIcon />}
          onClick={() => triggerDelete(what)}
        />
      </Tooltip>
    )
  }
  const Confirmation = (): JSX.Element => {
    return (
      <Confirm
        isOpen={isOpen}
        onClose={onClose}
        title="Delete Entry"
        message="Are you sure you want to delete this entry?"
        onConfirm={handleDelete}
      />
    )
  }

  if (selectedEntry) {
    return (
      <Box>
        <Stack>
          <HStack justifyContent="end">
            <IconButton
              variant={'ghost'}
              size={'sm'}
              aria-label="Go Back"
              icon={<CloseIcon />}
              onClick={() => setSelectedEntry(null)}
            />
          </HStack>
          <Card
            bg="whiteAlpha.300"
            border={['none', '1px solid']}
            maxHeight={'75vh'}
            overflowY={'auto'}
          >
            <CardBody>
              <HStack justifyContent={'space-between'}>
                <Text fontSize={'lg'} fontWeight="bold">
                  {formatTitle(selectedEntry.filename)}
                </Text>
                <DeleteButton what={selectedEntry.filename} />
              </HStack>
              <SemiSafeContent
                rawContent={selectedEntry.content}
                fileName={selectedEntry.filename}
              />
            </CardBody>
          </Card>
        </Stack>
        <Confirmation />
      </Box>
    )
  }

  return (
    <Box>
      <Stack>
        <LogHeader />
        <Card bg="whiteAlpha.300" border={['none', '1px solid']}>
          <CardBody>
            <Stack gap={1}>
              {entries.length < 1 && (
                <Text>
                  No entries found. Use the inventory forms under &quot;Daily Inventories&quot; to
                  add entries to your log.
                </Text>
              )}
              {entries.map((entry, index) => (
                <HStack
                  key={index}
                  padding={2}
                  borderRadius={4}
                  justifyContent="space-between"
                  _hover={{ backgroundColor: 'whiteAlpha.400' }}
                >
                  <Text
                    flexGrow={1}
                    _hover={{ cursor: 'pointer', fontWeight: 'bold' }}
                    onClick={() => getContents(entry)}
                  >
                    {formatTitle(entry)}
                  </Text>
                  <DeleteButton what={entry} />
                </HStack>
              ))}
            </Stack>
          </CardBody>
        </Card>
      </Stack>
      <Confirmation />
    </Box>
  )
}
export default InventoryJoural
