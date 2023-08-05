import { Box, Image, Stack, Text } from '@chakra-ui/react'
import hero from 'assets/imgs/login-hero.png'
import logo from 'assets/imgs/Logo.png'
import LoginForm from './components/LoginForm'
interface LoginProps {}

const Login: React.FunctionComponent<LoginProps> = () => {
  return (
    <main>
      <Box w='full' display='flex'>
        <Box
          flex='0.5'
          minH='100vh'
          bgImage={hero}
          backgroundSize='cover'
          backgroundPosition='center'
          backgroundRepeat='no-repeat'
          display={{ base: 'none', lg: 'block' }}
        />
        <Box bgColor='#f9fcff' flex={{ base: '1', lg: '0.5' }} minH='100vh'>
          <Box
            marginX='auto'
            w='360px'
            display='flex'
            justifyContent='center'
            alignItems='cetner'
            h='full'
            flexDirection='column'
          >
            <Stack alignItems='center' spacing={2}>
              <Image h='10' src={logo} alt='logo' />
              <Text fontWeight='700' fontSize='15px'>
                Welcome Back! Please login to your account.
              </Text>
            </Stack>
            <LoginForm />
          </Box>
        </Box>
      </Box>
    </main>
  )
}

export default Login
