import { FunctionComponent } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  Text,
  Image,
  Editable,
  EditablePreview,
  EditableInput,
} from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import unlinkIcom from 'assets/icons/unlink.svg'
import editIcon from 'assets/icons/ic_edite.svg'
import { AccordionItemsTypes } from 'enums/AccourdionItems'

interface CustomizedAccordionProps {
  item: AccordionItemsTypes
  handleRemvoeItem: (parentId: string, itemId: string) => void
  hundleRemoveItemFirstLevel: (id: string) => void
}

const CustomizedAccordion: FunctionComponent<CustomizedAccordionProps> = ({
  item,
  handleRemvoeItem,
  hundleRemoveItemFirstLevel,
}) => {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <Flex px={2} alignItems='center'>
              <AccordionButton>
                <Flex w='full' justifyContent='space-between' alignItems='center'>
                  <Flex alignItems='center' gap='5px'>
                    {isExpanded ? <ChevronUpIcon color='primary' /> : <ChevronDownIcon />}
                    <Text fontSize='14px' py='2' ml='2'>
                      <Editable defaultValue={item.title}>
                        <EditablePreview />
                        <EditableInput />
                      </Editable>
                    </Text>
                  </Flex>
                </Flex>
              </AccordionButton>
              <Flex alignItems='center' gap='10px'>
                <Image
                  cursor='pointer'
                  onClick={() => hundleRemoveItemFirstLevel(item.id)}
                  src={unlinkIcom}
                />
                <Image cursor='pointer' src={editIcon} />
              </Flex>
            </Flex>
            <AccordionPanel p={0}>
              <Accordion p={0} bgColor='#f5f9ff' allowToggle>
                {item.items.map((nestedItem, index) => (
                  <AccordionItem key={`inner-accordion-${item.id}-${nestedItem.id}`}>
                  {() => (
                      <>
                        <Flex px={2} alignItems='center'>
                          <AccordionButton borderLeft='8px solid #c3daff'>
                            <Flex w='full' justifyContent='space-between' alignItems='center'>
                              <Flex alignItems='center' gap='5px'>
                                <Text fontSize='14px' py='2' ml='2'>
                                  <Editable defaultValue={nestedItem.title}>
                                    <EditablePreview />
                                    <EditableInput />
                                  </Editable>
                                </Text>
                              </Flex>
                            </Flex>
                          </AccordionButton>
                          <Flex alignItems='center' gap='10px'>
                            <Image
                              onClick={() => {
                                handleRemvoeItem(item.id, nestedItem.id)
                              }}
                              src={unlinkIcom}
                            />
                            <Image src={editIcon} />
                          </Flex>
                        </Flex>
                        <AccordionPanel pb={4}>
                          <Flex gap='10px' flexDirection='column' justifyContent='center'>
                            {nestedItem.items.map((item, index) => (
                              <Text
                                fontSize='14px'
                                key={`nested-item-2-${index}-${item}`}
                                px='16px'
                                py='10px'
                                bgColor='#ebf3ff'
                              >
                                {item}
                              </Text>
                            ))}
                          </Flex>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                ))}
              </Accordion>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  )
}

export default CustomizedAccordion
