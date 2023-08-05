import { Box, Divider, Flex, IconButton, Text } from '@chakra-ui/react'
import CustomizedAccordion from 'components/accordion/CustomizedAccordion'
import Titlewithborder from 'components/texts/Titlewithborder'
import { AccordionItems } from 'enums/AccourdionItems'
import React from 'react'
import ProductsContainer from './products/ProductsContainer'
import attachIcon from 'assets/icons/attach.svg'
import { Outlet, useNavigate, useOutlet } from 'react-router-dom'
import userIcon from 'assets/icons/dark-user.svg'
import townIcon from 'assets/icons/dark-town.svg'
import handIcon from 'assets/icons/hand.svg'
import orderIcon from 'assets/icons/ic_my_order.svg'
import ButtonNavLink from 'components/buttons/ButtonNavLink'
interface ServicesProps {}

const Services: React.FunctionComponent<ServicesProps> = () => {
  const navigate = useNavigate()
  const outlet = useOutlet()

  return (
    <React.Fragment>
      {outlet === null && (
        <>
          <Flex justifyContent='center' gap='30px'>
            <ButtonNavLink icon={userIcon} link='/home/profile/user' />
            <Divider h='25px' w='1.5px' my='auto' bg='lightGray' orientation='vertical' />
            <ButtonNavLink icon={townIcon} link='/home/profile/hospitals' />
            <Divider h='25px' w='1.5px' my='auto' bg='lightGray' orientation='vertical' />
            <ButtonNavLink icon={handIcon} link='/home/profile/services' />
            <Divider h='25px' w='1.5px' my='auto' bg='lightGray' orientation='vertical' />
            <ButtonNavLink icon={orderIcon} link='/home/profile/order' />
          </Flex>
          <Box overflow='hidden' boxShadow='lg' bg='white' borderRadius='20px' p='8'>
            <Titlewithborder fontSize='20px' text='Services' />

            <IconButton
              position='relative'
              bottom={1}
              float='right'
              aria-label='Add New'
              onClick={() => navigate('Add-New-Service')}
              icon={<img src={attachIcon} />}
            />

            <Flex mt='10' p='3' borderRadius='8px' bgColor='#ebf3ff' justifyContent='space-between'>
              <Text fontSize='14px' color='primary' fontWeight='semibold'>
                Lorem ipsum
              </Text>
              <Text
                fontSize='14px'
                cursor='pointer'
                userSelect='none'
                color='primary'
                fontWeight='semibold'
              >
                Action
              </Text>
            </Flex>

            {AccordionItems.map((item, index) => (
              <CustomizedAccordion key={`CustomizedAccordion-${index}`} item={item} />
            ))}
          </Box>
          <ProductsContainer />
        </>
      )}

      <Outlet />
    </React.Fragment>
  )
}

export default Services
