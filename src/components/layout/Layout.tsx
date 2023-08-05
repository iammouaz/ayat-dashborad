import { FunctionComponent } from 'react'
import Header from './Header'
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react'
import Sidebar from './Sidebar'
import Breadcrumb from 'components/breadcrumb/Breadcrumb'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <Box px='12' bgColor='secondary' as='main'>
      <Header />
      <Grid w='full' templateColumns='repeat(9, 1fr)' gap='50px'>
        <GridItem colSpan={2}>
          <Sidebar />
        </GridItem>
        <GridItem colSpan={7}>
          <Breadcrumb />
          {children}
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Layout
