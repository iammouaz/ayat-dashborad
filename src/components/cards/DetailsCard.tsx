import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react'
import Titlewithborder from 'components/texts/Titlewithborder'
import { FunctionComponent } from 'react'
import editIcon from 'assets/icons/ic_edite-white.svg'
import phoneIcon from 'assets/icons/ic_phone.svg'
import websiteIcon from 'assets/icons/website.svg'
import facebookIcon from 'assets/icons/ic_facebook.svg'
import instagramIcon from 'assets/icons/ic_instagram.svg'
import linkedInIcon from 'assets/icons/ic_linkedin.svg'
import cameraIcon from 'assets/imgs/camera.png'

interface DetailsCardProps {
  img: string
  phone: string
  website: string
  facebook: string
  intagram: string
  twitter: string
}

const DetailsCard: FunctionComponent<DetailsCardProps> = ({
  facebook,
  img,
  intagram,
  phone,
  twitter,
  website,
}) => {
  return (
    <Flex bgColor='white' flexDirection='column' gap='30px'>
      <Box
        position='relative'
        borderRadius='8px'
        bgRepeat='no-repeat'
        bgPosition='center'
        bgSize='cover'
        bgImage={img}
        h='250px'
        w='full'
      >
        <Box
          position='absolute'
          right={0}
          bottom={5}
          py={3}
          px={5}
          bg='primary'
          borderLeftRadius='20px'
        >
          <Image w="24px" src={cameraIcon} alt='edit' />
        </Box>
      </Box>

      <Flex px='4' flexDirection='column'>
        <Text fontWeight='semibold' fontSize='17px'>
          Lorem ipsum
        </Text>
        <Text fontSize='15px' opacity='0.7'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </Text>
      </Flex>
      <Divider bg='lightGray' w='full' h='1px' />

      <Flex px={4} justifyContent='space-between' alignItems='center' position='relative'>
        <Box>
          <Titlewithborder text='Contact Us' fontSize='20px' />
        </Box>
        <Box
          position='absolute'
          right={0}
          bottom={0}
          py={3}
          px={5}
          bg='primary'
          borderLeftRadius='20px'
        >
          <Image src={editIcon} alt='edit' />
        </Box>
      </Flex>

      <Box px={4} pb={4} display='flex' flexDirection='column' gap='20px'>
        <Flex alignItems='center' gap='30px'>
          <Image src={phoneIcon} />
          <Text fontWeight="800">{phone}</Text>
        </Flex>
        <Flex alignItems='center' gap='30px'>
          <Image src={websiteIcon} />
          <Text fontWeight="800">{website}</Text>
        </Flex>
        <Flex alignItems='center' gap='30px'>
          <Image src={facebookIcon} />
          <Text fontWeight="800">{facebook}</Text>
        </Flex>
        <Flex alignItems='center' gap='30px'>
          <Image src={instagramIcon} />
          <Text fontWeight="800">{intagram}</Text>
        </Flex>
        <Flex alignItems='center' gap='30px'>
          <Image src={linkedInIcon} />
          <Text fontWeight="800">{twitter}</Text>
        </Flex>
      </Box>
    </Flex>
  )
}

export default DetailsCard
