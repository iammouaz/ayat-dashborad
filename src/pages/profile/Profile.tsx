import { Flex, Grid, GridItem } from '@chakra-ui/react'
import Layout from 'components/layout/Layout'
import { FunctionComponent } from 'react'
import { Outlet } from 'react-router-dom'
import avatarImg from 'assets/imgs/hospital.jpg'
import DetailsCard from 'components/cards/DetailsCard'

interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
  return (
    <Layout>
      <Grid pb='10' gap='50px' templateColumns='repeat(9, 1fr)'>
        <GridItem colSpan={{ base: 9, lg: 6 }}>
          <Flex py='4' flexDirection='column' justifyContent='center' gap='20px'>
            <Outlet />
          </Flex>
        </GridItem>
        <GridItem colSpan={{ base: 9, lg: 3 }}>
          <DetailsCard
            img={avatarImg}
            facebook='Lorem ipsum dolor sit'
            intagram='Lorem ipsum dolor sit'
            phone='+963 123 456 789'
            twitter='Lorem ipsum dolor sit'
            website='Lorem ipsum dolor sit'
          />
        </GridItem>
      </Grid>
    </Layout>
  )
}

export default Profile
