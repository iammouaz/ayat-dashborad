import { IconButton, Image } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { NavLink } from 'react-router-dom'

interface ButtonNavLinkProps {
  icon: string
  title?: string
  link: string
}

const ButtonNavLink: FunctionComponent<ButtonNavLinkProps> = ({ icon, link, title }) => {
  return (
    <NavLink className='w-full flex justify-center relative' to={link}>
      {({ isActive }) => (
        <IconButton
          size='lg'
          width='70px'
          h='50px'
          aria-label={title || ''}
          icon={<Image src={icon} alt={title || ''} />}
          bg={isActive ? 'white' : 'lightGray'}
          borderRadius='10px'
        />
      )}
    </NavLink>
  )
}

export default ButtonNavLink
