import {
  FormLabel,
  Input,
  FormControl,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from '@chakra-ui/react'
import { FunctionComponent, useState } from 'react'
import { UseFormRegister } from 'react-hook-form'
import showPasswordIcon from 'assets/icons/Mask Group 42.svg'

interface AuthInputProps {
  placeholder?: string
  className?: string
  type?: string
  name: string
  register: UseFormRegister<any>
  error?: string
  icon?: string
}

const AuthInput: FunctionComponent<AuthInputProps> = ({
  name,
  register,
  className,
  error,
  placeholder,
  type,
  icon,
}) => {
  const [showPassword, setshowPassword] = useState(false)

  return (
    <FormControl variant='floating'>
      <InputGroup>
        {icon && (
          <InputLeftElement pr='5px' pointerEvents='none'>
            <img src={icon} />
          </InputLeftElement>
        )}
        <Input
          className={className ? className : ''}
          type={showPassword ? 'text' : type ? type : 'text'}
          placeholder=''
          {...register(`${name}`)}
          isInvalid={error ? true : false}
          boxShadow='xl'
          _placeholder={{ fontSize: '12px' }}
          size='lg'
          fontSize='12px'
          paddingTop='8px'
        />
        <FormLabel>
          <Text color={error ? 'red.500' : ''}>{placeholder}</Text>
        </FormLabel>
        {type === 'password' && (
          <InputRightElement mt={1} zIndex={3}>
            <img
              onClick={() => {
                setshowPassword((prev) => !prev)
              }}
              src={showPasswordIcon}
            />
          </InputRightElement>
        )}
      </InputGroup>
    </FormControl>
  )
}

export default AuthInput
