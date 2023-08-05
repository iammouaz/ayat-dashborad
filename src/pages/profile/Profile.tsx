import { Divider, Flex, Grid, GridItem } from '@chakra-ui/react'
import ButtonNavLink from 'components/buttons/ButtonNavLink'
import Layout from 'components/layout/Layout'
import { FunctionComponent } from 'react'
import userIcon from 'assets/icons/dark-user.svg'
import townIcon from 'assets/icons/dark-town.svg'
import handIcon from 'assets/icons/hand.svg'
import orderIcon from 'assets/icons/ic_my_order.svg'
import { Outlet } from 'react-router-dom'
import avatarImg from 'assets/imgs/hospital.jpg'
import DetailsCard from 'components/cards/DetailsCard'

interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
  return (
    <Layout>
      <Grid pb='10' gap='50px' templateColumns='repeat(9, 1fr)'>
        <GridItem colSpan={6}>
          <Flex py='4' flexDirection='column' justifyContent='center' gap='20px'>
            <Flex justifyContent='center' gap='30px'>
              <ButtonNavLink icon={userIcon} link='/home/profile/user' />
              <Divider h='25px' w='1.5px' my='auto' bg='lightGray' orientation='vertical' />
              <ButtonNavLink icon={townIcon} link='/home/profile/hospitals' />
              <Divider h='25px' w='1.5px' my='auto' bg='lightGray' orientation='vertical' />
              <ButtonNavLink icon={handIcon} link='/home/profile/services' />
              <Divider h='25px' w='1.5px' my='auto' bg='lightGray' orientation='vertical' />
              <ButtonNavLink icon={orderIcon} link='/home/profile/order' />
            </Flex>
            <Outlet />
          </Flex>
        </GridItem>
        <GridItem colSpan={3}>
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
