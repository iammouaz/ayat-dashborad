import { Button, Checkbox, Flex, FormControl, Link, Text } from '@chakra-ui/react'
import AuthInput from 'components/inputs/AuthInput'
import { useLogin } from 'hooks/useLogin'
import { FunctionComponent } from 'react'
import userIcon from 'assets/icons/ic_user.svg'
import passwordIcon from 'assets/icons/ic_password.svg'
interface LoginFormProps {}

const LoginForm: FunctionComponent<LoginFormProps> = () => {
  const { errors, handleSubmit, isLoading, onSubmit, register } = useLogin()

  console.log(errors)
  return (
    <FormControl
      as='form'
      py='16'
      display='flex'
      flexDirection='column'
      gap='15px'
      onSubmit={handleSubmit(onSubmit)}
    >
      <AuthInput
        name='username'
        register={register}
        placeholder='User Name or Number Phone'
        error={errors.username?.message}
        icon={userIcon}
      />
      <AuthInput
        name='password'
        register={register}
        placeholder='Password'
        error={errors.password?.message}
        type='password'
        icon={passwordIcon}
      />

      <Flex pt='4' justifyContent='space-between'>
        <Checkbox>
          <Text fontSize='13px'>Remember Me</Text>
        </Checkbox>

        <Link fontSize='13px' href='/forgot-password'>
          Forgot Password
        </Link>
      </Flex>

      <Flex pt='4' justifyContent='space-between'>
        <Button
          w='150px'
          borderRadius='8px'
          boxShadow='2xl'
          color='primary'
          border='1px solid #3b86ff'
          variant='whiteWithBorders'
          size='lg'
          disabled
        >
          Register
        </Button>
        <Button
          w='150px'
          bg='primary'
          borderRadius='8px'
          boxShadow='2xl'
          color='white'
          border='1px solid #3b86ff'
          size='lg'
          isLoading={isLoading}
          type='submit'
        >
          Login
        </Button>
      </Flex>
    </FormControl>
  )
}

export default LoginForm
