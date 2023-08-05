import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
} from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'
import homeIcon from 'assets/icons/home-small.svg'
const Breadcrumb = () => {
  const location = useLocation()
  const paths = location.pathname.split('/').filter((path) => path !== '')

  return (
    <ChakraBreadcrumb separator='>>'>
      {paths.map((path, index) => (
        <BreadcrumbItem fontSize='12px' key={index}>
          {index === paths.length - 1 ? (
            <BreadcrumbLink fontWeight='semibold' textTransform='capitalize'>
              {path}
            </BreadcrumbLink>
          ) : (
            <BreadcrumbLink
              fontWeight='semibold'
              textTransform='capitalize'
              color={index === 0 ? 'primary' : ''}
              as={Link}
              to={`/${paths.slice(0, index + 1).join('/')}`}
              display='flex'
              gap='5px'
              alignItems='center'
            >
              {index === 0 && <Image w='20px' h='20px' src={homeIcon} alt='home' />}
              {path}
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
      ))}
    </ChakraBreadcrumb>
  )
}

export default Breadcrumb
