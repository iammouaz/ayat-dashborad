import { FunctionComponent } from 'react'
import Header from './Header'
import { Box, Flex } from '@chakra-ui/react'
import Sidebar from './Sidebar'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <Box px='12' bgColor='secondary' as='main'>
      <Header />
      <Flex>
        <Sidebar />
        {children}
      </Flex>
    </Box>
  )
}

export default Layout
