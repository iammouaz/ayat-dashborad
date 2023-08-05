import { Flex, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

interface LinkItemProps {
  icon: string
  title: string
  link: string
}

const LinkItem: React.FunctionComponent<LinkItemProps> = ({ icon, link, title }) => {
  return (
    <NavLink className='w-full flex justify-center relative' to={link}>
      {({ isActive }) => (
        <Flex
          position='relative'
          _before={{
            content: '""',
            position: 'absolute',
            top: '0',
            right: '-50',
            width: isActive ? '50px' : '0px',
            height: '100%',
            bgColor: 'secondary',
          }}
          py='1'
          px='3'
          w='100%'
          borderLeftRadius='20px'
          bg={isActive ? 'secondary' : ''}
          alignItems='center'
          gap='10px'
        >
          <img src={icon} alt={title} />
          <Text color={isActive ? 'primary' : ''}>{title}</Text>
        </Flex>
      )}
    </NavLink>
  )
}

export default LinkItem
