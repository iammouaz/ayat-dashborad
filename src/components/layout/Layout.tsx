import { FunctionComponent } from 'react'
import Header from './Header'
import { Box, Grid, GridItem } from '@chakra-ui/react'
import Sidebar from './Sidebar'
import Breadcrumb from 'components/breadcrumb/Breadcrumb'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <Box px='12' bgColor='secondary' as='main'>
      <Header />
      <Grid
        w='full'
        templateColumns='repeat(9, 1fr)'
        gap={{ base: '20px', lg: '20px', xl: '50px' }}
      >
        <GridItem colSpan={{ base: 9, lg: 2 }}>
          <Sidebar />
        </GridItem>
        <GridItem colSpan={{ base: 9, lg: 7 }}>
          <Breadcrumb />
          {children}
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Layout
