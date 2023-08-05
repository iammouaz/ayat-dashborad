import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useToast } from '@chakra-ui/react'
import { AES } from 'crypto-js'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import * as yup from 'yup'
import { TLoginInputs } from 'models/auth/login.types'
import { useAxiosInstance } from 'configs/api/AxiosInstance'
import { useApiRequests } from 'configs/api/ApiRequests'

export const loginSchema = yup
  .object()
  .shape({
    username: yup.string().required(),
    password: yup.string().min(7).required(),
  })
  .required()

export const useLogin = () => {
  const { loginApi } = useApiRequests()
  const { setAuthToken } = useAxiosInstance()
  const navigate = useNavigate()

  const { mutate, isLoading } = useMutation({
    mutationFn: loginApi,
    onSuccess: (res) => {
      if (res?.status === 200) {
        const authToken = res.data?.token
        const secretKey = import.meta.env.VITE_API_SECRET_KEY
        const encryptedAuthToken = AES.encrypt(authToken, secretKey).toString()
        Cookies.set('token', encryptedAuthToken)
        setAuthToken(encryptedAuthToken)
        navigate('/home/profile/services')
      }
    },
    onError: (error) => {
      if ((error as any).response.status === 400) {
        toast({
          status: 'error',
          title: 'The username or password you entered is incorrect. Please try again.',
          isClosable: true,
          duration: 5000,
        })
      }
    },
  })

  const toast = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginInputs>({
    resolver: yupResolver(loginSchema),
  })

  const onSubmit: SubmitHandler<TLoginInputs> = (data: TLoginInputs) => mutate({ ...data })

  const useLogout = () => {
    Cookies.remove('token')
    setAuthToken('')
    window.location.replace('/login')
  }

  return { onSubmit, register, handleSubmit, isLoading, errors, useLogout }
}
