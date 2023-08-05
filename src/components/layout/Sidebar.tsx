import { Avatar, Box, Flex, Image, List, Text } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import avatarImg from 'assets/imgs/hospital.jpg'
import chartsIcon from 'assets/icons/chart.svg'
import LinkItem from 'components/buttons/LinkItem'
import homeIcon from 'assets/icons/home.svg'
import myInstituionsIcon from 'assets/icons/my-institutions.svg'
import institutions from 'assets/icons/institutions.svg'
import drugsIcon from 'assets/icons/drugs.svg'
import doctorIcon from 'assets/icons/doctor-online.svg'
import searchDrugsIcon from 'assets/icons/search-drugs.svg'
import offersIcon from 'assets/icons/ic_offers.svg'

interface SidebarProps {}

const Sidebar: FunctionComponent<SidebarProps> = () => {
  return (
    <Box minH="100vh" boxShadow='lg' bg='white' borderRadius='20px' py='6' px='8'>
      <Flex alignItems='center' gap='10px'>
        <Avatar w='2.5rem' h='2.5rem' src={avatarImg} />
        <Text fontWeight='bold'>User Name</Text>
        <Image src={chartsIcon} />
      </Flex>
      <List display='flex' flexDirection='column' gap='20px' py='8'>
        <LinkItem icon={homeIcon} link='' title='Home' />
        <LinkItem icon={myInstituionsIcon} link='/my-institutions' title='My Institutions' />
        <LinkItem icon={institutions} link='/institution' title='Institutions' />
        <LinkItem icon={drugsIcon} link='/drugs' title='Drugs' />
        <LinkItem icon={doctorIcon} link='/doctors' title='Doctor Online' />
        <LinkItem icon={searchDrugsIcon} link='/search-drugs' title='Search Drugs' />
        <LinkItem icon={offersIcon} link='/offers' title='Offers' />
      </List>
    </Box>
  )
}

export default Sidebar
