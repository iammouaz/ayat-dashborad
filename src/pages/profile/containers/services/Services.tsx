import { Box, Flex, Text } from '@chakra-ui/react'
import CustomizedAccordion from 'components/accordion/CustomizedAccordion'
import Titlewithborder from 'components/texts/Titlewithborder'
import { AccordionItems } from 'enums/AccourdionItems'

interface ServicesProps {}

const Services: React.FunctionComponent<ServicesProps> = () => {
  return (
    <Box overflow='hidden' boxShadow='lg' bg='white' borderRadius='20px' p='8'>
      <Titlewithborder fontSize='20px' text='Services' />

      <Flex mt='10' p='3' borderRadius='8px' bgColor='#ebf3ff' justifyContent='space-between'>
        <Text color='primary' fontWeight='semibold'>
          Lorem ipsum
        </Text>
        <Text cursor='pointer' userSelect='none' color='primary' fontWeight='semibold'>
          Action
        </Text>
      </Flex>

      {AccordionItems.map((item, index) => (
        <CustomizedAccordion key={`CustomizedAccordion-${index}`} item={item} />
      ))}
    </Box>
  )
}

export default Services
