import { FunctionComponent } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  Text,
  Image,
} from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import unlinkIcom from 'assets/icons/unlink.svg'
import editIcon from 'assets/icons/ic_edite.svg'

interface CustomizedAccordionProps {
  item: {
    title: string
    items: {
      title: string
      items: string[]
    }[]
  }
}

const CustomizedAccordion: FunctionComponent<CustomizedAccordionProps> = ({ item }) => {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <AccordionButton>
              <Flex w='full' justifyContent='space-between' alignItems='center'>
                <Flex alignItems='center' gap='5px'>
                  {isExpanded ? <ChevronUpIcon color='primary' /> : <ChevronDownIcon />}
                  <Text fontSize='14px' py='2' ml='2'>
                    {item.title}
                  </Text>
                </Flex>
                <Flex alignItems='center' gap='10px'>
                  <Image src={unlinkIcom} />
                  <Image src={editIcon} />
                </Flex>
              </Flex>
            </AccordionButton>
            <AccordionPanel p={0}>
              <Accordion p={0} bgColor='#f5f9ff' allowToggle>
                {item.items.map((nestedItem, index) => (
                  <AccordionItem key={`nested-item-1-${index}`}>
                    {({ isExpanded }) => (
                      <>
                        <AccordionButton borderLeft='8px solid #c3daff'>
                          <Flex w='full' justifyContent='space-between' alignItems='center'>
                            <Flex alignItems='center' gap='5px'>
                              <Text fontSize='14px' py='2' ml='2'>
                                {nestedItem.title}
                              </Text>
                            </Flex>
                            <Flex alignItems='center' gap='10px'>
                              <Image src={unlinkIcom} />
                              <Image src={editIcon} />
                            </Flex>
                          </Flex>
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                          <Flex gap='10px' flexDirection='column' justifyContent='center'>
                            {nestedItem.items.map((item, index) => (
                              <Text
                                fontSize='14px'
                                key={`nested-item-2-${index}`}
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
