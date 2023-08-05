import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons'
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react'
import Titlewithborder from 'components/texts/Titlewithborder'
import NestedCheckboxes from 'pages/profile/components/nestedCheckbox/NestedCheckboxes'
import searchIcon from 'assets/icons/search.svg'
import closeIcon from 'assets/icons/close.svg'

interface AddServiceProps {}

const AddService: React.FunctionComponent<AddServiceProps> = () => {
  return (
    <Box overflow='hidden' boxShadow='lg' bg='white' borderRadius='20px' p='8'>
      <Titlewithborder fontSize='20px' text='Add New Services' />
      <Flex position='relative' py={3} justifyContent='space-between'>
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <Image w='18px' src={searchIcon} />
          </InputLeftElement>
          <Input
            w='350px'
            rounded='3xl'
            _placeholder={{ fontSize: '14px' }}
            type='text'
            placeholder='Add New Services'
          />
        </InputGroup>
        <Image pr="100px" src={closeIcon} />
        <Box
          position='absolute'
          right='-32px'
          py={3}
          px={10}
          bg='primary'
          borderLeftRadius='20px'
          color='white'
          fontWeight='semibold'
        >
          Link
        </Box>
      </Flex>
      <Box pt={2}>
        {Array.from({ length: 4 }, (_, i) => (
          <Accordion key={`parent-${i}`} allowToggle>
            <AccordionItem border={0}>
              {({ isExpanded }) => (
                <>
                  <AccordionButton>
                    <Flex w='full' justifyContent='space-between' alignItems='center'>
                      <Flex alignItems='center' gap='5px'>
                        {isExpanded ? <ChevronUpIcon color='primary' /> : <ChevronDownIcon />}
                        <Text fontSize='14px' py='2' ml='2'>
                          Lorem ipsum dolor sit amet consectetur
                        </Text>
                      </Flex>
                    </Flex>
                  </AccordionButton>

                  <AccordionPanel p={0}>
                    {Array.from({ length: 4 }, (_, i) => (
                      <NestedCheckboxes key={`nested_${i}`} />
                    ))}
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        ))}
      </Box>
    </Box>
  )
}

export default AddService
