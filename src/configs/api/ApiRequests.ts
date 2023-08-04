import { TLoginInputs } from 'models/auth/login.types'
import { useAxiosInstance } from './AxiosInstance'

export const useApiRequests = () => {
  const { axiosClient } = useAxiosInstance()

  return {
    loginApi: (data: TLoginInputs) => axiosClient.post('/auth/login', data),
  }
}
