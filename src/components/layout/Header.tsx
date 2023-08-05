import { Box, Flex, IconButton, Image } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import logo from 'assets/icons/big-logo.svg'
import massagesIcon from 'assets/icons/ic_chat.svg'
import nofifcationIcon from 'assets/icons/Group 7226.svg'
import userIcon from 'assets/icons/inactive-user.svg'

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <Box py='2' px='4' as='nav'>
      <Flex justifyContent='space-between' alignItems='center'>
        <Image h='70px' w='160px' src={logo} alt='logo' />
        <Flex justifyContent='space-between' gap='20px' alignItems='center'>
          {[massagesIcon, nofifcationIcon, userIcon].map((icon, index) => (
            <IconButton
              key={`icon-${index}`}
              bg='white'
              borderRadius='full'
              py='6'
              px='3'
              aria-label='Massages'
              icon={<Image src={icon} alt='massages' />}
            />
          ))}
        </Flex>
      </Flex>
    </Box>
  )
}

export default Header
